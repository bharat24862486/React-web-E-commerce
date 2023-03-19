import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType"

export const login = (data) =>(dispatch) =>{
    dispatch({type:LOGIN_REQUEST})
    return axios.post("https://reqres.in/api/login",data).then((res)=>dispatch({type:LOGIN_SUCCESS,payload:res.data.token})).catch((err)=>dispatch({type:LOGIN_FAILURE}))
}