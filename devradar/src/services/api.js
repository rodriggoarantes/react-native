import axios from 'axios';
import { API_PROTOCOL, API_HOST, API_PORT } from 'react-native-dotenv';

const api = axios.create({
  baseURL: `${API_PROTOCOL}://${API_HOST}:${API_PORT}`,
});

export default api;
