import React from 'react';
import { Link } from 'react-router-dom';
import { Topic } from '../../data/topics';
import styles from './TopicCard.module.css';

interface TopicCardProps {
  topic: Topic;
  onPremiumClick: () => void;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic, onPremiumClick }) => {
  const cardContent = (
    <>
      <div className={styles.iconWrapper} style={{ backgroundColor: topic.color }}>
        <span className={styles.icon}>{topic.isPremium ? '👑' : topic.icon}</span>
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.title}>{topic.title}</h3>
        <p className={styles.category}>{topic.category}</p>
      </div>
    </>
  );

  if (topic.isPremium) {
    return (
      <div className={`${styles.card} ${styles.premium}`} onClick={onPremiumClick}>
        {cardContent}
        <div className={styles.premiumOverlay}>
          <span className={styles.premiumText}>حصري للمشتركين</span>
        </div>
      </div>
    );
  }

  return (
    <Link to={`/topics/${topic.id}`} className={styles.card}>
      {cardContent}
    </Link>
  );
};

export default TopicCard;
