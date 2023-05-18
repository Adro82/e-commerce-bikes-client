import { Container } from "react-bootstrap"
import BikesList from "../../components/BikesList/BikesList"

const BikesListPage = () => {

    return (
        <Container>
            <h1>Bikes List</h1>
            <hr />
            <BikesList />
            {/* <p>{elm.brand}</p> */}
        </Container>
    )
}

export default BikesListPage