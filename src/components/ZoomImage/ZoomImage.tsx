'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type ZoomImageProps = {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'span';
};

export default function ZoomImage({ children, className, as = 'div' }: ZoomImageProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -8% 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const cls = `zoom_image${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`;
  const Tag = as;

  return (
    <Tag ref={ref as never} className={cls}>
      {children}
    </Tag>
  );
}
