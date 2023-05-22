import { Route, Routes } from "react-router-dom"
import BikesListPage from "../pages/BikesPage/BikesPage"
import BikeDetailsPage from "../pages/BikeDetailsPage/BikeDetailsPage"
import BikesPage from "../pages/BikesPage/BikesPage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<p>Inicio</p>}></Route>
            <Route path="/gallery" element={<BikesPage />}></Route>
            <Route path="/details/:bike_id" element={<BikeDetailsPage />}></Route>
        </Routes>
    )
}

export default AppRoutes