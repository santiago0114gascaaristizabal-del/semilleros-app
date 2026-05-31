import { estudiantes } from "../data/datos";

function Estudiantes() {
    return (
        <section className="page">
            <h1>Estudiantes</h1>

            <p className="muted">
                Estudiantes vinculados a los semilleros del proyecto.
            </p>

            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Programa</th>
                        <th>Semillero</th>
                    </tr>
                </thead>

                <tbody>
                    {estudiantes.map((estudiante) => (
                        <tr key={estudiante.id}>
                            <td>{estudiante.nombre}</td>
                            <td>{estudiante.programa}</td>
                            <td>{estudiante.semillero}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default Estudiantes;