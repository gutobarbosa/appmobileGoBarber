import axios from 'axios';
// ip do emulador do android studio 10.0.2.2
const api = axios.create({
  baseURL: 'http://localhost:10.0.2.2',
});
export default api;
