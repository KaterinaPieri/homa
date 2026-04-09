import styles from './HeroSection.module.css';
import Logo from '../Logo/Logo';
import TextLink from '../TextLink/TextLink';
import { heroImage, carouselSteps } from '../../assets/images';

type HeroSectionProps = {
  slogan?: string;
  featuredProjectLabel?: string;
  featuredProjectName?: string;
};

export default function HeroSection({
  slogan = 'creating spaces that are more than just structures',
  featuredProjectLabel = 'FEATURED PROJECT',
  featuredProjectName = 'homa house',
}: HeroSectionProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundImage}>
        <img src={heroImage} alt={featuredProjectName} />
        <div className={styles.overlay} />
      </div>

      <div className={styles.topContent}>
        <p className={styles.slogan}>{slogan}</p>
        <Logo appearance="light" />
      </div>

      <div className={styles.bottomContent}>
        <div className={styles.carouselSteps}>
          <img src={carouselSteps} alt="Carousel progress" />
        </div>
        <div className={styles.projectDetails}>
          <div className={styles.featuredInfo}>
            <span className={styles.featuredLabel}>{featuredProjectLabel}</span>
            <span className={styles.featuredName}>{featuredProjectName}</span>
          </div>
          <TextLink text="view project" appearance="secondary" arrow="down" />
        </div>
      </div>
    </section>
  );
}
