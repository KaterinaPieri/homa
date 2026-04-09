import styles from './ProjectsSection.module.css';
import ProjectItem from '../ProjectItem/ProjectItem';
import { villaKazaImage, homaHouseImage, apbImage, villaBajImage } from '../../assets/images';

const PROJECTS = [
  { code: '001', name: 'villa kaza', location: 'larnaca', year: 2023, image: villaKazaImage },
  { code: '002', name: 'homa house', location: 'larnaca', year: 2024, image: homaHouseImage },
  { code: '003', name: 'apb', location: 'nicosia', year: 2023, image: apbImage },
  { code: '004', name: 'villa baj', location: 'larnaca', year: 2024, image: villaBajImage },
];

export default function ProjectsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>projects ({PROJECTS.length + 1})</h2>
        <div className={styles.divider} />
      </div>
      <div className={styles.grid}>
        {PROJECTS.map((project) => (
          <ProjectItem
            key={project.code}
            code={project.code}
            name={project.name}
            location={project.location}
            year={project.year}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}
