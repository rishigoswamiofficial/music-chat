import { AUTH } from '../Constants';

export const authFormInput = ({ prop, value }) => ({
  type: AUTH.AUTH_FORM_INPUT,
  payload: { prop, value }
});

export const signupRequest = (email, password, name, phone, profilePic) => ({
  type: AUTH.SIGNUP_REQUEST,
  payload: { email, password, name, phone, profilePic }
});

export const loginRequest = (email, password) => ({
  type: AUTH.LOGIN_REQUEST,
  payload: { email, password }
});

export const logout = () => ({
  type: AUTH.LOGOUT
});

export const clearErrorMessage = () => ({
  type: AUTH.CLEAR_ERROR_MESSAGE
});

export const clearAuthForm = () => ({
  type: AUTH.CLEAR_AUTH_FORM
});
