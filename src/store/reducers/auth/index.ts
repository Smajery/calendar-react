import {AuthState, AuthAction, Actions} from "./types";
import {IUser} from "../../../models/IUser";

const initialState: AuthState = {
    isAuth: false,
    user: {} as IUser,
    error: '',
    isLoading: false
}

export default function authReducer(state = initialState, action: AuthAction): AuthState {
    switch (action.type) {
        case Actions.SET_AUTH:
            return {...state, isAuth: action.payload, isLoading: false}
        case Actions.SET_USER:
            return {...state, user: action.payload}
        case Actions.SET_ERROR:
            return {...state, error: action.payload, isLoading: false}
        case Actions.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        default:
            return state
    }
}