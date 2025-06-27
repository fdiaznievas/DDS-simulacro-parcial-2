import { Link } from "react-router-dom";

function Home() {
  return(
    <div className="container mt-5">
      <div className="text-center">
        <i className="bi bi-building fs-1 text-primary"></i>
        <h1 className="mt-3">Gestión de Ciudades Argentinas</h1>
        <p className="lead text-muted">
          Bienvenido al sistema de gestión. Usá el menú superior para acceder al listado de ciudades.
        </p>
        <Link to="/ciudades" className="btn btn-primary mt-3">
          Ver Ciudades
        </Link>
      </div>
    </div>  
  )

}
export default Home;