import axios from "axios";

const API_KEY = "a31608613c0c3a13af9b4967367dc110";
const baseUrl = "https://api.themoviedb.org/3/";

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;
