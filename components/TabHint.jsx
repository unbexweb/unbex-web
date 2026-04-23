'use client';

import { useRef, useEffect, useState } from 'react';

export default function TabHint({ activeIndex = 0, tabsRef }) {
  const [x, setX] = useState(0);
  const mounted = useRef(false);

  useEffect(() => {
    // skip initial mount — finger starts centered
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (!tabsRef?.current) return;

    const tabs = tabsRef.current.querySelectorAll('button');
    const activeTab = tabs[activeIndex];
    if (!activeTab) return;

    const wrap = tabsRef.current.parentElement;
    if (!wrap) return;

    const wrapRect = wrap.getBoundingClientRect();
    const tabRect  = activeTab.getBoundingClientRect();
    const wrapCenter = wrapRect.left + wrapRect.width / 2;
    const tabCenter  = tabRect.left  + tabRect.width  / 2;

    setX(tabCenter - wrapCenter);
  }, [activeIndex]);

  return (
    <span
      className="tab-hint"
      aria-hidden="true"
      style={{ transform: `translateX(${x}px)` }}
    >
      <span className="tab-hint__bounce">👇</span>
    </span>
  );
}
