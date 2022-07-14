import axios from 'axios';

const API_KEY = 'df7934f249ad19ef751a3c7ae05883e7';
const baseUrl = 'https://api.themoviedb.org/3/';

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;
