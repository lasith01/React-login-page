import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL, 
    headers:{
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) =>{
        console.log('Request:', config);
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('Response Error:', error);
        return Promise.reject(error);
    }
);

export default axiosInstance;