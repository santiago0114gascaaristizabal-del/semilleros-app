import { eventos } from "../data/datos";

function Eventos() {
    return (
        <section className="page">
            <h1>Eventos</h1>

            <p className="muted">
                Eventos académicos asociados a la participación de los semilleros.
            </p>

            <div className="cards-list">
                {eventos.map((evento) => (
                    <div className="info-card" key={evento.id}>
                        <h3>{evento.nombre}</h3>

                        <p>
                            <strong>Fecha:</strong> {evento.fecha}
                        </p>

                        <p>
                            <strong>Lugar:</strong> {evento.lugar}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Eventos;