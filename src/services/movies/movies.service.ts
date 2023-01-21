import { NativeModules, Platform } from 'react-native';

import { moviesApi } from '#services/api/movies.config';
import { ErrorResponse } from '#services/api/movies.types';

import { UpcomingMoviesResponse } from './movies.types';

export async function getMovies(): Promise<ErrorResponse | UpcomingMoviesResponse> {
  const locale =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale
      : NativeModules.I18nManager.localeIdentifier;

  const response = await moviesApi.get('movie/upcoming', { params: { locale } });

  if (response.status !== 200) {
    return Promise.reject(response.data);
  }

  return Promise.resolve(response.data);
}
