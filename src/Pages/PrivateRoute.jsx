import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"

function PrivateRoute({ children }) {
    const location = useLocation()
    console.log(location)

    const store = useSelector((data) => data.loginReducer)

    if (!store.isAuth) {
        return <Navigate to={"/login"} state={location.pathname} replace/>
    }

    return children

}

export default PrivateRoute