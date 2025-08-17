import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { topics } from '../../data/topics';
import styles from './TopicDetailPage.module.css';

const TopicDetailPage: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const topic = topics.find(t => t.id === Number(topicId));

  if (!topic) {
    return (
      <div className={styles.notFound}>
        <h2>الموضوع غير موجود</h2>
        <p>عذراً، لم نتمكن من العثور على الموضوع الذي تبحث عنه.</p>
        <Link to="/topics">العودة إلى كل المواضيع</Link>
      </div>
    );
  }

  return (
    <div className={styles.topicDetailPage}>
      <div className={styles.header} style={{ backgroundColor: topic.color }}>
        <span className={styles.icon}>{topic.icon}</span>
        <h1 className={styles.title}>{topic.title}</h1>
      </div>
      <div className={styles.content}>
        <p>{topic.content}</p>
      </div>
      <div className={styles.backLinkWrapper}>
        <Link to="/topics" className={styles.backLink}>
          &larr; العودة إلى كل المواضيع
        </Link>
      </div>
    </div>
  );
};

export default TopicDetailPage;
