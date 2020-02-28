import axios from 'axios';

const api = axios.create({
  baseURL: 'https://devradar-nodejs.herokuapp.com',
});

export default api;
