import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider} />
      <p className={styles.copyright}>HOMA © studio architects</p>
      <div className={styles.bottomBar}>
        <div className={styles.contactGroup}>
          <span className={styles.groupLabel}>Contact</span>
          <div className={styles.links}>
            <a className={styles.footerLink} href="mailto:info@homastudioarchitects.com">
              info@homastudioarchitects.com
            </a>
            <a className={styles.footerLink} href="tel:+35799203429">
              +357 99 203 429
            </a>
          </div>
        </div>
        <div className={styles.socialGroup}>
          <span className={styles.groupLabel}>Follow us</span>
          <div className={styles.links}>
            <a className={styles.footerLink} href="#" target="_blank" rel="noopener noreferrer">instagram</a>
            <a className={styles.footerLink} href="#" target="_blank" rel="noopener noreferrer">facebook</a>
            <a className={styles.footerLink} href="#" target="_blank" rel="noopener noreferrer">pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
