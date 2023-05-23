import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import bikeService from "../../services/bikes.services"

const BikeDetailsPage = () => {

    const [bike, setBike] = useState({})
    const { bike_id } = useParams()

    useEffect(() => {
        bikeService
            .getOneBike(bike_id)
            .then(({ data }) => setBike(data))
            .catch(err => console.error(err))
    }, [bike_id])
    return (
        <Container>

            <h1>Details of {bike.brand} {bike.model}</h1>
            <hr />
            <Row>
                <Col md={{ span: 4 }}>
                    <img src={bike.imageUrl} style={{ width: '100%' }} />
                </Col>
                <Col md={{ span: 6, offset: 1 }}>
                    <h3>Especificaciones</h3>
                    <ul>
                        <li> Description: {bike.description}</li>
                        <li> Stock: {bike.stock}</li>
                        <li> Price: {bike.price}</li>
                    </ul>
                    <Link to="/gallery">
                        <Button as="div" variant="dark">Back to Gallery</Button>
                    </Link>
                </Col>
            </Row>

        </Container>

    )

}

export default BikeDetailsPage