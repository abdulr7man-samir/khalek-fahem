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
    <div className="topic-card" onClick={handleClick}>
      <div className="topic-header">
        <div className="topic-icon" style={{ backgroundColor: topic.color }}>
          {topic.icon}
        </div>
        <h3 className="topic-title">
          {topic.title}
        </h3>
      </div>
      
      {isExpanded && (
        <div className="topic-content">
          <p className="topic-text">
            {topic.content}
          </p>
        </div>
      )}
      
      <div className="topic-button">
        <button className="topic-btn" style={{ background: topic.color }}>
          {isExpanded ? 'أخفي التفاصيل' : 'اقرأ المزيد'}
        </button>
      </div>
    </div>
  );
};

export default TopicCard;
