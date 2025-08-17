import React from 'react';
import { Category } from '../../data/topics';
import styles from './CategoryFilter.module.css';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className={styles.categoryFilter}>
      {categories.map((category) => (
        <button
          key={category.id}
          className={`${styles.categoryButton} ${selectedCategory === category.id ? styles.active : ''}`}
          onClick={() => onCategoryChange(category.id)}
        >
          <span className={styles.icon}>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
