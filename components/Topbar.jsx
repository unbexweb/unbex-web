export default function Topbar({ oculto = false }) {
  return (
    <div className={`topbar${oculto ? ' topbar--oculto' : ''}`} id="topbar" />
  );
}
