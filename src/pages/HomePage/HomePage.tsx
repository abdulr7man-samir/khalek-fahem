import React from 'react';
import { Link } from 'react-router-dom';
import { topics, categories } from '../../data/topics';
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>🧠 خليك فاهم</h1>
          <p className={styles.heroSubtitle}>دليلك الموثوق لمعرفة حقوقك في جميع مجالات الحياة</p>
          <p className={styles.heroDescription}>اكتشف حقوقك واعرف كيف تتصرف في أي موقف قانوني أو اجتماعي</p>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>{topics.length.toLocaleString()}+</div>
              <div className={styles.statLabel}>موضوع متاح</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>{categories.length - 1}</div>
              <div className={styles.statLabel}>فئة مختلفة</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>معلومات دقيقة</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.categoriesShowcase}>
        <h2 className={styles.sectionTitle}>اختر المجال اللي يهمك</h2>
        <div className={styles.categoriesGrid}>
          {categories.map(category => (
            <Link to={`/topics?category=${category.id}`} key={category.id} className={styles.categoryCard}>
              <div className={styles.categoryIcon}>{category.icon}</div>
              <h3 className={styles.categoryName}>{category.name}</h3>
              <p className={styles.categoryCount}>
                {category.id === 'all'
                  ? `${topics.length} موضوع`
                  : `${topics.filter(t => t.category === category.id).length} موضوع`
                }
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.featuresSection}>
        <h2 className={styles.sectionTitle}>ليه تختار "خليك فاهم"؟</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>⚖️</div>
            <h3>معلومات قانونية دقيقة</h3>
            <p>كل المعلومات مراجعة من خبراء قانونيين وتوافق القانون المصري.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🔍</div>
            <h3>بحث سهل وسريع</h3>
            <p>ابحث عن أي موضوع تريد معرفة حقوقك فيه بسهولة.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📱</div>
            <h3>استخدام سهل</h3>
            <p>تصميم بسيط ومفهوم يناسب جميع الأعمار.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🔄</div>
            <h3>تحديث مستمر</h3>
            <p>إضافة مواضيع جديدة وتحديث المعلومات باستمرار.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
