import AsyncStorage from '@react-native-community/async-storage';
import MusicChatApi from '../Api/musicChatApi';

import { AUTH } from '../Constants';

export const authFormInput = ({ prop, value }) => ({
  type: AUTH.AUTH_FORM_INPUT,
  payload: { prop, value }
});

export const signup = (email, password, name, phone, profilePic) => async (dispatch) => {
  try {
    const form = new FormData();

    const splitImagePath = profilePic.split('.');
    const imageExt = splitImagePath[splitImagePath.length - 1];

    form.append('email', email);
    form.append('password', password);
    form.append('name', name);
    form.append('phone', phone);
    form.append('profilePic', {
      type: `image/${imageExt}`,
      uri: profilePic,
      name: `${name}-${profilePic}`
    });
    const response = await MusicChatApi.post('/auth/signup', form);
    const data = response.data;
    const token = data.token;
    await AsyncStorage.setItem('token', token);
    dispatch({ type: AUTH.AUTH_SUCCESS });
  } catch (error) {
    console.log(error);
    if (error.response) {
      console.log(error.response.data);
      const err = error.response.data.message;
      dispatch({ type: AUTH.AUTH_ERROR, payload: err });
    } else if (error.request) {
      console.log('Something happened wrong', error.request);
    } else {
      console.log('Error', error.message);
    }
    console.log('Error config', error.config);
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await MusicChatApi.post('/auth/login', { email, password });
    const data = response.data;
    const token = data.token;
    await AsyncStorage.setItem('token', token);
    dispatch({ type: AUTH.AUTH_SUCCESS });
  } catch (error) {
    console.log(error);
    if (error.response) {
      console.log(error.response.data);
      const err = error.response.data.message;
      dispatch({ type: AUTH.AUTH_ERROR, payload: err });
    } else if (error.request) {
      console.log('Something happened wrong', error.request);
    } else {
      console.log('Error', error.message);
    }
    console.log('Error config', error.config);
  }
};

export const logout = () => async (dispatch) => {
  try {
    await AsyncStorage.removeItem('token');
    dispatch({ type: AUTH.LOGOUT });
  } catch (error) {
    console.log(error);
  }
};

export const clearErrorMessage = () => ({
  type: AUTH.CLEAR_ERROR_MESSAGE
});

export const clearAuthForm = () => ({
  type: AUTH.CLEAR_AUTH_FORM
});

export const isLoading = () => ({
  type: AUTH.LOADING
});
