import { SET_CREATE_USER_REQUEST, SET_CREATE_USER_SUCCESS, SET_CREATE_USER_FAILED } from "../actionTypes";
import { CreateUserRequest, CreateUserSuccess, CreateUserSuccessPayload, CreateUserFailed, CreateUserFailedPayload } from "../types/auth";

export const createUserRequest = (): CreateUserRequest => ({
    type: SET_CREATE_USER_REQUEST
})

export const createUserSuccess = (payload: CreateUserSuccessPayload): CreateUserSuccess => ({
    type: SET_CREATE_USER_SUCCESS,
    payload
})

export const createUserFailed = (payload: CreateUserFailedPayload): CreateUserFailed => ({
    type: SET_CREATE_USER_FAILED,
    payload
})