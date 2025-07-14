import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import TopicCard from './components/TopicCard';
import { topics, Topic } from './data/topics';

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
                  onReadMore={handlePremiumClick}
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

      {/* Premium Modal */}
      {showPremiumModal && selectedPremiumTopic && (
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: '1000',
          padding: '20px'
        }} onClick={closePremiumModal}>
          <div style={{
            background: 'white',
            borderRadius: '20px',
            maxWidth: '500px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative',
            direction: 'rtl',
            textAlign: 'right'
          }} onClick={(e) => e.stopPropagation()}>
            <button 
              style={{
                position: 'absolute',
                top: '15px',
                left: '20px',
                background: '#ff6b6b',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                fontSize: '20px',
                cursor: 'pointer'
              }}
              onClick={closePremiumModal}
            >
              ×
            </button>
            
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '30px',
              textAlign: 'center',
              borderRadius: '20px 20px 0 0'
            }}>
              <div style={{ fontSize: '50px', marginBottom: '15px' }}>👑</div>
              <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>اشتراك مميز</h2>
              <p style={{ opacity: '0.9', fontSize: '16px' }}>للوصول للمحتوى المميز</p>
            </div>
            
            <div style={{ padding: '30px' }}>
              <h3 style={{ fontSize: '20px', color: '#2c3e50', marginBottom: '15px' }}>
                {selectedPremiumTopic.title}
              </h3>
              <p>هذا المحتوى متاح فقط للمشتركين المميزين</p>
              
              <div style={{ margin: '25px 0' }}>
                <div style={{ padding: '10px 0', fontSize: '16px', color: '#27ae60', fontWeight: '500' }}>
                  ✅ محتوى تفصيلي ودقيق
                </div>
                <div style={{ padding: '10px 0', fontSize: '16px', color: '#27ae60', fontWeight: '500' }}>
                  ✅ نصائح من خبراء قانونيين
                </div>
                <div style={{ padding: '10px 0', fontSize: '16px', color: '#27ae60', fontWeight: '500' }}>
                  ✅ تحديثات مستمرة
                </div>
                <div style={{ padding: '10px 0', fontSize: '16px', color: '#27ae60', fontWeight: '500' }}>
                  ✅ استشارات مجانية
                </div>
              </div>
              
              <div style={{ display: 'grid', gap: '20px', marginTop: '30px' }}>
                <div style={{
                  border: '2px solid #e9ecef',
                  borderRadius: '15px',
                  padding: '20px',
                  textAlign: 'center'
                }}>
                  <h4 style={{ fontSize: '18px', marginBottom: '15px', color: '#2c3e50' }}>
                    الاشتراك الشهري
                  </h4>
                  <div style={{ marginBottom: '15px', fontSize: '24px', fontWeight: '700', color: '#e74c3c' }}>
                    29 جنيه/شهر
                  </div>
                  <button style={{
                    width: '100%',
                    padding: '12px',
                    border: 'none',
                    borderRadius: '25px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    background: '#3498db',
                    color: 'white'
                  }}>
                    اشترك الآن
                  </button>
                </div>
                
                <div style={{
                  border: '2px solid #ffd700',
                  borderRadius: '15px',
                  padding: '20px',
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, #fff9e6 0%, #fff5cc 100%)',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '20px',
                    background: '#ffd700',
                    color: '#333',
                    padding: '5px 15px',
                    borderRadius: '15px',
                    fontSize: '12px',
                    fontWeight: '700'
                  }}>
                    الأكثر شعبية
                  </div>
                  <h4 style={{ fontSize: '18px', marginBottom: '15px', color: '#2c3e50' }}>
                    الاشتراك السنوي
                  </h4>
                  <div style={{ marginBottom: '15px' }}>
                    <span style={{
                      textDecoration: 'line-through',
                      color: '#95a5a6',
                      fontSize: '14px',
                      marginLeft: '10px'
                    }}>
                      348 جنيه
                    </span>
                    <span style={{ fontSize: '24px', fontWeight: '700', color: '#e74c3c' }}>
                      299 جنيه/سنة
                    </span>
                  </div>
                  <div style={{
                    color: '#27ae60',
                    fontWeight: '600',
                    fontSize: '14px',
                    marginBottom: '15px'
                  }}>
                    وفّر 49 جنيه!
                  </div>
                  <button style={{
                    width: '100%',
                    padding: '12px',
                    border: 'none',
                    borderRadius: '25px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    background: '#ffd700',
                    color: '#333'
                  }}>
                    اشترك الآن
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
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
