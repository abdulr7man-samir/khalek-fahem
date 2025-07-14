import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import TopicCard from './components/TopicCard';
import { topics, Topic } from './data/topics';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [selectedPremiumTopic, setSelectedPremiumTopic] = useState<Topic | null>(null);

  const filteredTopics = useMemo(() => {
    if (selectedCategory === 'all') {
      return topics;
    }
    return topics.filter(topic => topic.category === selectedCategory);
  }, [selectedCategory]);

  const handlePremiumClick = (topic: Topic) => {
    setSelectedPremiumTopic(topic);
    setShowPremiumModal(true);
  };

  const closePremiumModal = () => {
    setShowPremiumModal(false);
    setSelectedPremiumTopic(null);
  };

  return (
    <div className="App">
      <Header />
      
      <main className="main-content">
        <div className="container">
          <CategoryFilter 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          
          <div className="topics-section">
            <div className="topics-header">
              <h2 className="section-title">
                {selectedCategory === 'all' ? '🌟 جميع المواضيع' : '📋 المواضيع المختارة'}
              </h2>
              <p className="section-subtitle">
                اختر أي موضوع عشان تعرف حقوقك فيه
              </p>
            </div>
            
            <div className="topics-grid">
              {filteredTopics.map(topic => (
                <TopicCard 
                  key={topic.id}
                  topic={topic}
                  onReadMore={handlePremiumClick}
                />
              ))}
            </div>
            
            {filteredTopics.length === 0 && (
              <div className="no-topics">
                <div className="no-topics-icon">😔</div>
                <h3>مفيش مواضيع في الفئة دي حالياً</h3>
                <p>جرب فئة تانية أو ارجع لكل المواضيع</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Premium Modal */}
      {showPremiumModal && selectedPremiumTopic && (
        <div className="premium-modal-overlay" onClick={closePremiumModal}>
          <div className="premium-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closePremiumModal}>×</button>
            
            <div className="premium-modal-header">
              <div className="premium-icon">👑</div>
              <h2>اشتراك مميز</h2>
              <p>للوصول للمحتوى المميز</p>
            </div>
            
            <div className="premium-modal-content">
              <h3>{selectedPremiumTopic.title}</h3>
              <p>هذا المحتوى متاح فقط للمشتركين المميزين</p>
              
              <div className="premium-features">
                <div className="feature">✅ محتوى تفصيلي ودقيق</div>
                <div className="feature">✅ نصائح من خبراء قانونيين</div>
                <div className="feature">✅ تحديثات مستمرة</div>
                <div className="feature">✅ استشارات مجانية</div>
              </div>
              
              <div className="subscription-options">
                <div className="subscription-card">
                  <h4>الاشتراك الشهري</h4>
                  <div className="price">29 جنيه/شهر</div>
                  <button className="subscribe-btn monthly">اشترك الآن</button>
                </div>
                
                <div className="subscription-card featured">
                  <div className="popular-badge">الأكثر شعبية</div>
                  <h4>الاشتراك السنوي</h4>
                  <div className="price">
                    <span className="old-price">348 جنيه</span>
                    <span className="new-price">299 جنيه/سنة</span>
                  </div>
                  <div className="savings">وفّر 49 جنيه!</div>
                  <button className="subscribe-btn yearly">اشترك الآن</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <footer className="app-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>🧠 خليك فاهم</h4>
              <p>دليلك الموثوق لمعرفة حقوقك</p>
            </div>
            
            <div className="footer-section">
              <h4>تواصل معنا</h4>
              <p>📧 info@khalekfahem.com</p>
              <p>📱 01000000000</p>
            </div>
            
            <div className="footer-section">
              <h4>روابط مفيدة</h4>
              <p>• نقابة المحامين</p>
              <p>• وزارة العدل</p>
              <p>• حماية المستهلك</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2024 خليك فاهم - جميع الحقوق محفوظة</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;