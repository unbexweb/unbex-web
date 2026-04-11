/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Evita clickjacking: nadie puede embeber este sitio en un iframe
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          // Previene MIME-type sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Controla qué info de referrer se envía a terceros
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Fuerza HTTPS por 1 año (activar solo cuando el sitio esté en producción con HTTPS)
          // { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
          // Limita acceso a features del browser no necesarias
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
