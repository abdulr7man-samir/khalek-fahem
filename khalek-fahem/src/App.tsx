import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import TopicCard from './components/TopicCard';
import { topics, Topic } from './data/topics';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredTopics = useMemo(() => {
    if (selectedCategory === 'all') {
      return topics;
    }
    return topics.filter(topic => topic.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <Header />
      
      <main style={{ padding: '30px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <CategoryFilter 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          
          <div style={{ marginTop: '30px' }}>
            <div style={{
              textAlign: 'center',
              marginBottom: '30px',
              padding: '20px',
              background: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              direction: 'rtl'
            }}>
              <h2 style={{
                fontSize: '28px',
                fontWeight: '800',
                color: '#2c3e50',
                marginBottom: '10px'
              }}>
                {selectedCategory === 'all' ? '🌟 جميع المواضيع' : '📋 المواضيع المختارة'}
              </h2>
              <p style={{
                fontSize: '16px',
                color: '#7f8c8d',
                fontWeight: '500'
              }}>
                اختر أي موضوع عشان تعرف حقوقك فيه
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '20px',
              marginTop: '20px'
            }}>
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
                padding: '60px 20px',
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '20px',
                marginTop: '40px'
              }}>
                <div style={{ fontSize: '80px', marginBottom: '20px' }}>😔</div>
                <h3 style={{ fontSize: '24px', color: '#34495e', marginBottom: '10px' }}>
                  مفيش مواضيع في الفئة دي حالياً
                </h3>
                <p style={{ fontSize: '16px', color: '#7f8c8d' }}>
                  جرب فئة تانية أو ارجع لكل المواضيع
                </p>
              </div>
            )}
          </div>
        </div>
      </main>


      
      <footer style={{
        background: '#2c3e50',
        color: 'white',
        padding: '40px 0 20px 0',
        marginTop: '50px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            marginBottom: '30px',
            direction: 'rtl'
          }}>
            <div>
              <h4 style={{ fontSize: '18px', marginBottom: '15px', color: '#ecf0f1' }}>
                🧠 خليك فاهم
              </h4>
              <p style={{ marginBottom: '8px', color: '#bdc3c7', lineHeight: '1.6' }}>
                دليلك الموثوق لمعرفة حقوقك
              </p>
            </div>
            
            <div>
              <h4 style={{ fontSize: '18px', marginBottom: '15px', color: '#ecf0f1' }}>
                تواصل معنا
              </h4>
              <p style={{ marginBottom: '8px', color: '#bdc3c7', lineHeight: '1.6' }}>
                📧 info@khalekfahem.com
              </p>
              <p style={{ marginBottom: '8px', color: '#bdc3c7', lineHeight: '1.6' }}>
                📱 01000000000
              </p>
            </div>
            
            <div>
              <h4 style={{ fontSize: '18px', marginBottom: '15px', color: '#ecf0f1' }}>
                روابط مفيدة
              </h4>
              <p style={{ marginBottom: '8px', color: '#bdc3c7', lineHeight: '1.6' }}>
                • نقابة المحامين
              </p>
              <p style={{ marginBottom: '8px', color: '#bdc3c7', lineHeight: '1.6' }}>
                • وزارة العدل
              </p>
              <p style={{ marginBottom: '8px', color: '#bdc3c7', lineHeight: '1.6' }}>
                • حماية المستهلك
              </p>
            </div>
          </div>
          
          <div style={{
            borderTop: '1px solid #34495e',
            paddingTop: '20px',
            textAlign: 'center',
            color: '#95a5a6'
          }}>
            <p>© 2024 خليك فاهم - جميع الحقوق محفوظة</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
