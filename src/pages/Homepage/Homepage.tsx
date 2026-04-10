import './styles.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import HeroSection from '../../components/HeroSection/HeroSection';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import Footer from '../../components/Footer/Footer';

export default function Homepage() {
  return (
    <div className="page">
      <main className="main_content">
        <HeroSection />
        <ProjectsSection />
        <Footer />
      </main>
      <Sidebar pageType="homepage" />
    </div>
  );
}
