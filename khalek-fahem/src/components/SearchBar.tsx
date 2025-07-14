import React from 'react';
import './SearchBar.css';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, onSearchChange }) => {
  const handleClear = () => {
    onSearchChange('');
  };

  return (
    <div className="search-bar">
      <div className="search-container">
        <div className="search-input-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="ابحث عن موضوع أو كلمة مفتاحية..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {searchQuery && (
            <button className="search-clear" onClick={handleClear}>
              ×
            </button>
          )}
        </div>
        
        {searchQuery && (
          <div className="search-status">
            يتم البحث عن: <strong>"{searchQuery}"</strong>
          </div>
        )}
      </div>
      
      <div className="search-suggestions">
        <span className="suggestions-label">اقتراحات سريعة:</span>
        <div className="suggestions-tags">
          <button 
            className="suggestion-tag"
            onClick={() => onSearchChange('حقوق العمل')}
          >
            حقوق العمل
          </button>
          <button 
            className="suggestion-tag"
            onClick={() => onSearchChange('سرقة')}
          >
            سرقة
          </button>
          <button 
            className="suggestion-tag"
            onClick={() => onSearchChange('طلاق')}
          >
            طلاق
          </button>
          <button 
            className="suggestion-tag"
            onClick={() => onSearchChange('تأمين')}
          >
            تأمين
          </button>
          <button 
            className="suggestion-tag"
            onClick={() => onSearchChange('بنك')}
          >
            البنوك
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;