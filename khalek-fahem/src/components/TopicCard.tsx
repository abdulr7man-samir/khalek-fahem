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
    <div 
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
        borderRadius: '16px',
        padding: '20px',
        margin: '16px 0',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        borderLeft: `4px solid ${topic.color}`,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        direction: 'rtl',
        textAlign: 'right'
      }}
      onClick={handleClick}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '12px' }}>
        <div style={{
          width: '50px',
          height: '50px',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          color: 'white',
          backgroundColor: topic.color
        }}>
          {topic.icon}
        </div>
        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2c3e50', margin: '0', flex: '1' }}>
          {topic.title}
        </h3>
      </div>
      
      {isExpanded && (
        <div style={{
          background: '#f8f9fa',
          borderRadius: '8px',
          padding: '16px',
          margin: '12px 0'
        }}>
          <p style={{ margin: '0', lineHeight: '1.6', color: '#34495e', fontSize: '16px' }}>
            {topic.content}
          </p>
        </div>
      )}
      
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
        <button style={{
          background: topic.color,
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '20px',
          fontSize: '14px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}>
          {isExpanded ? 'أخفي التفاصيل' : 'اقرأ المزيد'}
        </button>
      </div>
    </div>
  );
};

export default TopicCard;
