import React, { useState } from 'react';
import { Topic } from '../data/topics';

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
        {topic.isPremium && <span style={{ fontSize: '20px' }}>👑</span>}
      </div>
      
      {!topic.isPremium && isExpanded && (
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
      
      {topic.isPremium && (
        <div style={{
          background: 'linear-gradient(135deg, #fff4e6 0%, #ffe8cc 100%)',
          border: '2px dashed #ffa500',
          borderRadius: '8px',
          padding: '16px',
          margin: '12px 0',
          textAlign: 'center'
        }}>
          <p style={{ color: '#d68910', fontWeight: '600', margin: '0' }}>
            محتوى مميز - اشترك للوصول لكامل المعلومات
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
          {topic.isPremium ? 'اشتراك مميز' : isExpanded ? 'أخفي التفاصيل' : 'اقرأ المزيد'}
        </button>
      </div>
    </div>
  );
};

export default TopicCard;
