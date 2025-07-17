import React, { useState, useEffect } from 'react';
import { database, UserSettings } from '../services/database';
import './Settings.css';

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

const Settings: React.FC<SettingsProps> = ({ isOpen, onClose }) => {
  const [settings, setSettings] = useState<UserSettings>(database.getSettings());
  const [activeTab, setActiveTab] = useState('general');
  const [stats, setStats] = useState(database.getStats());

  useEffect(() => {
    if (isOpen) {
      setSettings(database.getSettings());
      setStats(database.getStats());
    }
  }, [isOpen]);

  const handleSettingChange = <K extends keyof UserSettings>(
    key: K,
    value: UserSettings[K]
  ) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    database.updateSetting(key, value);
  };

  const handleExportData = () => {
    const data = database.exportData();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `khalek-fahem-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        if (database.importData(content)) {
          setSettings(database.getSettings());
          setStats(database.getStats());
          alert('تم استيراد البيانات بنجاح!');
        } else {
          alert('فشل في استيراد البيانات. تأكد من صحة الملف.');
        }
      };
      reader.readAsText(file);
    }
  };

  const handleClearData = () => {
    if (window.confirm('هل أنت متأكد من حذف جميع البيانات؟ لا يمكن التراجع عن هذا الإجراء.')) {
      database.clearAllData();
      setSettings(database.getSettings());
      setStats(database.getStats());
      alert('تم حذف جميع البيانات بنجاح!');
    }
  };

  const handleClearSearchHistory = () => {
    if (window.confirm('هل تريد حذف سجل البحث؟')) {
      database.clearSearchHistory();
      setSettings(database.getSettings());
    }
  };

  const tabs = [
    { id: 'general', label: 'عام', icon: '⚙️' },
    { id: 'appearance', label: 'المظهر', icon: '🎨' },
    { id: 'data', label: 'البيانات', icon: '💾' },
    { id: 'stats', label: 'الإحصائيات', icon: '📊' },
    { id: 'about', label: 'حول', icon: 'ℹ️' }
  ];

  if (!isOpen) return null;

  return (
    <>
      <div className="settings-overlay" onClick={onClose} />
      <div className="settings-modal">
        <div className="settings-header">
          <h2>⚙️ الإعدادات</h2>
          <button className="settings-close" onClick={onClose}>×</button>
        </div>

        <div className="settings-content">
          <div className="settings-tabs">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`settings-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-icon">{tab.icon}</span>
                <span className="tab-label">{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="settings-panels">
            {/* General Settings */}
            {activeTab === 'general' && (
              <div className="settings-panel">
                <h3>الإعدادات العامة</h3>
                
                <div className="setting-group">
                  <label>اللغة</label>
                  <select
                    value={settings.language}
                    onChange={(e) => handleSettingChange('language', e.target.value as 'ar' | 'en')}
                  >
                    <option value="ar">العربية</option>
                    <option value="en">English</option>
                  </select>
                </div>

                <div className="setting-group">
                  <label>الإشعارات</label>
                  <div className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={settings.notifications}
                      onChange={(e) => handleSettingChange('notifications', e.target.checked)}
                    />
                    <span className="toggle-slider"></span>
                  </div>
                </div>

                <div className="setting-group">
                  <label>الحفظ التلقائي</label>
                  <div className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={settings.autoSave}
                      onChange={(e) => handleSettingChange('autoSave', e.target.checked)}
                    />
                    <span className="toggle-slider"></span>
                  </div>
                </div>
              </div>
            )}

            {/* Appearance Settings */}
            {activeTab === 'appearance' && (
              <div className="settings-panel">
                <h3>إعدادات المظهر</h3>
                
                <div className="setting-group">
                  <label>المظهر</label>
                  <div className="theme-options">
                    {['light', 'dark', 'auto'].map(theme => (
                      <button
                        key={theme}
                        className={`theme-option ${settings.theme === theme ? 'active' : ''}`}
                        onClick={() => handleSettingChange('theme', theme as 'light' | 'dark' | 'auto')}
                      >
                        {theme === 'light' && '☀️ فاتح'}
                        {theme === 'dark' && '🌙 داكن'}
                        {theme === 'auto' && '🔄 تلقائي'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="setting-group">
                  <label>حجم الخط</label>
                  <div className="font-size-options">
                    {['small', 'medium', 'large'].map(size => (
                      <button
                        key={size}
                        className={`font-size-option ${settings.fontSize === size ? 'active' : ''}`}
                        onClick={() => handleSettingChange('fontSize', size as 'small' | 'medium' | 'large')}
                      >
                        {size === 'small' && 'صغير'}
                        {size === 'medium' && 'متوسط'}
                        {size === 'large' && 'كبير'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Data Management */}
            {activeTab === 'data' && (
              <div className="settings-panel">
                <h3>إدارة البيانات</h3>
                
                <div className="data-actions">
                  <button className="data-action export" onClick={handleExportData}>
                    📤 تصدير البيانات
                  </button>
                  
                  <label className="data-action import">
                    📥 استيراد البيانات
                    <input
                      type="file"
                      accept=".json"
                      onChange={handleImportData}
                      style={{ display: 'none' }}
                    />
                  </label>
                  
                  <button className="data-action clear-search" onClick={handleClearSearchHistory}>
                    🗑️ مسح سجل البحث
                  </button>
                  
                  <button className="data-action clear-all" onClick={handleClearData}>
                    ⚠️ حذف جميع البيانات
                  </button>
                </div>

                <div className="data-info">
                  <h4>معلومات البيانات</h4>
                  <div className="data-stats">
                    <div className="data-stat">
                      <span className="stat-label">المفضلة:</span>
                      <span className="stat-value">{settings.favoriteTopics.length}</span>
                    </div>
                    <div className="data-stat">
                      <span className="stat-label">العلامات المرجعية:</span>
                      <span className="stat-value">{settings.bookmarks.length}</span>
                    </div>
                    <div className="data-stat">
                      <span className="stat-label">سجل البحث:</span>
                      <span className="stat-value">{settings.searchHistory.length}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Statistics */}
            {activeTab === 'stats' && (
              <div className="settings-panel">
                <h3>الإحصائيات</h3>
                
                <div className="stats-grid">
                  <div className="stat-card">
                    <div className="stat-icon">✅</div>
                    <div className="stat-info">
                      <div className="stat-number">{stats.topicsCompleted}</div>
                      <div className="stat-label">مواضيع مكتملة</div>
                    </div>
                  </div>
                  
                  <div className="stat-card">
                    <div className="stat-icon">📖</div>
                    <div className="stat-info">
                      <div className="stat-number">{stats.totalTopicsAccessed}</div>
                      <div className="stat-label">مواضيع تم الوصول إليها</div>
                    </div>
                  </div>
                  
                  <div className="stat-card">
                    <div className="stat-icon">⏱️</div>
                    <div className="stat-info">
                      <div className="stat-number">{Math.round(stats.totalTimeSpent / 60)}</div>
                      <div className="stat-label">دقائق قضيتها</div>
                    </div>
                  </div>
                  
                  <div className="stat-card">
                    <div className="stat-icon">⭐</div>
                    <div className="stat-info">
                      <div className="stat-number">{stats.averageRating.toFixed(1)}</div>
                      <div className="stat-label">متوسط التقييم</div>
                    </div>
                  </div>
                  
                  <div className="stat-card">
                    <div className="stat-icon">❤️</div>
                    <div className="stat-info">
                      <div className="stat-number">{stats.favoriteCount}</div>
                      <div className="stat-label">المفضلة</div>
                    </div>
                  </div>
                  
                  <div className="stat-card">
                    <div className="stat-icon">🔖</div>
                    <div className="stat-info">
                      <div className="stat-number">{stats.bookmarkCount}</div>
                      <div className="stat-label">العلامات المرجعية</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* About */}
            {activeTab === 'about' && (
              <div className="settings-panel">
                <h3>حول التطبيق</h3>
                
                <div className="about-content">
                  <div className="app-info">
                    <h4>🧠 خليك فاهم</h4>
                    <p>تطبيق شامل للثقافة القانونية والمعلومات العامة</p>
                    <p>الإصدار: 2.0.0</p>
                  </div>
                  
                  <div className="features-list">
                    <h4>الميزات الجديدة:</h4>
                    <ul>
                      <li>✅ نظام قاعدة بيانات متقدم</li>
                      <li>✅ إعدادات مخصصة للمستخدم</li>
                      <li>✅ تتبع التقدم والإحصائيات</li>
                      <li>✅ نظام المفضلة والعلامات المرجعية</li>
                      <li>✅ سجل البحث والمواضيع الحديثة</li>
                      <li>✅ تصدير واستيراد البيانات</li>
                      <li>✅ تحسينات في الأداء والاستجابة</li>
                    </ul>
                  </div>
                  
                  <div className="contact-info">
                    <h4>تواصل معنا:</h4>
                    <p>📧 info@khalek-fahem.com</p>
                    <p>🌐 www.khalek-fahem.com</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;