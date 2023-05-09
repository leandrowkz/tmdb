import { SearchAPI } from '.'

const makeSUT = () => {
  const filters = {
    search: {
      query: 'LOOK FOR SOMETHING ON DB',
      page: 101,
    },
    collections: {
      query: 'LOOK FOR SOMETHING ON DB',
      page: 101,
      language: <const>'en-US',
    },
    movies: {
      query: 'LOOK FOR SOMETHING ON DB',
      page: 101,
      language: <const>'en-US',
      include_adult: true,
      region: <const>'US',
      year: 2020,
      primary_release_year: 2000,
    },
    multi: {
      query: 'LOOK FOR SOMETHING ON DB',
      page: 101,
      language: <const>'en-US',
      include_adult: true,
      region: <const>'US',
    },
    people: {
      query: 'LOOK FOR SOMETHING ON DB',
      page: 101,
      language: <const>'en-US',
      include_adult: true,
      region: <const>'US',
    },
    tvShows: {
      query: 'LOOK FOR SOMETHING ON DB',
      page: 101,
      language: <const>'en-US',
      include_adult: true,
      first_air_date_year: 2000,
    },
  }

  const api = new SearchAPI({
    url: 'URL',
    apiKey: 'API_KEY',
  })

  api['get'] = jest.fn()

  return { api, filters }
}

describe('Search API', () => {
  test('companies should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.companies(filters.search)

    expect(api['get']).toHaveBeenCalledWith(
      '/search/company?query=LOOK+FOR+SOMETHING+ON+DB&page=101&api_key=API_KEY'
    )
  })

  test('collections should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.collections(filters.collections)

    expect(api['get']).toHaveBeenCalledWith(
      '/search/collection?query=LOOK+FOR+SOMETHING+ON+DB&page=101&language=en-US&api_key=API_KEY'
    )
  })

  test('keywords should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.keywords(filters.search)

    expect(api['get']).toHaveBeenCalledWith(
      '/search/keyword?query=LOOK+FOR+SOMETHING+ON+DB&page=101&api_key=API_KEY'
    )
  })

  test('movies should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.movies(filters.movies)

    expect(api['get']).toHaveBeenCalledWith(
      '/search/movie?query=LOOK+FOR+SOMETHING+ON+DB&page=101&language=en-US&include_adult=true&region=US&year=2020&primary_release_year=2000&api_key=API_KEY'
    )
  })

  test('multi should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.multiSearch(filters.multi)

    expect(api['get']).toHaveBeenCalledWith(
      '/search/multi?query=LOOK+FOR+SOMETHING+ON+DB&page=101&language=en-US&include_adult=true&region=US&api_key=API_KEY'
    )
  })

  test('people should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.people(filters.people)

    expect(api['get']).toHaveBeenCalledWith(
      '/search/person?query=LOOK+FOR+SOMETHING+ON+DB&page=101&language=en-US&include_adult=true&region=US&api_key=API_KEY'
    )
  })

  test('tvShows should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.tvShows(filters.tvShows)

    expect(api['get']).toHaveBeenCalledWith(
      '/search/tv?query=LOOK+FOR+SOMETHING+ON+DB&page=101&language=en-US&include_adult=true&first_air_date_year=2000&api_key=API_KEY'
    )
  })
})
