import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="professional-header">
      <div className="header-content">
        <div className="header-title">
          <div className="header-icon">🧠</div>
          <h1>خليك فاهم !</h1>
        </div>
        
        <p className="header-subtitle">
          دليلك الشامل لمعرفة حقوقك في كل المواقف
        </p>
        
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-number">25+</div>
            <div className="stat-label">موضوع مهم</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">9</div>
            <div className="stat-label">مجال مختلف</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">معلومات موثوقة</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">24/7</div>
            <div className="stat-label">متاح دائماً</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
