'use client';

import { useEffect, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function AnimatedSection({
  children,
  className = '',
  animation = 'anim-fade-up',
  delay = 0,
  as: Tag = 'div',
  ...props
}) {
  const [ref, isVisible] = useIntersectionObserver();
  const [effectiveDelay, setEffectiveDelay] = useState(delay);

  useEffect(() => {
    if (delay > 0 && window.matchMedia('(max-width: 768px)').matches) {
      setEffectiveDelay(0);
    }
  }, [delay]);

  return (
    <Tag
      ref={ref}
      className={`${animation}${isVisible ? ' is-visible' : ''} ${className}`.trim()}
      style={effectiveDelay ? { '--anim-delay': `${effectiveDelay}ms` } : undefined}
      {...props}
    >
      {children}
    </Tag>
  );
}
