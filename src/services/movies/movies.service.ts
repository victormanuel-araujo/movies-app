import { NativeModules, Platform } from 'react-native';

import { moviesApi } from '#services/api/movies.config';
import { Result } from '#services/api/movies.types';

import { UpcomingMoviesResponse } from './movies.types';

export function getMovies(): Result<UpcomingMoviesResponse> {
  const locale =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale
      : NativeModules.I18nManager.localeIdentifier;

  return async () => {
    const response = await moviesApi.get('movie/upcoming', { params: { locale } });

    if (response.status !== 200) {
      return Promise.reject(response.data);
    }

    return Promise.resolve(response.data);
  };
}
