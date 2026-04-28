'use client';

import { useRef, useLayoutEffect, useEffect } from 'react';

export default function TabHint({ activeIndex = 0, tabsRef }) {
  const dedoRef = useRef(null);
  const mounted = useRef(false);

  function mover(index, animar) {
    const tab = tabsRef?.current?.[index];
    const dedo = dedoRef.current;
    if (!tab || !dedo) return;
    if (!animar) dedo.style.transition = 'none';
    dedo.style.left = `${tab.offsetLeft + tab.offsetWidth / 2}px`;
    if (!animar) {
      dedo.getBoundingClientRect(); // force reflow para que la transición no se vea al montar
      dedo.style.transition = '';
    }
  }

  useLayoutEffect(() => {
    mover(activeIndex, false);
    mounted.current = true;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!mounted.current) return;
    mover(activeIndex, true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return (
    <span ref={dedoRef} className="tab-hint" aria-hidden="true">
      <span className="tab-hint__bounce">👇</span>
    </span>
  );
}
