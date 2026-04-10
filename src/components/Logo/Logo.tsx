import styles from './Logo.module.css';

import LogoPrimary from '../../assets/logo-primary.svg';
import LogoLight from '../../assets/logo-light.svg';

type LogoProps = {
  appearance?: 'primary' | 'light';
  className?: string;
};

export default function Logo({ appearance = 'primary', className }: LogoProps) {
  const isLight = appearance === 'light';
  return (
    <img alt="HOMA Logo" className={`${styles.logo} ${className}`} src={isLight ? LogoLight : LogoPrimary} />
  );
}
