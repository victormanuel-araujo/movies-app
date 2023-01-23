import {renderHook} from '@testing-library/react-hooks';
import {act} from '@testing-library/react-native';

import {usePaginatedRequest} from './use-paginated-request.hook';

import {PaginatedRequestLoading} from '&hooks/use-paginated-request/use-paginated-request.types';
import axios from 'axios';
import nock from 'nock';

const paginatedSuccessResponse = {results: [{success: true}]};

describe('usePaginatedRequest hook', () => {

  it('should correctly call the request', async () => {
    nock('https://moviesapp.com')
      .get('/fetch')
      .query({page: 1})
      .reply(200, paginatedSuccessResponse);

    const hookRendered = renderHook(() =>
      usePaginatedRequest(async (page: number) =>
        axios.get(`https://moviesapp.com/fetch?page=${page}`).then(res => res.data),
      ),
    );

    expect(hookRendered.result.current.loading).toBe(PaginatedRequestLoading.ON);
    expect(hookRendered.result.current.data).toBe(undefined);

    await act(async () => {
      await hookRendered.waitForNextUpdate();

      expect(hookRendered.result.current.data).toMatchObject(paginatedSuccessResponse.results);
      expect(hookRendered.result.current.loading).toBe(PaginatedRequestLoading.OFF);
    });
  });

  it('should correctly handle an error', async () => {
    nock('https://moviesapp.com').get('/list').query({page: 1}).reply(401, {success: false});

    const hookRendered = renderHook(() =>
      usePaginatedRequest(async (page: number) =>
        axios.get(`https://moviesapp.com/list?page=${page}`).then(res => res.data),
      ),
    );

    expect(hookRendered.result.current.loading).toBe(PaginatedRequestLoading.ON);
    expect(hookRendered.result.current.data).toBe(undefined);

    await act(async () => {
      await hookRendered.waitForNextUpdate();

      expect(hookRendered.result.current.data).toBe(null);
      expect(hookRendered.result.current.loading).toBe(PaginatedRequestLoading.OFF);
    });
  });

  it('should be able to restart the pagination', async () => {
    nock('https://moviesapp.com')
      .get('/restart')
      .query(true)
      .reply(200, paginatedSuccessResponse)
      .persist(true);

    const hookRendered = renderHook(() =>
      usePaginatedRequest(async (page: number) =>
        axios.get(`https://moviesapp.com/restart?page=${page}`).then(res => res.data),
      ),
    );

    const restart = jest.fn(hookRendered.result.current.restart);

    expect(hookRendered.result.current.loading).toBe(PaginatedRequestLoading.ON);
    expect(hookRendered.result.current.data).toBe(undefined);

    await act(async () => {
      await hookRendered.waitForNextUpdate();

      expect(hookRendered.result.current.data).toMatchObject(paginatedSuccessResponse.results);
      expect(hookRendered.result.current.loading).toBe(PaginatedRequestLoading.OFF);
      expect(hookRendered.result.current.currentPage).toBe(2);
    });

    act(() => {
      hookRendered.result.current.restart();
    });

    await act(async () => {
      await hookRendered.waitForNextUpdate();
      expect(hookRendered.result.current.currentPage).toBe(2);
      expect(hookRendered.result.current.data).toMatchObject(paginatedSuccessResponse.results);
    });
  });

  it('should be able to request next page', async () => {
    nock('https://moviesapp.com')
      .get('/list')
      .query(true)
      .reply(200, paginatedSuccessResponse)
      .persist(true);

    const hookRendered = renderHook(() =>
      usePaginatedRequest(async (page: number) =>
        axios.get(`https://moviesapp.com/list?page=${page}`).then(res => res.data),
      ),
    );

    expect(hookRendered.result.current.loading).toBe(PaginatedRequestLoading.ON);
    expect(hookRendered.result.current.data).toBe(undefined);

    await act(async () => {
      await hookRendered.waitForNextUpdate();

      expect(hookRendered.result.current.data).toMatchObject(paginatedSuccessResponse.results);
      expect(hookRendered.result.current.loading).toBe(PaginatedRequestLoading.OFF);
      expect(hookRendered.result.current.currentPage).toBe(2);
    });

    act(() => {
      hookRendered.result.current.nextPage();
    });

    await act(async () => {
      await hookRendered.waitForNextUpdate();
      expect(hookRendered.result.current.currentPage).toBe(3);
      expect(hookRendered.result.current.data).toMatchObject([
        ...paginatedSuccessResponse.results,
        ...paginatedSuccessResponse.results,
      ]);
    });
  });

  it('should be able to keep value on next page call error', async () => {
    nock('https://moviesapp.com')
      .get('/next-error')
      .query({page: 1})
      .reply(200, paginatedSuccessResponse)
      .persist(true);

    nock('https://moviesapp.com')
      .get('/next-error')
      .query({page: 2})
      .reply(400, {success: false})
      .persist(true);

    const hookRendered = renderHook(() =>
      usePaginatedRequest(async (page: number) =>
        axios.get(`https://moviesapp.com/next-error?page=${page}`).then(res => res.data),
      ),
    );

    expect(hookRendered.result.current.loading).toBe(PaginatedRequestLoading.ON);
    expect(hookRendered.result.current.data).toBe(undefined);

    await act(async () => {
      await hookRendered.waitForNextUpdate();

      expect(hookRendered.result.current.data).toMatchObject(paginatedSuccessResponse.results);
      expect(hookRendered.result.current.loading).toBe(PaginatedRequestLoading.OFF);
      expect(hookRendered.result.current.currentPage).toBe(2);
    });

    act(() => {
      hookRendered.result.current.nextPage();
    });

    await act(async () => {
      await hookRendered.waitForNextUpdate();
      expect(hookRendered.result.current.currentPage).toBe(2);
      expect(hookRendered.result.current.data).toMatchObject(paginatedSuccessResponse.results);
      expect(hookRendered.result.current.error).toMatchObject({page: 2});
    });
  });
});
