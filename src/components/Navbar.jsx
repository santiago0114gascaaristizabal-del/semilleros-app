import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <h2>SemillerosApp</h2>

            <div className="nav-links">
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/semilleros">Semilleros</NavLink>
                <NavLink to="/proyectos">Proyectos</NavLink>
                <NavLink to="/eventos">Eventos</NavLink>
                <NavLink to="/estudiantes">Estudiantes</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;