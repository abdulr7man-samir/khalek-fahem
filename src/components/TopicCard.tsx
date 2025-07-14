import React, { useState } from 'react';
import { Topic } from '../data/topics';
import './TopicCard.css';

interface TopicCardProps {
  topic: Topic;
  onReadMore: (topic: Topic) => void;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic, onReadMore }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    if (topic.isPremium) {
      onReadMore(topic);
    } else {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div 
      className={`topic-card ${isExpanded ? 'expanded' : ''} ${topic.isPremium ? 'premium' : ''}`}
      style={{ borderLeftColor: topic.color }}
      onClick={handleClick}
    >
      <div className="topic-header">
        <div className="topic-icon" style={{ backgroundColor: topic.color }}>
          {topic.icon}
        </div>
        <h3 className="topic-title">{topic.title}</h3>
        {topic.isPremium && <span className="premium-badge">👑</span>}
      </div>
      
      {!topic.isPremium && (
        <div className={`topic-content ${isExpanded ? 'show' : ''}`}>
          <p>{topic.content}</p>
        </div>
      )}
      
      {topic.isPremium && (
        <div className="premium-content">
          <p>محتوى مميز - اشترك للوصول لكامل المعلومات</p>
        </div>
      )}
      
      <div className="topic-footer">
        <button className="read-more-btn" style={{ backgroundColor: topic.color }}>
          {topic.isPremium ? 'اشتراك مميز' : isExpanded ? 'أخفي التفاصيل' : 'اقرأ المزيد'}
        </button>
      </div>
    </div>
  );
};

export default TopicCard;