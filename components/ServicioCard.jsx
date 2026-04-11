export default function ServicioCard({ servicio }) {
  const { nombre, desc, icono, color } = servicio;

  return (
    <div className={`card ${color}`}>
      <div className="card__icon">{icono}</div>
      <h3 className="card__title">{nombre}</h3>
      <p className="card__desc">{desc}</p>
    </div>
  );
}
