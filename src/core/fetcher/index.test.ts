import fetchMock, { enableFetchMocks } from 'jest-fetch-mock'
import { Fetcher } from '.'
import { TMDBResponseError } from '../../exceptions'

class MockFetcher extends Fetcher {
  get<T>(path: string): Promise<T> {
    return super.get(path)
  }
}

const makeSUT = () => {
  const fetcher = new MockFetcher('https://localhost', false)

  return { fetcher }
}

describe('Fetcher', () => {
  beforeEach(() => {
    fetchMock.mockClear()
    enableFetchMocks()
  })

  test('should throw error properly on request error', async () => {
    fetchMock.mockResponseOnce(() =>
      Promise.resolve({
        body: JSON.stringify({
          status_code: 401,
          status_message: 'Invalid APIKEY',
        }),
        init: {
          status: 401,
          statusText: 'Unauthorized',
        },
      })
    )

    const { fetcher } = makeSUT()

    expect.assertions(5)

    try {
      await fetcher.get('/PATH')
    } catch (e) {
      const error = e as TMDBResponseError
      expect(error).toBeInstanceOf(TMDBResponseError)
      expect(error.message).toEqual('Unauthorized')
      expect(error.statusCode).toEqual(401)
      expect(error.statusMessage).toEqual('Invalid APIKEY')
      expect(error.getResponse()).toEqual({
        status: 'Unauthorized',
        status_code: 401,
        status_message: 'Invalid APIKEY',
      })
    }
  })
})
