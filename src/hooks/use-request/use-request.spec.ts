import { renderHook } from '@testing-library/react-hooks';
import { act } from '@testing-library/react-native';

import { useRequest } from './use-request.hook';

import axios from 'axios';
import nock from 'nock';

describe('useRequest hook', () => {
  it('should correctly call the request', async () => {
    nock('https://moviesapp.com').get('/fetch').reply(200, { success: true });

    const hookRendered = renderHook(() =>
      useRequest(async () => axios.get('https://moviesapp.com/fetch').then(res => res.data)),
    );

    expect(hookRendered.result.current.loading).toBe(true);
    expect(hookRendered.result.current.data).toBe(undefined);

    await hookRendered.waitForNextUpdate();

    expect(hookRendered.result.current.data).toMatchObject({ success: true });
    expect(hookRendered.result.current.loading).toBe(false);
  });

  it('should correctly handle an error', async () => {
    nock('https://moviesapp.com').get('/error').reply(401, { success: false });

    const hookRendered = renderHook(() =>
      useRequest(async () => axios.get('https://moviesapp.com/error').then(res => res.data)),
    );

    expect(hookRendered.result.current.loading).toBe(true);
    expect(hookRendered.result.current.data).toBe(undefined);

    await hookRendered.waitForNextUpdate();

    expect(hookRendered.result.current.data).toBe(null);
    expect(hookRendered.result.current.loading).toBe(false);
  });

  it('should be able to call the request again', async () => {
    nock('https://moviesapp.com').get('/twice').delay(800).reply(401, { success: false });

    const hookRendered = renderHook(() =>
      useRequest(async () => axios.get('https://moviesapp.com/twice').then(res => res.data)),
    );

    const retry = jest.fn(hookRendered.result.current.retry);

    expect(hookRendered.result.current.loading).toBe(true);
    expect(hookRendered.result.current.data).toBe(undefined);

    await hookRendered.waitForNextUpdate();

    expect(hookRendered.result.current.data).toBe(null);
    expect(hookRendered.result.current.loading).toBe(false);

    await retry();
    expect(retry).toBeCalledTimes(1);
  });
});
