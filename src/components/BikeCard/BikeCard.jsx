
import { Button, Card } from 'react-bootstrap';
import './BikeCard.css'
import { Link } from 'react-router-dom';

const BikeCard = ({ brand, model, imageUrl, _id }) => {
    return (
        <Link to={`/details/${_id}`}>
            <Card >
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title>{brand}</Card.Title>
                    <Card.Text>{model}</Card.Text>
                    {/* <Button variant="dark">Go somewhere</Button> Lo dejo Aqui disponible para el Delete y el Edit */}
                </Card.Body>
            </Card>
        </Link>
    );
}

export default BikeCard;