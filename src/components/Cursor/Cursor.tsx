'use client';

import { useEffect, useRef, useState } from 'react';

const HOVER_SELECTOR = 'a, button, [data-cursor-hover], input, textarea, select, label';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [pressing, setPressing] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let raf = 0;
    const visibleRef = { current: false };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      setHovering(!!target?.closest?.(HOVER_SELECTOR));
    };

    const onLeave = () => {
      visibleRef.current = false;
      setVisible(false);
    };
    const onEnter = () => {
      visibleRef.current = true;
      setVisible(true);
    };

    const onDown = () => setPressing(true);
    const onUp = () => setPressing(false);

    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    window.addEventListener('mousedown', onDown, { passive: true });
    window.addEventListener('mouseup', onUp, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);

    document.body.classList.add('has_custom_cursor');

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
      document.body.classList.remove('has_custom_cursor');
    };
  }, []);

  const stateClass = `${hovering ? ' is-hover' : ''}${pressing ? ' is-press' : ''}${visible ? '' : ' is-hidden'}`;

  return (
    <>
      <div ref={ringRef} className={`cursor_ring${stateClass}`} aria-hidden="true" />
      <div ref={dotRef} className={`cursor_dot${stateClass}`} aria-hidden="true" />
    </>
  );
}
