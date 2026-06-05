'use client';

import dynamic from 'next/dynamic';

const HeroDisciplina = dynamic(() => import('./HeroDisciplina'), { ssr: false });

export default function HeroWrapper(props) {
  return <HeroDisciplina {...props} />;
}
