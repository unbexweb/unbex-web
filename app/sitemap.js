import { disciplinas } from '@/data/disciplines';

const BASE = 'https://www.unbexargentina.com';

export default function sitemap() {
  const estaticas = [
    { url: BASE,                              lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/nosotros`,                 lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/comunidad-unbex`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/tene-tu-unbex`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/trabajar-con-nosotros`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ];

  const disciplinaPages = disciplinas.map(d => ({
    url:             `${BASE}/disciplinas/${d.clave}`,
    lastModified:    new Date(),
    changeFrequency: 'monthly',
    priority:        0.8,
  }));

  return [...estaticas, ...disciplinaPages];
}
