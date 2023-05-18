import axios from 'axios'

class BikeService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/bikes`
        })
    }

    getBikes() {
        return this.api.get("/getAllBikes")
    }

    createBikes(bikeData) {
        return this.api.post('/addBike', bikeData)
    }

}

const bikeService = new BikeService()
export default bikeService