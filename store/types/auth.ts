import { SET_CREATE_USER_REQUEST, SET_CREATE_USER_SUCCESS, SET_CREATE_USER_FAILED } from "../actionTypes";

export interface IAuth {
    token: string
}


export interface AuthState {
    pending: boolean;
    user: IAuth[];
    error: string | null;
}

export interface CreateUserSuccessPayload {
    user: IAuth[];
}

export interface CreateUserFailedPayload {
    error: string;
}

export interface CreateUserRequest {
    type: typeof SET_CREATE_USER_REQUEST;
}

export type CreateUserSuccess = {
    type: typeof SET_CREATE_USER_SUCCESS;
    payload: CreateUserSuccessPayload;
};

export type CreateUserFailed = {
    type: typeof SET_CREATE_USER_FAILED;
    payload: CreateUserFailedPayload;
};

export type AuthActions =
    | CreateUserRequest
    | CreateUserSuccess
    | CreateUserFailed;
