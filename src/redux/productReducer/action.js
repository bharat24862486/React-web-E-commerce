import axios from "axios"
import { ADD_TODO_FAILURE, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "./actionType"


const sendRequest = () =>{
    return {type:ADD_TODO_REQUEST}
}

const sendSuccess = (payload) =>{
    return {type:ADD_TODO_SUCCESS,payload}
}

const sendFailure = () =>{
    return {type:ADD_TODO_FAILURE}
}

const getRequest = () =>{
    return {type:GET_TODO_REQUEST}
}

const getSuccess = (payload) =>{
    return {type:GET_TODO_SUCCESS,payload}
}

const getFailure = () =>{
    return {type:GET_TODO_FAILURE}
}

export const getTodo =(obj) => (dispatch) =>{
    console.log('yeh params',obj)
    dispatch(getRequest())
    return axios.get(`http://localhost:8080/products`,obj).then((res)=>dispatch(getSuccess(res.data))).catch(()=>dispatch(getFailure()))
}

export const addTodo = (data) => (dispatch) =>{
    dispatch(getRequest())

    return axios.post(`http://localhost:8080/products`, data).then((res)=>console.log(res)).catch((err)=>console.log(err))
}

export const updateTodo = (data,id) => (dispatch) =>{
    dispatch(getRequest())
    return axios.patch(`http://localhost:8080/products/${id}`, data).then((res)=>console.log(res)).catch((err)=>console.log(err))
}