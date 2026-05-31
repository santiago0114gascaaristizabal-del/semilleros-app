function Card({ titulo, valor, descripcion }) {
    return (
        <div className="card">
            <h3>{titulo}</h3>
            <p className="card-number">{valor}</p>
            <span>{descripcion}</span>
        </div>
    );
}

export default Card;