import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MovieDetailsNavigationParams } from '@screens/movie-details/movie-details.types';

export enum AppNamedRoutes {
  HOME = 'home',
  MOVIE_DETAILS = 'movie-details',
}

export type AppRoutesParamsList = {
  [AppNamedRoutes.HOME]: undefined;
  [AppNamedRoutes.MOVIE_DETAILS]: MovieDetailsNavigationParams;
};

export type AppRoutesNavigationProp = NativeStackNavigationProp<AppRoutesParamsList>;
