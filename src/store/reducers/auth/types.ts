export interface AuthState {
    isAuth: boolean
}

type Action<T, P> = { type: T, payload: P }

export enum Actions {
    SET_AUTH = "SET_AUTH"
}

export type setAuth = Action<Actions.SET_AUTH, boolean>

export type AuthAction = setAuth

// export enum AuthActionEnum {
//     SET_AUTH = "SET_AUTH"
// }
//
// export interface SetAuthAction {
//     type: AuthActionEnum.SET_AUTH;
//     payload: boolean;
// }
// export type AuthAction = setAuth