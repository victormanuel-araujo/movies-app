import { ErrorResponse, Result } from '#services/api/movies.types';

import React, { useCallback } from 'react';

export const useRequest = <T>(request: Result<T>) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [data, setData] = React.useState<null | undefined | T>(undefined);
  const [error, setError] = React.useState<ErrorResponse>();

  const makeRequest = useCallback(async () => {
    try {
      setLoading(true);
      const data = await request();
      setData(data as T);
    } catch (e) {
      setError(e as ErrorResponse);
      setData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    makeRequest();
  }, []);

  return { data, loading, error, retry: makeRequest };
};
