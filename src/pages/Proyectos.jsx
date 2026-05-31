import { proyectos } from "../data/datos";

function Proyectos() {
    return (
        <section className="page">
            <h1>Proyectos</h1>

            <p className="muted">
                Proyectos desarrollados por los semilleros de investigación.
            </p>

            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Semillero</th>
                        <th>Estado</th>
                        <th>Integrantes</th>
                    </tr>
                </thead>

                <tbody>
                    {proyectos.map((proyecto) => (
                        <tr key={proyecto.id}>
                            <td>{proyecto.nombre}</td>
                            <td>{proyecto.semillero}</td>
                            <td>
                                <span className="badge">{proyecto.estado}</span>
                            </td>
                            <td>{proyecto.integrantes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default Proyectos;