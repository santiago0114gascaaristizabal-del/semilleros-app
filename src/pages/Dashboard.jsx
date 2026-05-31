import Card from "../components/Card";
import { semilleros, proyectos, eventos, estudiantes } from "../data/datos";

function Dashboard() {
    return (
        <section className="page">
            <h1>Dashboard general</h1>

            <p className="muted">
                Resumen visual del producto mínimo viable del sistema.
            </p>

            <div className="grid">
                <Card
                    titulo="Semilleros"
                    valor={semilleros.length}
                    descripcion="Grupos registrados"
                />

                <Card
                    titulo="Proyectos"
                    valor={proyectos.length}
                    descripcion="Proyectos académicos"
                />

                <Card
                    titulo="Eventos"
                    valor={eventos.length}
                    descripcion="Eventos programados"
                />

                <Card
                    titulo="Estudiantes"
                    valor={estudiantes.length}
                    descripcion="Participantes activos"
                />
            </div>
        </section>
    );
}

export default Dashboard;