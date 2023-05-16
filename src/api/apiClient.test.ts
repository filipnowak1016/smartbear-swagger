import { get } from './apiClient';

describe('get', () => {
  global.fetch = jest.fn();
  const fetchMock = fetch as jest.Mock;

  const TEST_URL = 'http://test.url';

  beforeEach(() => {
    fetchMock.mockReset();
  });

  it('should get data if fetch status is ok', async () => {
    // given
    const responseData = { test: 'data' };
    fetchMock.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(responseData),
    });

    // when
    const result = await get(TEST_URL);

    // then
    expect(fetchMock).toHaveBeenCalledWith(TEST_URL, { method: 'GET' });
    expect(result).toEqual(responseData);
  });

  it('should throw error if fetch status is not ok', async () => {
    // given
    fetchMock.mockResolvedValueOnce({
      ok: false,
      status: 500,
      statusText: 'Internal server error',
    });

    // when & then
    await expect(get(TEST_URL)).rejects.toThrow('Internal server error (500)');
    expect(fetchMock).toHaveBeenCalledWith(TEST_URL, { method: 'GET' });
  });
});
