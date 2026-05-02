'use client';

import { useCallback, useEffect, useRef, useState, type TouchEvent } from 'react';
import type { ProjectImage } from '@/data/projects';

type LightboxProps = {
  images: ProjectImage[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
};

const SWIPE_COMMIT_PX = 60;
const SWIPE_AXIS_LOCK_PX = 8;

export default function Lightbox({ images, index, onClose, onChange }: LightboxProps) {
  const total = images.length;
  const current = images[index];

  const next = useCallback(() => onChange((index + 1) % total), [index, total, onChange]);
  const prev = useCallback(() => onChange((index - 1 + total) % total), [index, total, onChange]);

  const startXRef = useRef<number | null>(null);
  const startYRef = useRef<number | null>(null);
  const swipingRef = useRef(false);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, next, prev]);

  useEffect(() => {
    const preload = (i: number) => {
      const img = images[(i + total) % total];
      if (!img) return;
      const el = new window.Image();
      el.src = img.full ?? img.src;
    };
    preload(index + 1);
    preload(index - 1);
  }, [index, images, total]);

  const onTouchStart = (e: TouchEvent) => {
    if (e.touches.length !== 1) return;
    startXRef.current = e.touches[0].clientX;
    startYRef.current = e.touches[0].clientY;
    swipingRef.current = false;
  };

  const onTouchMove = (e: TouchEvent) => {
    if (startXRef.current === null || startYRef.current === null) return;
    const dx = e.touches[0].clientX - startXRef.current;
    const dy = e.touches[0].clientY - startYRef.current;
    if (!swipingRef.current) {
      if (Math.abs(dx) < SWIPE_AXIS_LOCK_PX && Math.abs(dy) < SWIPE_AXIS_LOCK_PX) return;
      if (Math.abs(dx) > Math.abs(dy)) {
        swipingRef.current = true;
        setIsDragging(true);
      } else {
        startXRef.current = null;
        startYRef.current = null;
        return;
      }
    }
    setDragX(dx);
  };

  const onTouchEnd = (e: TouchEvent) => {
    if (startXRef.current === null) return;
    const endX = e.changedTouches[0]?.clientX ?? startXRef.current;
    const dx = endX - startXRef.current;
    if (swipingRef.current && Math.abs(dx) > SWIPE_COMMIT_PX) {
      if (dx < 0) next();
      else prev();
    }
    startXRef.current = null;
    startYRef.current = null;
    swipingRef.current = false;
    setDragX(0);
    setIsDragging(false);
  };

  if (!current) return null;

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onTouchCancel={onTouchEnd}
    >
      <button
        type="button"
        className="lightbox_close"
        onClick={onClose}
        aria-label="Close"
      >
        <span aria-hidden="true">×</span>
      </button>

      <button
        type="button"
        className="lightbox_nav lightbox_prev"
        onClick={(e) => { e.stopPropagation(); prev(); }}
        aria-label="Previous image"
      >
        <span aria-hidden="true">‹</span>
      </button>

      <div
        className={`lightbox_image_wrapper${isDragging ? ' is-dragging' : ''}`}
        onClick={(e) => e.stopPropagation()}
        style={dragX !== 0 ? { transform: `translate3d(${dragX}px, 0, 0)` } : undefined}
      >
        <img
          key={current.src}
          src={current.full ?? current.src}
          alt={current.alt}
          draggable={false}
        />
      </div>

      <button
        type="button"
        className="lightbox_nav lightbox_next"
        onClick={(e) => { e.stopPropagation(); next(); }}
        aria-label="Next image"
      >
        <span aria-hidden="true">›</span>
      </button>

      <span className="lightbox_counter" aria-live="polite">
        {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>
    </div>
  );
}
