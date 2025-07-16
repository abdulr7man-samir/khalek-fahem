import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import TopicCard from './components/TopicCard';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import { topics, categories } from './data/topics';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home'); // home, topics, about, contact, all-topics

  const filteredTopics = useMemo(() => {
    let filtered = topics;
    
    // Filter by category
    if (selectedCategory && selectedCategory !== 'all') {
      filtered = filtered.filter(topic => topic.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(topic => 
        topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  }, [selectedCategory, searchQuery]);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentView('topics');
    setSidebarOpen(false);
  };

  const handleNavigation = (view: string) => {
    setCurrentView(view);
    setSidebarOpen(false);
    if (view === 'home') {
      setSelectedCategory('');
      setSearchQuery('');
    } else if (view === 'all-topics') {
      setSelectedCategory('all');
      setSearchQuery('');
    }
  };

  const renderHomeView = () => (
    <div className="home-view">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            🧠 خليك فاهم
          </h1>
          <p className="hero-subtitle">
            دليلك الموثوق لمعرفة حقوقك في جميع مجالات الحياة
          </p>
          <p className="hero-description">
            اكتشف حقوقك واعرف كيف تتصرف في أي موقف قانوني أو اجتماعي
          </p>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">{topics.length.toLocaleString()}+</div>
              <div className="stat-label">موضوع متاح</div>
            </div>
            <div className="stat">
              <div className="stat-number">{categories.length - 1}</div>
              <div className="stat-label">فئة مختلفة</div>
            </div>
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">معلومات دقيقة</div>
            </div>
          </div>
        </div>
      </div>

      <div className="categories-showcase">
        <h2 className="section-title">اختر المجال اللي يهمك</h2>
        <div className="categories-grid">
          {/* All Topics Card */}
          <div 
            className="category-showcase-card"
            onClick={() => handleNavigation('all-topics')}
          >
            <div className="category-icon">📚</div>
            <h3 className="category-name">كل المواضيع</h3>
            <p className="category-count">
              {topics.length} موضوع
            </p>
          </div>
          
          {categories.slice(1).map(category => (
            <div 
              key={category.id}
              className="category-showcase-card"
              onClick={() => handleCategorySelect(category.id)}
            >
              <div className="category-icon">{category.icon}</div>
              <h3 className="category-name">{category.name}</h3>
              <p className="category-count">
                {topics.filter(t => t.category === category.id).length} موضوع
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="features-section">
        <h2 className="section-title">ليه تختار "خليك فاهم"؟</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚖️</div>
            <h3>معلومات قانونية دقيقة</h3>
            <p>كل المعلومات مراجعة من خبراء قانونيين وتوافق القانون المصري</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>بحث سهل وسريع</h3>
            <p>ابحث عن أي موضوع تريد معرفة حقوقك فيه بسهولة</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>استخدام سهل</h3>
            <p>تصميم بسيط ومفهوم يناسب جميع الأعمار</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>تحديث مستمر</h3>
            <p>إضافة مواضيع جديدة وتحديث المعلومات باستمرار</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTopicsView = () => (
    <div className="topics-view">
      <div className="topics-header">
        <h2 className="section-title">
          {selectedCategory === 'all' ? 
            '📚 كل المواضيع' :
            selectedCategory ? 
              categories.find(c => c.id === selectedCategory)?.name + ' 📋' : 
              '🔍 نتائج البحث'
          }
        </h2>
        <p className="section-subtitle">
          {filteredTopics.length.toLocaleString()} موضوع متاح
        </p>
      </div>
      
      <div className="topics-grid">
        {filteredTopics.map(topic => (
          <TopicCard 
            key={topic.id}
            topic={topic}
          />
        ))}
      </div>
      
      {filteredTopics.length === 0 && (
        <div className="no-topics">
          <div className="no-topics-icon">😔</div>
          <h3>لم نجد أي مواضيع</h3>
          <p>جرب كلمات بحث أخرى أو اختر فئة مختلفة</p>
        </div>
      )}
    </div>
  );

  const renderAboutView = () => (
    <div className="about-view">
      <div className="about-content">
        <h2 className="section-title">عن خليك فاهم</h2>
        <div className="about-text">
          <p>
            "خليك فاهم" هو تطبيق مصري يهدف إلى توعية المواطنين بحقوقهم في جميع مجالات الحياة.
            نحن نؤمن بأن المعرفة قوة، وأن كل مواطن يستحق أن يعرف حقوقه وواجباته.
          </p>
          
          <h3>رؤيتنا</h3>
          <p>
            نسعى لأن نكون المصدر الأول والأكثر موثوقية للمعلومات القانونية والحقوقية في مصر،
            ونهدف إلى خلق مجتمع واعٍ بحقوقه وقادر على المطالبة بها.
          </p>
          
          <h3>مهمتنا</h3>
          <p>
            تقديم المعلومات القانونية والحقوقية بطريقة مبسطة ومفهومة لجميع فئات المجتمع،
            مع التركيز على الحالات العملية التي يواجهها المواطن في حياته اليومية.
          </p>
          
          <h3>فريق العمل</h3>
          <p>
            يعمل معنا فريق من المحامين والخبراء القانونيين المتخصصين في مختلف المجالات
            لضمان دقة وحداثة جميع المعلومات المقدمة.
          </p>
          
          <div className="useful-links">
            <h3>روابط مفيدة</h3>
            <div className="links-grid">
              <a href="https://moj.gov.eg" target="_blank" rel="noopener noreferrer" className="useful-link">
                <span className="link-icon">⚖️</span>
                <span className="link-text">وزارة العدل</span>
              </a>
              <a href="https://www.lawyersegypt.org" target="_blank" rel="noopener noreferrer" className="useful-link">
                <span className="link-icon">👨‍💼</span>
                <span className="link-text">نقابة المحامين</span>
              </a>
              <a href="https://www.cpa.gov.eg" target="_blank" rel="noopener noreferrer" className="useful-link">
                <span className="link-icon">🛡️</span>
                <span className="link-text">حماية المستهلك</span>
              </a>
              <a href="https://www.cbegypt.gov.eg" target="_blank" rel="noopener noreferrer" className="useful-link">
                <span className="link-icon">🏦</span>
                <span className="link-text">البنك المركزي</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContactView = () => (
    <div className="contact-view">
      <div className="contact-content">
        <h2 className="section-title">تواصل معنا</h2>
        
        <div className="contact-info">
          <div className="contact-card">
            <div className="contact-icon">📧</div>
            <h3>البريد الإلكتروني</h3>
            <p>info@khalekfahem.com</p>
            <p>support@khalekfahem.com</p>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">📱</div>
            <h3>أرقام التواصل</h3>
            <p>خط ساخن: 19588</p>
            <p>واتساب: 01000000000</p>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">🏢</div>
            <h3>العنوان</h3>
            <p>القاهرة، مصر</p>
            <p>متاح 24/7</p>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">🌐</div>
            <h3>وسائل التواصل</h3>
            <div className="social-links">
              <a href="#" className="social-link">فيسبوك</a>
              <a href="#" className="social-link">تويتر</a>
              <a href="#" className="social-link">إنستغرام</a>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <h3>أرسل لنا رسالة</h3>
          <form className="form">
            <input type="text" placeholder="الاسم" className="form-input" />
            <input type="email" placeholder="البريد الإلكتروني" className="form-input" />
            <input type="text" placeholder="الموضوع" className="form-input" />
            <textarea placeholder="الرسالة" className="form-textarea" rows={4}></textarea>
            <button type="submit" className="form-submit">إرسال الرسالة</button>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <div className="App">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      
      <Sidebar 
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onNavigate={handleNavigation}
        currentView={currentView}
      />
      
      <main className="main-content">
        <div className="container">
          {((currentView === 'topics' || currentView === 'all-topics') || searchQuery) && (
            <>
              <SearchBar 
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
              />
              
              <CategoryFilter 
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategorySelect}
              />
            </>
          )}
          
          {currentView === 'home' && !searchQuery && renderHomeView()}
          {((currentView === 'topics' || currentView === 'all-topics') || searchQuery) && renderTopicsView()}
          {currentView === 'about' && renderAboutView()}
          {currentView === 'contact' && renderContactView()}
        </div>
      </main>

      <footer className="app-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>🧠 خليك فاهم</h4>
              <p>دليلك الموثوق لمعرفة حقوقك</p>
              <p>© 2024 جميع الحقوق محفوظة</p>
            </div>
            
            <div className="footer-section">
              <h4>روابط سريعة</h4>
              <ul className="footer-links">
                <li><button onClick={() => handleNavigation('home')}>الرئيسية</button></li>
                <li><button onClick={() => handleNavigation('all-topics')}>كل المواضيع</button></li>
                <li><button onClick={() => handleNavigation('about')}>عن التطبيق</button></li>
                <li><button onClick={() => handleNavigation('contact')}>تواصل معنا</button></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>روابط مفيدة</h4>
              <ul className="footer-links">
                <li><a href="https://moj.gov.eg" target="_blank" rel="noopener noreferrer">وزارة العدل</a></li>
                <li><a href="https://www.lawyersegypt.org" target="_blank" rel="noopener noreferrer">نقابة المحامين</a></li>
                <li><a href="https://www.cpa.gov.eg" target="_blank" rel="noopener noreferrer">حماية المستهلك</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
