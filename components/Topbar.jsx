import { CONTACTO } from '@/data/disciplines';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar__content">
        <a href={`tel:${CONTACTO.telefono}`} className="topbar__link">
          📞 {CONTACTO.telefono}
        </a>
        <span className="topbar__sep">·</span>
        <a href={`mailto:${CONTACTO.email}`} className="topbar__link">
          ✉ {CONTACTO.email}
        </a>
        <span className="topbar__sep">·</span>
        <a href={CONTACTO.instagram} target="_blank" rel="noopener noreferrer" className="topbar__link">
          Instagram
        </a>
        <span className="topbar__sep">·</span>
        <a href={CONTACTO.facebook} target="_blank" rel="noopener noreferrer" className="topbar__link">
          Facebook
        </a>
      </div>
    </div>
  );
}
