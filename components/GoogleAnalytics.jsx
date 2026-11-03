import { GoogleAnalytics as GA } from '@next/third-parties/google';

// No hace nada si todavía no se cargó el Measurement ID — así se puede
// desplegar el sitio antes de tener el ID de GA4 sin romper nada.
export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId) return null;
  return <GA gaId={gaId} />;
}
