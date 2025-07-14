import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import TopicCard from './components/TopicCard';
import FAQ from './components/FAQ';
import { topics, Topic } from './data/topics';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredTopics = useMemo(() => {
    if (selectedCategory === 'all') {
      return topics;
    }
    return topics.filter(topic => topic.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      
      <main style={{ padding: '40px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <CategoryFilter 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          
          <div style={{ marginTop: '40px' }}>
            <div style={{
              textAlign: 'center',
              marginBottom: '40px',
              padding: '30px',
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '24px',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 15px 50px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              direction: 'rtl'
            }}>
              <h2 style={{
                fontSize: '32px',
                fontWeight: '800',
                color: '#2c3e50',
                marginBottom: '15px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {selectedCategory === 'all' ? '🌟 جميع المواضيع القانونية' : '📋 المواضيع المختارة'}
              </h2>
              <p style={{
                fontSize: '18px',
                color: '#7f8c8d',
                fontWeight: '500',
                lineHeight: '1.6'
              }}>
                اختر أي موضوع عشان تعرف حقوقك فيه بشكل مفصل ومبسط
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
              <div style={{
                textAlign: 'center',
                padding: '80px 20px',
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '24px',
                marginTop: '40px',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 15px 50px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <div style={{ fontSize: '100px', marginBottom: '30px' }}>😔</div>
                <h3 style={{ 
                  fontSize: '28px', 
                  color: '#34495e', 
                  marginBottom: '15px',
                  fontWeight: '700'
                }}>
                  مفيش مواضيع في الفئة دي حالياً
                </h3>
                <p style={{ 
                  fontSize: '18px', 
                  color: '#7f8c8d',
                  lineHeight: '1.6'
                }}>
                  جرب فئة تانية أو ارجع لكل المواضيع
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <FAQ />
      
      <footer className="professional-footer">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-section">
              <h4>🧠 خليك فاهم</h4>
              <p>دليلك الموثوق لمعرفة حقوقك القانونية في جميع المجالات</p>
              <p>نسعى لتوفير معلومات قانونية دقيقة ومبسطة للجميع</p>
            </div>
            
            <div className="footer-section">
              <h4>تواصل معنا</h4>
              <p>📧 info@khalekfahem.com</p>
              <p>📱 01000000000</p>
              <p>🌐 www.khalekfahem.com</p>
            </div>
            
            <div className="footer-section">
              <h4>روابط مفيدة</h4>
              <p>• نقابة المحامين المصرية</p>
              <p>• وزارة العدل</p>
              <p>• جهاز حماية المستهلك</p>
              <p>• النيابة الإلكترونية</p>
            </div>
            
            <div className="footer-section">
              <h4>خدماتنا</h4>
              <p>• استشارات قانونية</p>
              <p>• دليل الحقوق</p>
              <p>• الأسئلة الشائعة</p>
              <p>• مواضيع متخصصة</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2024 خليك فاهم - جميع الحقوق محفوظة | مصمم بكل حب لخدمة القانون المصري</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
