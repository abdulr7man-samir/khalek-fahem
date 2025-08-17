import React from 'react';
import styles from './ContactPage.module.css';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('شكراً لتواصلك معنا! (هذه مجرد واجهة حالياً)');
  };

  return (
    <div className={styles.contactPage}>
      <h1 className={styles.title}>تواصل معنا</h1>
      <p className={styles.subtitle}>
        نحن هنا لمساعدتك. يمكنك التواصل معنا عبر البريد الإلكتروني أو ملء النموذج أدناه.
      </p>

      <div className={styles.contactGrid}>
        <div className={styles.contactInfo}>
          <div className={styles.infoItem}>
            <h3>📧 البريد الإلكتروني</h3>
            <p>info@khalekfahem.com</p>
          </div>
          <div className={styles.infoItem}>
            <h3>📱 الهاتف (قريباً)</h3>
            <p>سيتم توفير أرقام للتواصل قريباً.</p>
          </div>
        </div>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <h2>أرسل لنا رسالة</h2>
          <div className={styles.formGroup}>
            <label htmlFor="name">الاسم</label>
            <input type="text" id="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">البريد الإلكتروني</label>
            <input type="email" id="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">الرسالة</label>
            <textarea id="message" rows={5} required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>إرسال</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
