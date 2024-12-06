import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://bondhon-eight.vercel.app/api/v1', //base url
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000, //Optional: set a timeout
});

apiClient.interceptors.request.use(
  config => {
    // Get the token from local storage
    const token = localStorage.getItem('token') || null;

    // If token exists, add it to the headers
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    // Handle request errors
    return Promise.reject(error);
  }
);

export default apiClient;
