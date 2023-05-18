import { useEffect, useState } from "react"
import BikeCard from "../BikeCard/BikeCard"
import bikeService from "../../services/bikes.services"
import { Col, Row } from "react-bootstrap"

const BikesList = () => {

    const [bikes, setBikes] = useState([])

    useEffect(() => {

        bikeService
            .getBikes()
            .then(({ data }) => setBikes(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Row>
            {
                bikes.map(elm => {
                    return (
                        <Col md={{ span: 3 }} key={elm._id}>
                            <BikeCard {...elm} />
                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default BikesList