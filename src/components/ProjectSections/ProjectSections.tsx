'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type {
  ProjectImage,
  ProjectSection,
  SplitContent,
} from '@/data/projects';
import ZoomImage from '@/components/ZoomImage/ZoomImage';
import Lightbox from './Lightbox';

/* ────────────────────────────────────────────────────────────────────────────
 * Reusable section components.
 *
 * Each is exported individually so they can be dropped into any page directly,
 * but the typical entry point is the default <ProjectSections sections=… />,
 * which maps a CMS-shaped array of section objects to the right component and
 * wires every non-hero image into a click-to-open lightbox slider.
 * ────────────────────────────────────────────────────────────────────────── */

type GalleryOpenFn = (image: ProjectImage) => void;
const GalleryContext = createContext<GalleryOpenFn | null>(null);

function GalleryImg({ image, className }: { image: ProjectImage; className?: string }) {
  const open = useContext(GalleryContext);
  return (
    <ZoomImage>
      <img
        src={image.src}
        alt={image.alt}
        className={className}
        onClick={open ? () => open(image) : undefined}
        data-cursor-hover={open ? '' : undefined}
        style={open ? { cursor: 'pointer' } : undefined}
      />
    </ZoomImage>
  );
}

export function ProjectHero({ image }: { image: ProjectImage }) {
  return (
    <section className="ps_hero">
      <ZoomImage>
        <img src={image.src} alt={image.alt} />
      </ZoomImage>
    </section>
  );
}

export function ProjectHeader({ name, location }: { name: string; location: string }) {
  return (
    <section className="ps_header">
      <span className="ps_header_label">{name}</span>
      <p className="ps_header_value">{location}</p>
    </section>
  );
}

export function ProjectFullImage({ image }: { image: ProjectImage }) {
  return (
    <section className="ps_full_image">
      <GalleryImg image={image} />
      {image.caption && <p className="ps_caption">{image.caption}</p>}
    </section>
  );
}

export function ProjectCenteredImage({
  image,
  maxWidth,
}: {
  image: ProjectImage;
  maxWidth?: number;
}) {
  return (
    <section className="ps_centered_image">
      <img
        src={image.src}
        alt={image.alt}
        style={maxWidth ? { maxWidth: `${maxWidth}px` } : undefined}
      />
      {image.caption && <p className="ps_caption">{image.caption}</p>}
    </section>
  );
}

export function ProjectImagePair({ images }: { images: [ProjectImage, ProjectImage] }) {
  return (
    <section className="ps_image_pair">
      {images.map((img, i) => (
        <GalleryImg key={i} image={img} />
      ))}
    </section>
  );
}

function SplitItem({ content }: { content: SplitContent }) {
  switch (content.kind) {
    case 'image':
      return <GalleryImg image={content.image} className="ps_split_image" />;

    case 'text':
      return (
        <div className="ps_split_text">
          {content.heading && <h2 className="ps_split_heading">{content.heading}</h2>}
          {content.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      );

    case 'imageWithText': {
      const image = <GalleryImg image={content.image} />;
      const text = (
        <div className="ps_split_text">
          {content.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      );
      const imageFirst = (content.imagePosition ?? 'top') === 'top';
      return (
        <div className="ps_split_imagetext">
          {imageFirst ? <>{image}{text}</> : <>{text}{image}</>}
        </div>
      );
    }

    case 'imagePairWithText':
      const images = <div className="ps_stack_pair">{content.images.map((img, i) => (
              <GalleryImg key={i} image={img} />
            ))}</div>;
      const imagesFirst = (content.imagePosition ?? 'top') === 'top';
      const text = (
        <div className="ps_split_text">
          {content.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      );
      return (
        <div className="ps_split_stack">
          {imagesFirst ? <>{images}{text}</> : <>{text}{images}</>}
        </div>
      );

    case 'imagePair':
      return (
        <div className="ps_split_stack">
          <div className="ps_stack_pair">
            {content.images.map((img, i) => (
              <GalleryImg key={i} image={img} />
            ))}
          </div>
        </div>
      );

    case 'imageStack':
      return (
        <div className="ps_split_stack">
          <GalleryImg image={content.mainImage} className="ps_stack_main" />
          <div className="ps_stack_pair">
            {content.subImages.map((img, i) => (
              <GalleryImg key={i} image={img} />
            ))}
          </div>
        </div>
      );
  }
}

export function ProjectSplit({
  left,
  right,
  align = 'top',
}: {
  left: SplitContent;
  right: SplitContent;
  align?: 'top' | 'bottom' | 'center';
}) {
  return (
    <section className="ps_split" data-align={align}>
      <div className="ps_split_col"><SplitItem content={left} /></div>
      <div className="ps_split_col"><SplitItem content={right} /></div>
    </section>
  );
}

function flattenGalleryImages(sections: ProjectSection[]): ProjectImage[] {
  const out: ProjectImage[] = [];
  for (const section of sections) {
    switch (section.type) {
      case 'hero':
      case 'header':
        break;
      case 'fullImage':
      case 'centeredImage':
        out.push(section.image);
        break;
      case 'imagePair':
        out.push(...section.images);
        break;
      case 'split':
        for (const col of [section.left, section.right]) {
          switch (col.kind) {
            case 'image':
            case 'imageWithText':
              out.push(col.image);
              break;
            case 'imageStack':
              out.push(col.mainImage, ...col.subImages);
              break;
            case 'imagePair':
              out.push(...col.images);
              break;
            case 'text':
              break;
          }
        }
        break;
    }
  }
  return out;
}

export default function ProjectSections({ sections }: { sections: ProjectSection[] }) {
  const galleryImages = useMemo(() => flattenGalleryImages(sections), [sections]);
  const indexBySrc = useMemo(() => {
    const m = new Map<string, number>();
    galleryImages.forEach((img, i) => m.set(img.src, i));
    return m;
  }, [galleryImages]);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = useCallback<GalleryOpenFn>(
    (image) => {
      const i = indexBySrc.get(image.src);
      if (i !== undefined) setLightboxIndex(i);
    },
    [indexBySrc],
  );

  return (
    <GalleryContext.Provider value={open}>
      <div className="project_sections">
        {sections.map((section, i) => {
          switch (section.type) {
            case 'hero':
              return <ProjectHero key={i} image={section.image} />;
            case 'header':
              return <ProjectHeader key={i} name={section.name} location={section.location} />;
            case 'fullImage':
              return <ProjectFullImage key={i} image={section.image} />;
            case 'centeredImage':
              return <ProjectCenteredImage key={i} image={section.image} maxWidth={section.maxWidth} />;
            case 'imagePair':
              return <ProjectImagePair key={i} images={section.images} />;
            case 'split':
              return <ProjectSplit key={i} left={section.left} right={section.right} align={section.align} />;
          }
        })}
      </div>
      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChange={setLightboxIndex}
        />
      )}
    </GalleryContext.Provider>
  );
}
