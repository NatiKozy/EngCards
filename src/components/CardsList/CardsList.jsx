import './CardsList.css';
import Card from '../Card/Card.jsx';
import apple from '../../images/apple.jpeg';
import pear from '../../images/pear.jpg';

function CardsList() {
    return(
        <div className='cardsList'>
        <Card
            image={apple}
            title='Apple'
            translate='яблоко'/>

        <Card
            image={pear}
            title='Pear'
            translate='груша'/>
        </div>
    )
}

export default CardsList;