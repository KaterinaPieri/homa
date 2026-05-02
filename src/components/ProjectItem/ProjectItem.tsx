import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import ZoomImage from '@/components/ZoomImage/ZoomImage';

type ProjectItemProps = {
  code: string;
  name: string;
  location: string;
  year: number;
  image: StaticImageData;
  href?: string;
};

export default function ProjectItem({ code, name, location, year, image, href = '#' }: ProjectItemProps) {
  return (
    <Link className="project_item" href={href}>
      <div className="project_item_details">
        <span className="project_code">{code} * {name}</span>
        <span className="project_location">{location}, {year}</span>
      </div>
      <ZoomImage className="image_wrapper">
        <Image src={image} alt={name} placeholder="blur" />
      </ZoomImage>
    </Link>
  );
}
