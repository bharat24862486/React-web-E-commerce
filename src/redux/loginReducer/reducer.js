import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType"

const initValue = {
    isAuth: false,
    token: "",
    isError: false,
    isLoading: false
}

export const reducer = (state = initValue, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST:
            return { ...state, isLoading: true }
        case LOGIN_SUCCESS:
            return { ...state, isLoading: false, isAuth: true, token: payload }
        case LOGIN_FAILURE:
            return { ...state, isLoading: false, isError: true }
        default:
            return state
    }
}
