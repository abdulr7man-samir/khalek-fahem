import React from 'react';
import { categories } from '../data/topics';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="category-filter">
      <h3 className="category-title">
        📂 اختر الموضوع المناسب لك
      </h3>
      
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => onCategoryChange(category.id)}
          >
            <span style={{ fontSize: '18px' }}>{category.icon}</span>
            <span style={{ whiteSpace: 'nowrap' }}>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
