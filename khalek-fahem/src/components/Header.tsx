import React from 'react';
import './Header.css';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="professional-header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">🧠</span>
            <h1 className="logo-text">خليك فاهم</h1>
          </div>
          
          <button 
            className="menu-button"
            onClick={onMenuClick}
            aria-label="فتح القائمة الجانبية"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
