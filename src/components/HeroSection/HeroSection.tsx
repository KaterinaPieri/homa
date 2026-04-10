import Logo from '@/components/Logo/Logo';
import TextLink from '@/components/TextLink/TextLink';
import { heroImage, carouselSteps } from '@/assets/images';

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
    <section className="hero">
      <div className="background_image">
        <img src={heroImage} alt={featuredProjectName} />
        <div className="overlay" />
      </div>

      <div className="top_content">
        <p className="slogan">{slogan}</p>
        <Logo appearance="light" />
      </div>

      <div className="bottom_content">
        <div className="carousel_steps">
          <img src={carouselSteps} alt="Carousel progress" />
        </div>
        <div className="project_details">
          <div className="featured_info">
            <span className="featured_label">{featuredProjectLabel}</span>
            <span className="featured_name">{featuredProjectName}</span>
          </div>
          <TextLink text="view project" appearance="secondary" arrow="down" />
        </div>
      </div>
    </section>
  );
}
