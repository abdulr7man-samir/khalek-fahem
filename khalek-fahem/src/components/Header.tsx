import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '40px 20px',
      textAlign: 'center',
      direction: 'rtl'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '15px',
          marginBottom: '20px'
        }}>
          <div style={{ fontSize: '60px' }}>🧠</div>
          <h1 style={{
            fontSize: '48px',
            fontWeight: '900',
            margin: '0',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
          }}>
            خليك فاهم !
          </h1>
        </div>
        
        <p style={{
          fontSize: '20px',
          fontWeight: '400',
          margin: '20px 0 30px 0',
          opacity: '0.9',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)'
        }}>
          دليلك الشامل لمعرفة حقوقك في كل المواقف
        </p>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          marginTop: '30px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '15px',
            padding: '20px 25px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <span style={{ fontSize: '24px', fontWeight: '700', color: '#ffd700' }}>12+</span>
            <span style={{ fontSize: '14px', fontWeight: '500', marginTop: '5px' }}>موضوع مهم</span>
          </div>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '15px',
            padding: '20px 25px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <span style={{ fontSize: '24px', fontWeight: '700', color: '#ffd700' }}>9</span>
            <span style={{ fontSize: '14px', fontWeight: '500', marginTop: '5px' }}>مجال مختلف</span>
          </div>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '15px',
            padding: '20px 25px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <span style={{ fontSize: '24px', fontWeight: '700', color: '#ffd700' }}>100%</span>
            <span style={{ fontSize: '14px', fontWeight: '500', marginTop: '5px' }}>معلومات موثوقة</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
