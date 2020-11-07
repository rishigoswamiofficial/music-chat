import { call, put, take, all } from 'redux-saga/effects';

import * as MusicChatApi from '../Api/musicChatApi';
import { AUTH } from '../Constants';

function* signup(email, password, name, phone, profilePic) {
  try {
    const { token } = yield call(MusicChatApi.signup, email, password, name, phone, profilePic);
    yield call(MusicChatApi.saveToken, token);
    yield put({ type: AUTH.AUTH_SUCCESS });
    return token;
  } catch (err) {
    yield put({ type: AUTH.AUTH_ERROR, payload: err.message });
  }
}

function* signupFlow() {
  while (true) {
    const { payload } = yield take(AUTH.SIGNUP_REQUEST);
    const { email, password, name, phone, profilePic } = payload;
    const token = yield call(signup, email, password, name, phone, profilePic);
    if (token) {
      yield take(AUTH.LOGOUT);
      yield call(MusicChatApi.deleteToken, 'token');
    }
  }
}

function* login(email, password) {
  try {
    const { token } = yield call(MusicChatApi.login, email, password);
    yield call(MusicChatApi.saveToken, token);
    yield put({ type: AUTH.AUTH_SUCCESS });
    return token;
  } catch (error) {
    yield put({ type: AUTH.AUTH_ERROR, payload: error.message });
  }
}

function* loginFlow() {
  const { payload } = yield take(AUTH.LOGIN_REQUEST);
  const { email, password } = payload;
  const token = yield call(login, email, password);
  if (token) {
    yield take(AUTH.LOGOUT);
    yield call(MusicChatApi.deleteToken, 'token');
  }
}

export default function* authorize() {
  yield all([signupFlow(), loginFlow()]);
}
