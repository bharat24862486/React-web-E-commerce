import { useEffect, useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { updateTodo } from "../redux/productReducer/action"
import Navbar from "./Navbar"


const initState = {
    image: '',
    name: '',
    price: 0,
    brand: '',
    category: ''


}

function Edit() {

    const store = useSelector((data)=>data.productReducer.products)
    const [state, setState] = useState(initState)
    const val = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log(store)
    let ID = +val.id
    console.log(ID)

    function handleChange(e){
        let {name,value} = e.target
        if(name == "price"){
            value = +value
        }
        setState({...state,[name]:value})
    }

    function Submit(e){
        e.preventDefault()
        // console.log(state)
        delete state.id
        console.log(state)
        dispatch(updateTodo(state,ID)).then(()=>navigate("/"))

    }

    useEffect(()=>{
        const Data = store.find((el)=>el.id === ID)
        setState(Data)
    },[])



    console.log(state)

    return (
        <div>
            <Navbar />
            <h1>Edit Your Product</h1>
            <form>
                <input type="text" name="image" value={state.image} onChange={handleChange} placeholder="Image Url"  />
                <input type="text" name="name" value={state.name} onChange={handleChange} placeholder="Tittle"  />
                <input type="number" name="price" value={state.price} onChange={handleChange} placeholder="Price"  />
                <input type="text" name="brand" value={state.brand} onChange={handleChange} placeholder="Brand"  />
                <select name="category" value={state.category} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="Man">Men</option>
                    <option value="Women">Women</option>
                    <option value="Kids">Kids</option>
                </select>

                <button type="submit" style={{ backgroundColor: "rgb(92, 194, 92)", color: "white" }} onClick={Submit} >Edit</button>

            </form>

        </div>
    )

}

export default Edit