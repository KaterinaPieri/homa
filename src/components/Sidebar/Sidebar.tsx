import { useState } from 'react';
import styles from './Sidebar.module.css';
import Logo from '../Logo/Logo';
import MenuItem from '../MenuItem/MenuItem';
import TextLink from '../TextLink/TextLink';
import { markIcon, markIconAlt, hamburgerIcon, closeIcon } from '../../assets/images';

type SidebarProps = {
  pageType?: 'homepage' | 'project';
};

const NAV_ITEMS = ['projects', 'studio', 'contact'];

export default function Sidebar({ pageType = 'homepage' }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <aside className={`${styles.sidebar} ${styles.closed}`} onClick={() => setIsOpen(true)}>
        <div className={styles.closedTop}>
          <div className={styles.markWrapper}>
            <img src={markIconAlt} alt="" />
          </div>
          <span className={styles.menuLabel}>MENU</span>
        </div>
        <div className={styles.closedBottom}>
          <div className={styles.hamburgerWrapper}>
            <img src={hamburgerIcon} alt="Open menu" />
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside className={`${styles.sidebar} ${styles.open}`}>
      <div className={styles.openTop}>
        <div className={styles.logoSection}>
          <Logo appearance="primary" />
          <div className={styles.smallMark}>
            <img src={markIcon} alt="" />
          </div>
        </div>
        <nav className={styles.mainMenu}>
          {NAV_ITEMS.map((item) => (
            <MenuItem key={item} text={item} />
          ))}
        </nav>
        {pageType === 'homepage' && (
          <div className={styles.pageDescription}>
            <p className={styles.descriptionText}>
              homa designs are deeply connected to the earth, embodying the harmony and grounding it provides
            </p>
            <TextLink text="discover more" appearance="primary" arrow="up" />
          </div>
        )}
      </div>
      <div className={styles.openBottom}>
        <button className={styles.closeWrapper} onClick={() => setIsOpen(false)}>
          <div className={styles.closeIcon}>
            <img src={closeIcon} alt="Close menu" />
          </div>
        </button>
      </div>
    </aside>
  );
}
