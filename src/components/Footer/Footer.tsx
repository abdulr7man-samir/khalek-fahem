import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>🧠 خليك فاهم</h4>
            <p>دليلك الموثوق لمعرفة حقوقك</p>
          </div>
          <div className={styles.footerSection}>
            <h4>روابط مفيدة</h4>
            <ul className={styles.footerLinks}>
              <li><a href="https://moj.gov.eg" target="_blank" rel="noopener noreferrer">وزارة العدل</a></li>
              <li><a href="https://www.lawyersegypt.org" target="_blank" rel="noopener noreferrer">نقابة المحامين</a></li>
              <li><a href="https://www.cpa.gov.eg" target="_blank" rel="noopener noreferrer">حماية المستهلك</a></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>تواصل معنا</h4>
            <p>info@khalekfahem.com</p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} خليك فاهم - جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
