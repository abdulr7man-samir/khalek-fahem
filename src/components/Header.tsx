import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="header-background">
        <div className="floating-emojis">
          <span className="emoji">⚖️</span>
          <span className="emoji">📱</span>
          <span className="emoji">🏠</span>
          <span className="emoji">💼</span>
          <span className="emoji">🏥</span>
        </div>
      </div>
      
      <div className="header-content">
        <div className="logo-section">
          <div className="logo-icon">🧠</div>
          <h1 className="app-title">خليك فاهم !</h1>
        </div>
        
        <p className="app-subtitle">
          دليلك الشامل لمعرفة حقوقك في كل المواقف
        </p>
        
        <div className="stats-section">
          <div className="stat-item">
            <span className="stat-number">12+</span>
            <span className="stat-label">موضوع مهم</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">9</span>
            <span className="stat-label">مجال مختلف</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">معلومات موثوقة</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;