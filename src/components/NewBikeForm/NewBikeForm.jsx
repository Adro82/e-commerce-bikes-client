import { useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import bikeService from "../../services/bikes.services"

const NewBikeForm = () => {

    const [bikeData, setbikeData] = useState({
        brand: '',
        model: '',
        description: '',
        imageUrl: '',
        stock: 0,
        price: 0
    })
    const handleInputChange = e => {
        const { value, name } = e.target
        setbikeData({ ...bikeData, [name]: value })
    }

    const handleBikeSubmit = e => {
        e.preventDefault()

        bikeService
            .createBikes(bikeData)
            .then(({ data }) => console.log(data))
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleBikeSubmit}>
            <Form.Group className="mb-3" controlId="brand">
                <Form.Label>Brand</Form.Label>
                <Form.Control type="text" name="brand" value={bikeData.brand} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="model">
                <Form.Label>Model</Form.Label>
                <Form.Control type="text" name="model" value={bikeData.model} onChange={handleInputChange} />
            </Form.Group>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name="description" value={bikeData.description} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group as={Col} controlId="imageUrl">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="url" name="imageUrl" value={bikeData.imageUrl} onChange={handleInputChange} />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="stock">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control type="text" name="stock" value={bikeData.stock} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group as={Col} controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" name="price" value={bikeData.price} onChange={handleInputChange} />
                </Form.Group>
            </Row>
            <Button variant="dark" type="submit"> Add Bike </Button>
        </Form>
    )
}

export default NewBikeForm