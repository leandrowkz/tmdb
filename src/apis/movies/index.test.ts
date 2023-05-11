import { MoviesAPI } from '.'

const makeSUT = () => {
  const filters = {
    language: {
      language: <const>'en-US',
    },
    languageAndPage: {
      page: 100,
      language: <const>'en-US',
    },
    details: {
      language: <const>'en-US',
      append_to_response: [<const>'movies', <const>'tv', <const>'images'],
    },
    changes: {
      page: 333,
      start_date: '2020-04-14',
      end_date: '2048-12-15',
    },
  }

  const api = new MoviesAPI({
    url: 'URL',
    apiKey: 'API_KEY',
  })

  api['get'] = jest.fn()

  return { api, filters }
}

describe('Movies API', () => {
  test('details should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.details(402, filters.details)

    expect(api['get']).toHaveBeenCalledWith(
      '/movie/402?language=en-US&append_to_response=movies%2Ctv%2Cimages&api_key=API_KEY'
    )
  })

  test('changes should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.changes(402, filters.changes)

    expect(api['get']).toHaveBeenCalledWith(
      '/movie/402/changes?page=333&start_date=2020-04-14&end_date=2048-12-15&api_key=API_KEY'
    )
  })

  test('credits should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.credits(402, filters.language)

    expect(api['get']).toHaveBeenCalledWith(
      '/movie/402/credits?language=en-US&api_key=API_KEY'
    )
  })

  test('externalIds should call TMDB URL properly', async () => {
    const { api } = makeSUT()

    await api.externalIds(402)

    expect(api['get']).toHaveBeenCalledWith(
      '/movie/402/external_ids?api_key=API_KEY'
    )
  })

  test('images should call TMDB URL properly', async () => {
    const { api } = makeSUT()

    await api.images(402)

    expect(api['get']).toHaveBeenCalledWith('/movie/402/images?api_key=API_KEY')
  })

  test('translations should call TMDB URL properly', async () => {
    const { api } = makeSUT()

    await api.translations(402)

    expect(api['get']).toHaveBeenCalledWith(
      '/movie/402/translations?api_key=API_KEY'
    )
  })

  test('latest should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.latest(filters.language)

    expect(api['get']).toHaveBeenCalledWith(
      '/movie/latest?language=en-US&api_key=API_KEY'
    )
  })

  test('popular should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.popular(filters.language)

    expect(api['get']).toHaveBeenCalledWith(
      '/movie/popular?language=en-US&api_key=API_KEY'
    )
  })
})
