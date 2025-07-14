import React from 'react';
import './Sidebar.css';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: string) => void;
  currentView: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onNavigate, currentView }) => {
  const menuItems = [
    { id: 'home', label: 'الرئيسية', icon: '🏠' },
    { id: 'topics', label: 'المواضيع', icon: '📚' },
    { id: 'about', label: 'عن التطبيق', icon: 'ℹ️' },
    { id: 'contact', label: 'تواصل معنا', icon: '📞' }
  ];

  const quickLinks = [
    { label: 'وزارة العدل', url: 'https://moj.gov.eg', icon: '⚖️' },
    { label: 'نقابة المحامين', url: 'https://www.lawyersegypt.org', icon: '👨‍💼' },
    { label: 'حماية المستهلك', url: 'https://www.cpa.gov.eg', icon: '🛡️' },
    { label: 'البنك المركزي', url: 'https://www.cbegypt.gov.eg', icon: '🏦' }
  ];

  const emergencyNumbers = [
    { label: 'الشرطة', number: '122', icon: '🚨' },
    { label: 'الإسعاف', number: '123', icon: '🚑' },
    { label: 'الإطفاء', number: '180', icon: '🚒' },
    { label: 'خط نجدة', number: '16000', icon: '📞' }
  ];

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
      <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <h3>🧠 خليك فاهم</h3>
          <button className="sidebar-close" onClick={onClose}>×</button>
        </div>
        
        <div className="sidebar-content">
          <nav className="sidebar-nav">
            <h4 className="sidebar-section-title">التنقل</h4>
            {menuItems.map(item => (
              <button
                key={item.id}
                className={`sidebar-nav-item ${currentView === item.id ? 'active' : ''}`}
                onClick={() => onNavigate(item.id)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="sidebar-section">
            <h4 className="sidebar-section-title">روابط مفيدة</h4>
            <div className="quick-links">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quick-link"
                >
                  <span className="link-icon">{link.icon}</span>
                  <span className="link-label">{link.label}</span>
                  <span className="external-icon">🔗</span>
                </a>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <h4 className="sidebar-section-title">أرقام الطوارئ</h4>
            <div className="emergency-numbers">
              {emergencyNumbers.map((emergency, index) => (
                <div key={index} className="emergency-item">
                  <span className="emergency-icon">{emergency.icon}</span>
                  <div className="emergency-info">
                    <span className="emergency-label">{emergency.label}</span>
                    <a href={`tel:${emergency.number}`} className="emergency-number">
                      {emergency.number}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sidebar-footer">
            <p className="app-version">الإصدار 1.0</p>
            <p className="copyright">© 2024 خليك فاهم</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;