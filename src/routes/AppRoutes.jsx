import { Route, Routes } from "react-router-dom"
import BikeDetailsPage from "../pages/BikeDetailsPage/BikeDetailsPage"
import BikesPage from "../pages/BikesPage/BikesPage"
import NewBikePage from "../pages/NewBikePage/NewBikePage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<p>Inicio</p>}></Route>
            <Route path="/gallery" element={<BikesPage />}></Route>
            <Route path="/details/:bike_id" element={<BikeDetailsPage />}></Route>
            <Route path="/create" element={<NewBikePage />}></Route>
        </Routes>
    )
}

export default AppRoutes