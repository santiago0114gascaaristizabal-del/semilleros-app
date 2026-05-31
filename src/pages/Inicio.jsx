import { Link } from "react-router-dom";

function Inicio() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Sistema Web de Semilleros de Investigación</h1>

                <p>
                    Plataforma diseñada para apoyar la gestión académica de semilleros,
                    proyectos, estudiantes y eventos dentro de la institución.
                </p>

                <div className="hero-buttons">
                    <Link to="/dashboard" className="btn-primary">
                        Ver dashboard
                    </Link>

                    <Link to="/semilleros" className="btn-secondary">
                        Explorar semilleros
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Inicio;