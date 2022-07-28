import { SET_CREATE_USER_FAILED, SET_CREATE_USER_SUCCESS, SET_CREATE_USER_REQUEST } from "../actionTypes";
import { AuthActions, AuthState } from "../types/auth"

const initialState: AuthState = {
    pending: false,
    user: [],
    error: null
}

const authReducer = (state = initialState, action: AuthActions) => {
    switch (action.type) {
        case SET_CREATE_USER_REQUEST:
            return {
                ...state,
                pending: true
            }
        case SET_CREATE_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                pending: false
            }
        case SET_CREATE_USER_FAILED:
            return {
                ...state,
                error: action.payload.error,
                pending: false
            }
        default:
            return {
                ...state
            }
    }
}

export default authReducer