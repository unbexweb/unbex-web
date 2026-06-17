import './globals.css';

const BASE_URL = 'https://www.unbexargentina.com';

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title:       'Unbex Argentina — Gimnasio',
  description: 'Centro de entrenamiento y bienestar en Buenos Aires. Crossfit, Musculación, Yoga, Pilates, Zumba y más.',
  icons: { icon: '/favicon.png' },
  openGraph: {
    title:       'Unbex Argentina — Gimnasio',
    description: 'Centro de entrenamiento y bienestar en Buenos Aires. Crossfit, Musculación, Yoga, Pilates, Zumba y más.',
    url:         BASE_URL,
    siteName:    'Unbex Argentina',
    locale:      'es_AR',
    type:        'website',
    images: [
      {
        url:    '/img/hero_fallback.jpg',
        width:  1200,
        height: 630,
        alt:    'Unbex Argentina — Centro de entrenamiento y bienestar',
      },
    ],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type':    'SportsActivityLocation',
  name:        'Unbex Argentina',
  description: 'Centro de entrenamiento y bienestar. Crossfit, Musculación, Yoga, Pilates, Zumba y más.',
  url:         BASE_URL,
  telephone:   '+541123989560',
  email:       'frandb@unbexargentina.com',
  address: {
    '@type':           'PostalAddress',
    streetAddress:     'Pacheco 1956',
    addressLocality:   'Ciudad Autónoma de Buenos Aires',
    postalCode:        'C1431',
    addressCountry:    'AR',
  },
  openingHoursSpecification: [
    {
      '@type':     'OpeningHoursSpecification',
      dayOfWeek:   ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens:       '07:00',
      closes:      '21:00',
    },
    {
      '@type':     'OpeningHoursSpecification',
      dayOfWeek:   ['Saturday'],
      opens:       '09:00',
      closes:      '12:00',
    },
  ],
  sameAs: [
    'https://instagram.com/unbex.ar',
    'https://facebook.com/unbex.ar',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
