import {IUser} from "../../../models/IUser";

export interface AuthState {
    isAuth: boolean;
    user: IUser;
    isLoading: boolean;
    error: string;
}

type Action<T, P> = { type: T, payload: P }

export enum AuthActions {
    SET_AUTH = "SET_AUTH",
    SET_ERROR = "SET_ERROR",
    SET_USER = "SET_USER",
    SET_IS_LOADING = "SET_IS_LOADING",
}

export type SetAuthAction = Action<AuthActions.SET_AUTH, boolean>
export type SetErrorAction = Action<AuthActions.SET_ERROR, string>
export type SetUserAction = Action<AuthActions.SET_USER, IUser>
export type SetIsLoadingAction = Action<AuthActions.SET_IS_LOADING, boolean>

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