import './globals.css';

export const metadata = {
  title: 'Unbex Argentina — Gimnasio',
  description: 'Unbex Argentina - Centro de fitness y bienestar. Crossfit, Musculación, Yoga, Pilates, Zumba y más.',
  icons: { icon: '/favicon.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
