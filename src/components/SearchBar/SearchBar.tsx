import React from 'react';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <div className={styles.searchBar}>
      <span className={styles.searchIcon}>🔍</span>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="ابحث عن موضوع..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      {searchQuery && (
        <button className={styles.clearButton} onClick={() => onSearchChange('')}>
          ×
        </button>
      )}
    </div>
  );
};

export default SearchBar;
