import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://10.0.0.19:3333',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});