import React from 'react';
import styles from './AdBanner.module.css';

const AdBanner: React.FC = () => {
  return (
    <div className={styles.adBanner}>
      <p className={styles.adText}>مساحة إعلانية</p>
    </div>
  );
};

export default AdBanner;
