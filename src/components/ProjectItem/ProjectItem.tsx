import './styles.scss';

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
    <a className="project_item" href={href}>
      <div className="project_details">
        <span className="project_code">{code} * {name}</span>
        <span className="project_location">{location}, {year}</span>
      </div>
      <div className="image_wrapper">
        <img src={image} alt={name} />
        <div className="image_overlay" />
      </div>
    </a>
  );
}
