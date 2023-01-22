import { ErrorResponse, Result } from '#services/api/movies.types';

import React, { useCallback } from 'react';

export const useRequest = <T>(request: Result<T>) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [data, setData] = React.useState<null | undefined | T | ErrorResponse>(undefined);

  const makeRequest = useCallback(async () => {
    try {
      setLoading(true);
      const data = await request();
      setData(data);
    } catch (e) {
      setData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    makeRequest();
  }, []);

  return { data, loading, retry: makeRequest };
};
