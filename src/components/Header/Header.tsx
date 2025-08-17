import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}>🧠</span>
          <h1 className={styles.logoText}>خليك فاهم</h1>
        </Link>
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>الرئيسية</Link>
          <Link to="/topics" className={styles.navLink}>المواضيع</Link>
          <Link to="/about" className={styles.navLink}>عن التطبيق</Link>
          <Link to="/contact" className={styles.navLink}>تواصل معنا</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
