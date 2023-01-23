import { NativeModules, Platform } from 'react-native';

import { moviesApi } from '#services/api/movies.config';
import { PaginatedResponse, Result } from '#services/api/movies.types';
import { MovieDetails, UpcomingMovie } from '#services/movies/movies.types';

const locale =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;

export function getMovies(): Result<PaginatedResponse<UpcomingMovie>> {
  return async (page = 1) => {
    const response = await moviesApi.get('movie/upcoming', { params: { locale, page } });

    if (response.status !== 200) {
      return Promise.reject(response.data);
    }

    return Promise.resolve(response.data);
  };
}

export function getMovieDetails(movieId: string): Result<MovieDetails> {
  return async () => {
    const response = await moviesApi.get(`movie/${movieId}`, { params: { locale } });

    if (response.status !== 200) {
      return Promise.reject(response.data);
    }

    return Promise.resolve(response.data);
  };
}
