import { WatchProvidersAPI } from '.'

const makeSUT = () => {
  const filters = {
    language: {
      language: <const>'en-US',
    },
    watchProviders: {
      language: <const>'en-US',
      watch_region: <const>'US',
    },
  }

  const api = new WatchProvidersAPI({
    url: 'URL',
    apiKey: 'API_KEY',
  })

  api['get'] = jest.fn()

  return { api, filters }
}

describe('WatchProviders API', () => {
  test('availableRegions should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.availableRegions(filters.language)

    expect(api['get']).toHaveBeenCalledWith(
      '/watch/providers/regions?language=en-US&api_key=API_KEY'
    )
  })

  test('movieProviders should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.movieProviders(filters.watchProviders)

    expect(api['get']).toHaveBeenCalledWith(
      '/watch/providers/movie?language=en-US&watch_region=US&api_key=API_KEY'
    )
  })

  test('tvProviders should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.tvProviders(filters.watchProviders)

    expect(api['get']).toHaveBeenCalledWith(
      '/watch/providers/tv?language=en-US&watch_region=US&api_key=API_KEY'
    )
  })
})
