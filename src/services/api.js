import axios from 'axios';

const api = axios.create({
  baseURL: 'https://portfolio-jardel-api.now.sh/',
  mode: 'no-cors',
  headers: {
    'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
  },
});

api.interceptors.request.use(
  async (config) => config,
  (err) => Promise.reject(err.response)
);

export default api;
