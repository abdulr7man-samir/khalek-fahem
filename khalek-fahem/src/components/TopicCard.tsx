import React, { useState } from 'react';
import { Topic } from '../data/topics';

interface TopicCardProps {
  topic: Topic;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="modern-topic-card" onClick={handleClick}>
      <div className="topic-card-header">
        <div className="topic-icon-wrapper" style={{ backgroundColor: topic.color }}>
          <span className="topic-icon">{topic.icon}</span>
        </div>
        <h3 className="topic-title">{topic.title}</h3>
        <button className="expand-icon">
          {isExpanded ? '▲' : '▼'}
        </button>
      </div>
      
      <div className={`topic-content ${isExpanded ? 'expanded' : ''}`}>
        <div className="topic-text">
          {topic.content}
        </div>
      </div>
      
      <div className="topic-footer">
        <div className="topic-category">{getCategoryName(topic.category)}</div>
        <div className="read-more-text">
          {isExpanded ? 'اضغط لإخفاء التفاصيل' : 'اضغط لقراءة المزيد'}
        </div>
      </div>
    </div>
  );
};

// Helper function to get category name in Arabic
const getCategoryName = (categoryId: string): string => {
  const categoryMap: { [key: string]: string } = {
    'legal': 'القانونية',
    'tech': 'التقنية', 
    'consumer': 'حماية المستهلك',
    'work': 'العمل',
    'health': 'الصحة',
    'education': 'التعليم',
    'family': 'الأسرة',
    'money': 'المالية'
  };
  return categoryMap[categoryId] || categoryId;
};

export default TopicCard;
