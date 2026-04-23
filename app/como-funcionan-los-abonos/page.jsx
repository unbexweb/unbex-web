import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsappFloat from '@/components/WhatsappFloat';
import Link from 'next/link';

export const metadata = {
  title: 'Cómo funcionan los abonos | Unbex',
  description: 'Entendé cómo funcionan los planes y abonos de Unbex antes de elegir el tuyo.',
};

export default function ComoFuncionanLosAbonos() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 1rem', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-primary)', fontWeight: 100, fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1.5rem' }}>
          Cómo funcionan los abonos
        </h1>
        <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-light)', marginBottom: '2.5rem', maxWidth: '480px' }}>
          Próximamente — Fran está preparando el contenido con todos los detalles.
        </p>
        <Link href="/#precios" style={{ color: 'var(--color-rosa)', fontSize: 'var(--text-sm)', borderBottom: '1px solid var(--color-rosa)', paddingBottom: '2px', textDecoration: 'none' }}>
          ← Volver a Planes y Precios
        </Link>
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
