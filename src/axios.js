import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://tuservidor.com/api',  // Asegúrate de que esta URL sea la correcta
});

export default instance;