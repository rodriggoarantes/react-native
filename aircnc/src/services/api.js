import axios from 'axios';

const api = axios.create({
  baseURL: 'https://us-central1-aircnc-server.cloudfunctions.net/api',
});

export default api;
