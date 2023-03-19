import { Route, Routes } from "react-router-dom"
import Admin from "./Admin"
import Edit from "./Edit"
import Home from "./Home"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"

function AllRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
            <Route path="/:id" element={<PrivateRoute><Edit /></PrivateRoute>}/>
            <Route path="*" element={<h1>404 Page not found</h1>} />
        </Routes>
    )

}

export default AllRoutes