import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const baseURL = 'http://192.168.42.208:3000';

const musicChatApi = axios.create({
  baseURL
});

musicChatApi.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const signup = async (email, password, name, phone, profilePic) => {
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
    const response = await musicChatApi.post('/auth/signup', form);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    if (error.response) {
      console.log(error.response.data);
      throw error.response.data;
    } else if (error.request) {
      console.log('Something happened wrong', error.request);
    } else {
      console.log('Error', error.message);
    }
    console.log('Error config', error.config);
  }
};

export const login = async (email, password) => {
  try {
    const response = await musicChatApi.post('/auth/login', { email, password });
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
    if (error.response) {
      console.log(error.response.data);
      throw error.response.data;
    } else if (error.request) {
      console.log('Something happened wrong', error.request);
    } else {
      console.log('Error', error.message);
    }
    console.log('Error config', error.config);
  }
};

export const saveToken = async (token) => {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (error) {
    throw error;
  }
};

export const deleteToken = async (token) => {
  try {
    await AsyncStorage.removeItem(token);
  } catch (error) {
    throw error;
  }
};
