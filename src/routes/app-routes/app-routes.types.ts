export enum AppNamedRoutes {
  HOME = 'home',
  MOVIE_DETAILS = 'movie-details',
}

export type AppRoutesParamsList = {
  [AppNamedRoutes.HOME]: undefined;
  [AppNamedRoutes.MOVIE_DETAILS]: undefined;
};
