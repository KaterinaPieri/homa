import styles from './Logo.module.css';
import {
  logoH, logoO, logoM, logoA,
  logoLightH, logoLightO, logoLightM, logoLightA,
} from '../../assets/images';

type LogoProps = {
  appearance?: 'primary' | 'light';
  className?: string;
};

export default function Logo({ appearance = 'primary', className }: LogoProps) {
  const isLight = appearance === 'light';
  return (
    <div className={`${styles.logo}${className ? ` ${className}` : ''}`}>
      <div className={styles.vectorO}>
        <img alt="" src={isLight ? logoLightO : logoO} />
      </div>
      <div className={styles.vectorM}>
        <img alt="" src={isLight ? logoLightM : logoM} />
      </div>
      <div className={styles.vectorH}>
        <img alt="" src={isLight ? logoLightH : logoH} />
      </div>
      <div className={styles.vectorA}>
        <img alt="" src={isLight ? logoLightA : logoA} />
      </div>
    </div>
  );
}
