import {Actions, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction} from "./types";
import {IUser} from "../../../models/IUser";
import {AppDispatch} from "../../index";
import axios from "axios";

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({type: Actions.SET_USER, payload: user}),
    setIsAuth: (isAuth: boolean): SetAuthAction => ({type: Actions.SET_AUTH, payload: isAuth}),
    setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({type: Actions.SET_IS_LOADING, payload: isLoading}),
    setError: (error: string): SetErrorAction => ({type: Actions.SET_ERROR, payload: error}),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true))
            const response = await axios.get<IUser[]>('./tsconfig.json')
            const mockUsers = response.data.find(user => user.username === username && user.password === password)
            if(mockUsers){
                localStorage.setItem('auth', 'true')
                localStorage.setItem('username', mockUsers.username)
                dispatch(AuthActionCreators.setIsAuth(true))
                dispatch(AuthActionCreators.setUser(mockUsers))
            } else {
                dispatch(AuthActionCreators.setError('Некорректный логин или пароль'))
            }
            dispatch(AuthActionCreators.setIsLoading(false))
        } catch (e) {
            dispatch(AuthActionCreators.setError('Произошла ошибка при логине'))
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        try {
            
        } catch (e) {
            
        }
    }
}