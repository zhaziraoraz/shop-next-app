import axios from "axios";
import { call, put, all, takeLatest } from "redux-saga/effects";
import { IAuth } from "../types/auth";
import { SET_CREATE_USER_REQUEST } from "../actionTypes";
import { createUserFailed, createUserSuccess } from "../actions/authAction";

const createUser = async (payload: { email: string, password: string }) => {
    await axios.post<IAuth>("http://localhost:3001/api/v0/signup", { ...payload })
}

function* createUserSaga(action: any) {
    try {
        const response: { user: any } = yield call(createUser, { email: action.payload.email, password: action.payload.password })
        yield put(createUserSuccess({ user: response.data }))
    }
    catch (error: any) {
        yield put(createUserFailed(error.message))
    }
}

function* authSaga() {
    yield all([takeLatest(SET_CREATE_USER_REQUEST, createUserSaga)])
}

export default authSaga
