import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const baseURL = 'http://192.168.42.91:3000';

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

export default musicChatApi;
