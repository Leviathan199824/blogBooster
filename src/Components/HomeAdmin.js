import Bootstrap from "./Bootstrap";
import Carrusel from "./Carrusel";
export default function HomeAdmin() {
  return (
    <div className="text-center">
      <Bootstrap></Bootstrap>
      <h1 className="text-center">Home Admin 👑</h1>
      <p className="text-center">Solo visible para administradores.</p>
      <div className="center">
        <section id="content">
          <h1 className="subheader">imagenes</h1>
          <Carrusel></Carrusel>
        </section>
      </div>
    </div>
  );
}
