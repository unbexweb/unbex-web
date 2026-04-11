import Link from 'next/link';

export default function DisciplinaCard({ disciplina }) {
  const { clave, nombre, desc, img } = disciplina;
  const imgSrc = `/img/disciplinas/${img}`;

  return (
    <div className="card-wrapper">
      <Link href={`/disciplinas/${clave}`} className="card-inner">
        <div
          className="card-front"
          style={{ backgroundImage: `url(${imgSrc})` }}
        >
          <span className="card-nombre">{nombre}</span>
        </div>
        <div className="card-back">
          <span className="card-nombre">{nombre}</span>
          <p className="card-desc">{desc}</p>
        </div>
      </Link>
    </div>
  );
}
