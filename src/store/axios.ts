import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.test-webest.ru/', // Замените на ваш API URL
  withCredentials: false, // Это зависит от вашего API
});

export default apiClient;
