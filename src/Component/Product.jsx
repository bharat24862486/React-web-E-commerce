import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import ProductCard from "./ProductCard"
import { getTodo } from "../redux/productReducer/action"
import { useLocation, useSearchParams } from "react-router-dom"


function Product() {
    // console.log('hello')

    const [searchParam] = useSearchParams()
    const location = useLocation()

    // console.log(location)

    console.log(searchParam.get('order'))

    const store = useSelector((data) => data.productReducer)
    const dispatch = useDispatch()

    // console.log(store)
   

    useEffect(() => {
        let obj ={
            params : {
                category : searchParam.getAll('gender'),
                _sort: searchParam.get("order") && "price",
                _order: searchParam.get("order")
            }
        }

        dispatch(getTodo(obj))
    }, [location.search])

    return (
        <div>
            <h1 style={{fontSize:"50px"}}>Products</h1>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)", gap:"20px"}}>
                {store.products.map((el) => {
                    return <ProductCard image={el.image} title={el.name} price={el.price} brand={el.brand} category={el.category} key={el.id} ID={el.id}/>
                })}
            </div>
        </div>

    )

}

export default Product