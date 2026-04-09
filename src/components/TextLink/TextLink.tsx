import styles from './TextLink.module.css';
import { arrowIcon, arrowLightIcon } from '../../assets/images';

type TextLinkProps = {
  text: string;
  appearance?: 'primary' | 'secondary';
  arrow?: 'up' | 'down';
  onClick?: () => void;
  className?: string;
};

export default function TextLink({
  text,
  appearance = 'primary',
  arrow = 'up',
  onClick,
  className,
}: TextLinkProps) {
  const isSecondary = appearance === 'secondary';
  return (
    <button className={`${styles.link}${className ? ` ${className}` : ''}`} onClick={onClick}>
      <span className={`${styles.text} ${isSecondary ? styles.secondary : styles.primary}`}>
        {text}
      </span>
      <span className={`${styles.arrowWrapper} ${styles[arrow]}`}>
        <img alt="" src={isSecondary ? arrowLightIcon : arrowIcon} />
      </span>
    </button>
  );
}
