import { TMDB_ACCESS_KEY } from '@env';

import axios from 'axios';

export const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: { Authorization: TMDB_ACCESS_KEY },
});
