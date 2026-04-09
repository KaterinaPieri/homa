import styles from './ProjectItem.module.css';

type ProjectItemProps = {
  code: string;
  name: string;
  location: string;
  year: number;
  image: string;
  href?: string;
};

export default function ProjectItem({ code, name, location, year, image, href = '#' }: ProjectItemProps) {
  return (
    <a className={styles.projectItem} href={href}>
      <div className={styles.projectDetails}>
        <span className={styles.projectCode}>{code} * {name}</span>
        <span className={styles.projectLocation}>{location}, {year}</span>
      </div>
      <div className={styles.imageWrapper}>
        <img src={image} alt={name} />
        <div className={styles.imageOverlay} />
      </div>
    </a>
  );
}
