import {IUser} from "../../../models/IUser";

export interface AuthState {
    isAuth: boolean;
    user: IUser;
    isLoading: boolean;
    error: string;
}

type Action<T, P> = { type: T, payload: P }

export enum Actions {
    SET_AUTH = "SET_AUTH",
    SET_ERROR = "SET_ERROR",
    SET_USER = "SET_USER",
    SET_IS_LOADING = "SET_IS_LOADING",
}

export type SetAuthAction = Action<Actions.SET_AUTH, boolean>
export type SetErrorAction = Action<Actions.SET_ERROR, string>
export type SetUserAction = Action<Actions.SET_USER, IUser>
export type SetIsLoadingAction = Action<Actions.SET_IS_LOADING, boolean>

export type AuthAction =
    SetAuthAction |
    SetErrorAction |
    SetUserAction |
    SetIsLoadingAction

// export enum AuthActionEnum {
//     SET_AUTH = "SET_AUTH"
// }
//
// export interface SetAuthAction {
//     type: AuthActionEnum.SET_AUTH;
//     payload: boolean;
// }
// export type AuthAction = setAuth