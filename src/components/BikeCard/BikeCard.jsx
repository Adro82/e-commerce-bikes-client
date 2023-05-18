
import { Button, Card } from 'react-bootstrap';
import './BikeCard.css'

const BikeCard = ({ brand, model, imageUrl, _id }) => {
    return (
        <Card >
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{brand}</Card.Title>
                <Card.Text>{model}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default BikeCard;