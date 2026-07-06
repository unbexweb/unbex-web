'use client';

import { useMemo, useState } from 'react';
import { ZONAS } from '@/data/zonas';

function telefonoToWaLink(telefono, mensaje) {
  const digits = (telefono || '').replace(/\D/g, '');
  const conCodigo = digits.startsWith('54') ? digits : `549${digits.replace(/^0/, '')}`;
  return `https://wa.me/${conCodigo}?text=${encodeURIComponent(mensaje)}`;
}

function instagramToUrl(instagram) {
  if (!instagram) return null;
  const handle = instagram.trim().replace(/^@/, '');
  if (/^https?:\/\//i.test(instagram)) return instagram;
  return `https://instagram.com/${handle}`;
}

function inicial(nombre) {
  return (nombre || '?').trim().charAt(0).toUpperCase();
}

export default function DirectorioProfesionales({ profesionales }) {
  const [busqueda, setBusqueda] = useState('');
  const [zona, setZona] = useState('');

  const filtrados = useMemo(() => {
    const term = busqueda.trim().toLowerCase();
    return profesionales.filter(p => {
      const coincideZona = !zona || p.zona === zona;
      const coincideTexto =
        !term ||
        [p.nombre, p.apellido, p.rubro, p.descripcion]
          .filter(Boolean)
          .some(campo => campo.toLowerCase().includes(term));
      return coincideZona && coincideTexto;
    });
  }, [busqueda, zona, profesionales]);

  return (
    <div className="directorio">
      <div className="directorio-filtros">
        <div className="directorio-search">
          <svg className="directorio-search__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="M20 20L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            className="directorio-search__input"
            placeholder="Buscá por rubro o nombre..."
            value={busqueda}
            onChange={e => setBusqueda(e.target.value)}
            aria-label="Buscar profesional por rubro o nombre"
          />
        </div>

        <select
          className="directorio-zona-select"
          value={zona}
          onChange={e => setZona(e.target.value)}
          aria-label="Filtrar por zona"
        >
          <option value="">Todas las zonas</option>
          {ZONAS.map(z => (
            <option key={z} value={z}>{z}</option>
          ))}
        </select>
      </div>

      {profesionales.length === 0 && (
        <p className="directorio__vacio">
          Todavía no hay profesionales publicados. ¡Sé el primero en sumarte!
        </p>
      )}

      {profesionales.length > 0 && filtrados.length === 0 && (
        <p className="directorio__vacio">No encontramos profesionales para tu búsqueda.</p>
      )}

      {filtrados.length > 0 && (
        <div className="directorio__grid">
          {filtrados.map(p => (
            <div key={p.id} className="directorio-card">
              <div className="directorio-card__header">
                <span className="directorio-card__avatar">{inicial(p.nombre)}</span>
                <div>
                  <h3 className="directorio-card__nombre">{p.nombre} {p.apellido}</h3>
                  <span className="directorio-card__rubro">{p.rubro}</span>
                </div>
              </div>

              {p.zona && (
                <span className="directorio-card__zona">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" stroke="currentColor" strokeWidth="1.6" />
                    <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                  {p.zona}
                </span>
              )}

              {p.descripcion && <p className="directorio-card__desc">{p.descripcion}</p>}

              <a
                href={telefonoToWaLink(p.telefono, `Hola ${p.nombre}! Te vi en la Comunidad Unbex y quería consultarte sobre ${p.rubro.toLowerCase()}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="directorio-card__whatsapp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.533 5.853L.057 23.54a.5.5 0 0 0 .603.625l5.898-1.547A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.95 9.95 0 0 1-5.073-1.384l-.363-.217-3.761.987.999-3.647-.236-.374A9.96 9.96 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
                </svg>
                Escribir por WhatsApp
              </a>

              {instagramToUrl(p.instagram) && (
                <a
                  href={instagramToUrl(p.instagram)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="directorio-card__instagram"
                >
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
                  </svg>
                  Instagram
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="directorio__cta">
        <a href="#publicar-perfil" className="directorio__cta-btn">
          Sumá tu perfil a la bolsa
        </a>
      </div>
    </div>
  );
}
