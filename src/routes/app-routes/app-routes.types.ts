export enum AppNamedRoutes {
  AUTH = 'auth',
  HOME = 'home',
}

export type AppRoutesParamsList = {
  [AppNamedRoutes.AUTH]: undefined;
  [AppNamedRoutes.HOME]: undefined;
};
