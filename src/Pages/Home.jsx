
import Product from "../Component/Product"
import SideNavbar from "../Component/SideNavbar"
import Navbar from "./Navbar"



function Home() {

    return (

        <div>
            <Navbar />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ width: "20%", marginTop: "100px", borderRight: "1px solid grey" }}><SideNavbar /></div>
                <div style={{ width: "80%" }}> <Product /></div>
            </div>
        </div>
    )

}

export default Home