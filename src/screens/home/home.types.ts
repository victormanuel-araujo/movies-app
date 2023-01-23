import { ErrorResponse } from '#services/api/movies.types';
import { UpcomingMovie } from '#services/movies/movies.types';

import { PaginatedRequestLoading } from '&hooks/use-paginated-request/use-paginated-request.types';

export interface HomeScreenProps {}

export type HomeScreenNavigationProps = undefined;

export interface HomeContainerArgs {
  loading: PaginatedRequestLoading;
  movies?: UpcomingMovie[];
  error?: ErrorResponse;

  actions: {
    nextPage(): Promise<void>;
  };
}
