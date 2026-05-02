'use client';

import { useState } from 'react';
import Logo from '@/components/Logo/Logo';
import TextLink from '@/components/TextLink/TextLink';
import CarouselSteps from '@/components/CarouselSteps/CarouselSteps';
import { FEATURED_PROJECTS } from '@/data/projects';

type HeroSectionProps = {
  slogan?: string;
  featuredProjectLabel?: string;
};

export default function HeroSection({
  slogan = 'creating spaces that are more than just structures',
  featuredProjectLabel = 'FEATURED PROJECT',
}: HeroSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const featured = FEATURED_PROJECTS[activeIndex];

  return (
    <section className="hero">
      <div className="background_image">
        {FEATURED_PROJECTS.map((project, index) => (
          <img
            key={project.image.src}
            src={project.image.src}
            alt={project.name}
            className={index === activeIndex ? 'active' : ''}
          />
        ))}
        <div className="overlay" />
      </div>

      <div className="top_content">
        <p className="slogan">{slogan}</p>
        <Logo appearance="light" />
      </div>

      <div className="bottom_content">
        <CarouselSteps
          count={FEATURED_PROJECTS.length}
          duration={3000}
          onStepChange={setActiveIndex}
        />
        <div className="project_details">
          <div className="featured_info">
            <span className="featured_label">{featuredProjectLabel}</span>
            <span className="featured_name">{featured.name}</span>
          </div>
          <TextLink text="view project" appearance="secondary" arrow="down" href={featured.href} />
        </div>
      </div>
    </section>
  );
}
