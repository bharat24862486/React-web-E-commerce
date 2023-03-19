import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, getTodo } from "../redux/productReducer/action"
import "./Admin.css"
import Navbar from "./Navbar"


const initState = {
    image: '',
    name: '',
    price: 0,
    brand: '',
    category: ''


}





function Admin() {
    const [state, setState] = useState(initState)
    const dispatch = useDispatch()
    const store = useSelector((data)=>data.productReducer)

    // console.log(store,'Admin')

    function handleChange(e) {
        const { value, name } = e.target
        setState({...state,[name]:value})
        // console.log(value, name);
    }

    function Submit(e){
        e.preventDefault()
        // console.log(state);
        dispatch(addTodo(state)).then((res)=>dispatch(getTodo))
        setState(initState)
    }

    return (

        <div>
            <Navbar />
            <h1 style={{fontSize:"50px"}}>Add products from here</h1>

            <form>
                <input type="text" name="image" placeholder="Image Url" value={state.image} onChange={(e) => handleChange(e)} />
                <input type="text" name="name" placeholder="Tittle" value={state.name} onChange={(e) => handleChange(e)} />
                <input type="number" name="price" placeholder="Price" value={state.price} onChange={(e) => handleChange(e)} />
                <input type="text" name="brand" placeholder="Brand" value={state.brand} onChange={(e) => handleChange(e)} />
                <select name="category" value={state.category} onChange={(e) => handleChange(e)}>
                    <option value="">Select</option>
                    <option value="Man">Men</option>
                    <option value="Women">Women</option>
                    <option value="Kids">Kids</option>
                </select>

                <button type="submit" style={{backgroundColor:"rgb(92, 194, 92)", color:"white"}} onClick={(e)=>Submit(e)}>Submit</button>

            </form>
        </div>

    )
}




export default Admin