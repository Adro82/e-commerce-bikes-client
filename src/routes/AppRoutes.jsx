import { Route, Routes } from "react-router-dom"
import BikesPage from "../pages/BikesPage/BikesPage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<p>Inicio</p>}></Route>
            <Route path="/gallery" element={<BikesPage />}></Route>
        </Routes>
    )
}

export default AppRoutes