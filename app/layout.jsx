import './globals.css';

export const metadata = {
  title: process.env.NEXT_PUBLIC_SITE_NAME ? `${process.env.NEXT_PUBLIC_SITE_NAME} — Gimnasio` : 'Unbex Argentina — Gimnasio',
  description: process.env.NEXT_PUBLIC_SITE_DESC || 'Unbex Argentina - Centro de fitness y bienestar. Crossfit, Musculación, Yoga, Pilates, Zumba y más.',
  icons: { icon: '/favicon.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
