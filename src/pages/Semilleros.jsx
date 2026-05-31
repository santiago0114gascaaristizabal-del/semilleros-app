import { semilleros } from "../data/datos";

function Semilleros() {
    return (
        <section className="page">
            <h1>Semilleros</h1>

            <p className="muted">
                Listado de semilleros registrados en el sistema.
            </p>

            <div className="cards-list">
                {semilleros.map((item) => (
                    <div className="info-card" key={item.id}>
                        <h3>{item.nombre}</h3>

                        <p>
                            <strong>Coordinador:</strong> {item.coordinador}
                        </p>

                        <p>
                            <strong>Área:</strong> {item.area}
                        </p>

                        <p>{item.descripcion}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Semilleros;