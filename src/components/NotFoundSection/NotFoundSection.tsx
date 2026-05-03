import VillaBajTopHero from '@/assets/villa-baj/villa-baj-top-hero.png';
import TextLink from '@/components/TextLink/TextLink';
import Logo from '../Logo/Logo';

type NotFoundSectionProps = {
  errorLabel?: string;
  description?: string;
  homeLinkText?: string;
};

export default function NotFoundSection({
  errorLabel = 'ERROR / 404',
  description = "The page you're looking for has been moved, renamed, or never existed. Like a building that was drawn but never built.",
  homeLinkText = 'return home',
}: NotFoundSectionProps) {
  return (
    <section className="not_found">
      <div className="background_image">
        <img src={VillaBajTopHero.src} alt="" />
        <div className="overlay" />
      </div>

      <div className="content">
        <Logo appearance='light'/>
        <span className="error_label">{errorLabel}</span>
        <h1 className="headline">Not<br/>found.</h1>
        <div className="copy">
          <p className="description">{description}</p>
          <TextLink text={homeLinkText} appearance="secondary" arrow="up" href="/" size="lg" />
        </div>
      </div>
    </section>
  );
}
