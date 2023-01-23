import { HomeContainerArgs } from '@screens/home/home.types';

import { getMovies } from '#services/movies/movies.service';

import { usePaginatedRequest } from '&hooks/use-paginated-request';

export const HomeContainer = (props: ContainerProps<HomeContainerArgs>) => {
  const { data, loading, error, nextPage } = usePaginatedRequest(getMovies());

  return props.children({
    error,
    loading,
    movies: data || [],

    actions: {
      nextPage,
    },
  });
};
