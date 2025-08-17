import React from 'react';
import styles from './PremiumModal.module.css';

interface PremiumModalProps {
  onClose: () => void;
}

const PremiumModal: React.FC<PremiumModalProps> = ({ onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={styles.header}>
          <span className={styles.icon}>👑</span>
          <h2>المحتوى المميز</h2>
          <p>اشترك الآن للوصول إلى جميع المواضيع والنصائح الحصرية.</p>
        </div>
        <div className={styles.features}>
          <p>✅ محتوى تفصيلي ودقيق</p>
          <p>✅ نصائح من خبراء قانونيين</p>
          <p>✅ تحديثات مستمرة</p>
        </div>
        <div className={styles.pricing}>
          <div className={styles.plan}>
            <h3>الخطة الشهرية</h3>
            <p className={styles.price}>29 جنيه/شهر</p>
            <button className={styles.subscribeButton}>اشترك الآن</button>
          </div>
          <div className={`${styles.plan} ${styles.featured}`}>
            <span className={styles.featuredBadge}>الأكثر شيوعاً</span>
            <h3>الخطة السنوية</h3>
            <p className={styles.price}>299 جنيه/سنة</p>
            <p className={styles.savings}>وفر 49 جنيه!</p>
            <button className={styles.subscribeButton}>اشترك الآن</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumModal;
