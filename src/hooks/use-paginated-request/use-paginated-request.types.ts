import { ErrorResponse } from '#services/api/movies.types';

export interface UsePaginatedRequestError extends ErrorResponse {
  page: number;
}

export enum PaginatedRequestLoading {
  OFF,
  ON,
  NEXT_ITEMS,
}
