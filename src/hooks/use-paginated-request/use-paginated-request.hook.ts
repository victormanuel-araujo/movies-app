import { PaginatedResponse, Result } from '#services/api/movies.types';

import {
  PaginatedRequestLoading,
  UsePaginatedRequestError,
} from '&hooks/use-paginated-request/use-paginated-request.types';
import React, { useCallback, useRef } from 'react';

export const usePaginatedRequest = <T>(request: Result<PaginatedResponse<T>>) => {
  const [loading, setLoading] = React.useState<PaginatedRequestLoading>(PaginatedRequestLoading.ON);
  const [data, setData] = React.useState<null | undefined | T[]>(undefined);
  const [error, setError] = React.useState<UsePaginatedRequestError>();

  const pageRef = useRef(1);

  const makeRequest = useCallback(async (page: number = pageRef.current) => {
    if (pageRef.current !== page) pageRef.current = page;

    try {
      setLoading(PaginatedRequestLoading.ON);
      const data = (await request(pageRef.current)) as PaginatedResponse<T>;

      pageRef.current += 1;
      setData(data.results as T[]);
    } catch (e) {
      setError({ ...(e || {}), page: pageRef.current } as UsePaginatedRequestError);
      setData(null);
    } finally {
      setLoading(PaginatedRequestLoading.OFF);
    }
  }, []);

  const nextPage = async () => {
    if (loading === PaginatedRequestLoading.NEXT_ITEMS) return;

    try {
      setLoading(PaginatedRequestLoading.NEXT_ITEMS);
      const data = (await request(pageRef.current)) as PaginatedResponse<T>;
      pageRef.current += 1;

      setData(prevState => [...(prevState || []), ...data.results]);
    } catch (e) {
      setError({ ...(e || {}), page: pageRef.current } as UsePaginatedRequestError);
    } finally {
      setLoading(PaginatedRequestLoading.OFF);
    }
  };

  React.useEffect(() => {
    makeRequest(1);
  }, []);

  return {
    data,
    loading,
    error,
    nextPage,
    currentPage: pageRef.current,
    restart: () => makeRequest(1),
  };
};
