import styles from './Homepage.module.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import HeroSection from '../../components/HeroSection/HeroSection';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import Footer from '../../components/Footer/Footer';

export default function Homepage() {
  return (
    <div className={styles.page}>
      <main className={styles.mainContent}>
        <HeroSection />
        <ProjectsSection />
        <Footer />
      </main>
      <Sidebar pageType="homepage" />
    </div>
  );
}
