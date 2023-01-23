import { useWindowDimensions } from 'react-native';

import { TMDB_IMAGE_PATH } from '@env';
import { RouteProp, useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { MovieDetailsContainerArgs } from '@screens/movie-details/movie-details.types';

import { getMovieDetails } from '#services/movies/movies.service';

import { useRequest } from '&hooks/use-request';
import {
  AppNamedRoutes,
  AppRoutesNavigationProp,
  AppRoutesParamsList,
} from '$routes/app-routes/app-routes.types';
import { useCallback, useMemo } from 'react';

export const MovieDetailsContainer = (props: ContainerProps<MovieDetailsContainerArgs>) => {
  const navigation = useNavigation<AppRoutesNavigationProp>();
  const { width } = useWindowDimensions();
  const routeParams = useRoute<RouteProp<AppRoutesParamsList, AppNamedRoutes.MOVIE_DETAILS>>();

  const { data: movie, loading } = useRequest(getMovieDetails(routeParams.params.movieId));

  const backdropImage = useMemo(() => {
    if (loading) return null;

    const backdropWidth = width - (width % 100) + 100;
    return `${TMDB_IMAGE_PATH}w${backdropWidth}${movie?.backdrop_path}`;
  }, [loading]);

  useFocusEffect(
    useCallback(() => {
      navigation.setOptions({ title: routeParams.params.title });
    }, []),
  );

  return props.children({ movie, backdropImage, loading });
};
