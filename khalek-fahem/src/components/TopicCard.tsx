import React, { useState, useEffect } from 'react';
import { Topic } from '../data/topics';
import { database } from '../services/database';
import './TopicCard.css';

interface TopicCardProps {
  topic: Topic;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);

  useEffect(() => {
    setIsFavorite(database.isFavorite(topic.id));
    setIsBookmarked(database.isBookmarked(topic.id));
  }, [topic.id]);

  const handleClick = () => {
    if (!isExpanded) {
      // Track when user starts reading
      setStartTime(Date.now());
      database.addToRecent(topic.id);
    } else if (startTime) {
      // Track reading time when closing
      const timeSpent = Date.now() - startTime;
      database.updateTopicProgress(topic.id, {
        timeSpent: timeSpent / 1000 // Convert to seconds
      });
    }
    setIsExpanded(!isExpanded);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFavorite) {
      database.removeFromFavorites(topic.id);
      setIsFavorite(false);
    } else {
      database.addToFavorites(topic.id);
      setIsFavorite(true);
    }
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isBookmarked) {
      database.removeBookmark(topic.id);
      setIsBookmarked(false);
    } else {
      database.addBookmark(topic.id);
      setIsBookmarked(true);
    }
  };

  const handleComplete = (e: React.MouseEvent) => {
    e.stopPropagation();
    database.updateTopicProgress(topic.id, {
      completed: true
    });
  };

  return (
    <div 
      className="modern-topic-card fade-in" 
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
      data-category={topic.category}
    >
      <div className="topic-card-header">
        <div className="topic-icon-wrapper" style={{ backgroundColor: topic.color }}>
          <span className="topic-icon">{topic.icon}</span>
        </div>
        <h3 className="topic-title">{topic.title}</h3>
        <div className="topic-actions">
          <button 
            className={`action-btn favorite-btn ${isFavorite ? 'active' : ''}`}
            onClick={handleFavorite}
            aria-label={isFavorite ? 'إزالة من المفضلة' : 'إضافة للمفضلة'}
            title={isFavorite ? 'إزالة من المفضلة' : 'إضافة للمفضلة'}
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>
          <button 
            className={`action-btn bookmark-btn ${isBookmarked ? 'active' : ''}`}
            onClick={handleBookmark}
            aria-label={isBookmarked ? 'إزالة العلامة المرجعية' : 'إضافة علامة مرجعية'}
            title={isBookmarked ? 'إزالة العلامة المرجعية' : 'إضافة علامة مرجعية'}
          >
            {isBookmarked ? '🔖' : '📑'}
          </button>
          <button 
            className="action-btn complete-btn"
            onClick={handleComplete}
            aria-label="تم الانتهاء من القراءة"
            title="تم الانتهاء من القراءة"
          >
            ✅
          </button>
          <button 
            className="expand-icon"
            aria-label={isExpanded ? 'إخفاء التفاصيل' : 'عرض التفاصيل'}
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
          >
            {isExpanded ? '▲' : '▼'}
          </button>
        </div>
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
