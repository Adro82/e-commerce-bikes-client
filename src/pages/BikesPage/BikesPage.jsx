import { useState } from "react"
import { Container, Modal, Button } from "react-bootstrap"
import BikesList from "../../components/BikesList/BikesList"
import NewBikeForm from "../../components/NewBikeForm/NewBikeForm"


const BikesListPage = () => {
    const [showModal, setShowModal] = useState(true)

    return (
        <>
            <Container>
                <h1>Bikes List</h1>
                <Button onClick={() => setShowModal(true)} variant='dark' size='sm'>New Bike</Button>
                <hr />
                <BikesList />
            </Container>


            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>New Bike</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewBikeForm />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default BikesListPage