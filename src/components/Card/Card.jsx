import './Card.css';



function Card(props) {
    const {image, title, translate } = props;
    return(
        <div className="card">
            <img className='card__img' src={image} alt=''/>
            <h3>{title}</h3>
            <p>{translate}</p>
        </div>

    )
}


export default Card;