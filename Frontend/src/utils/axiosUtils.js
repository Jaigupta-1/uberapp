import axios from 'axios';

const Axios = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your backend URL
  withCredentials: true, // Include cookies in requests
});

export default Axios;