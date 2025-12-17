import Carrusel from "./Carrusel";
export default function HomeAdmin() {
  return (
    <div>
      <h1>Home Admin 👑</h1>
      <p>Solo visible para administradores.</p>
      <div className="center">
        <section id="content">
          <h1 className="subheader">imagenes</h1>
          <Carrusel></Carrusel>
        </section>
      </div>
    </div>
  );
}
