import React from 'react';
import { categories } from '../data/topics';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div style={{ margin: '20px 0', direction: 'rtl', textAlign: 'right' }}>
      <h3 style={{
        fontSize: '20px',
        fontWeight: '700',
        color: '#2c3e50',
        marginBottom: '16px',
        textAlign: 'center'
      }}>
        📂 اختر الموضوع
      </h3>
      
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
        justifyContent: 'center',
        padding: '16px',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        borderRadius: '16px',
        boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.05)'
      }}>
        {categories.map((category) => (
          <button
            key={category.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 16px',
              background: selectedCategory === category.id 
                ? 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)'
                : 'white',
              border: '2px solid',
              borderColor: selectedCategory === category.id ? '#007bff' : '#e9ecef',
              borderRadius: '25px',
              fontSize: '14px',
              fontWeight: '600',
              color: selectedCategory === category.id ? 'white' : '#6c757d',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: selectedCategory === category.id 
                ? '0 4px 20px rgba(0, 123, 255, 0.3)'
                : '0 2px 8px rgba(0, 0, 0, 0.05)'
            }}
            onClick={() => onCategoryChange(category.id)}
          >
            <span style={{ fontSize: '16px' }}>{category.icon}</span>
            <span style={{ whiteSpace: 'nowrap' }}>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
