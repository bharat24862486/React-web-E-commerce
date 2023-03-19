import { ADD_TODO_FAILURE, GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "./actionType"

const initValue = {
    products: [],
    isError: false,
    isLoading: false
}

export const reducer = (state = initValue, { type, payload }) => {
    switch (type) {
        case GET_TODO_REQUEST:
            return { ...state, isLoading: true }
        case GET_TODO_SUCCESS:
            return { ...state, isLoading: false, products: payload }
        case GET_TODO_FAILURE:
            return { ...state, isLoading: false, isError: true }
        default:
            return state
    }
}