import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'baseurl', //base url
  timeout: 10000, //Optional: set a timeout
});

apiClient.interceptors.request.use(
  config => {
    // Get the token from local storage
    const token = localStorage.getItem('token');

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
