const Card = () => {
    return (
        <li className="card">
            <img src="#" alt="" className="card__image" />
            <button 
            aria-label="Remove place"
            className="card__delete-btn"
            type="button"
            ></button>
            <div className="card__description">
                <h2 className="card__title">No se ve</h2>
                <button 
                aria-label="Like place"
                className="card__like-button"
                type="button"
                ></button>
            </div>
        </li>
    );
}

export default Card;