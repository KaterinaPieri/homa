import styles from './MenuItem.module.css';

type MenuItemProps = {
  text: string;
  state?: 'idle' | 'hover' | 'active';
  onClick?: () => void;
};

export default function MenuItem({ text, state = 'idle', onClick }: MenuItemProps) {
  return (
    <button
      className={`${styles.menuItem} ${state !== 'idle' ? styles[state] : ''}`}
      onClick={onClick}
    >
      <span className={styles.label}>{text}</span>
    </button>
  );
}
