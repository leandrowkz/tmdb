import { People } from '.'

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

  const api = new People({
    url: 'URL',
    apiKey: 'API_KEY',
  })

  api['get'] = jest.fn()

  return { api, filters }
}

describe('People API', () => {
  test('details should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.details(402, filters.details)

    expect(api['get']).toHaveBeenCalledWith(
      '/person/402?language=en-US&append_to_response=movies%2Ctv%2Cimages&api_key=API_KEY'
    )
  })

  test('changes should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.changes(402, filters.changes)

    expect(api['get']).toHaveBeenCalledWith(
      '/person/402/changes?page=333&start_date=2020-04-14&end_date=2048-12-15&api_key=API_KEY'
    )
  })

  test('movieCredits should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.movieCredits(402, filters.language)

    expect(api['get']).toHaveBeenCalledWith(
      '/person/402/movie_credits?language=en-US&api_key=API_KEY'
    )
  })

  test('tvCredits should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.tvCredits(402, filters.language)

    expect(api['get']).toHaveBeenCalledWith(
      '/person/402/tv_credits?language=en-US&api_key=API_KEY'
    )
  })

  test('combinedCredits should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.combinedCredits(402, filters.language)

    expect(api['get']).toHaveBeenCalledWith(
      '/person/402/combined_credits?language=en-US&api_key=API_KEY'
    )
  })

  test('externalIds should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.externalIds(402, filters.language)

    expect(api['get']).toHaveBeenCalledWith(
      '/person/402/external_ids?language=en-US&api_key=API_KEY'
    )
  })

  test('images should call TMDB URL properly', async () => {
    const { api } = makeSUT()

    await api.images(402)

    expect(api['get']).toHaveBeenCalledWith(
      '/person/402/images?api_key=API_KEY'
    )
  })

  test('taggedImages should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.taggedImages(402, filters.languageAndPage)

    expect(api['get']).toHaveBeenCalledWith(
      '/person/402/tagged_images?page=100&language=en-US&api_key=API_KEY'
    )
  })

  test('translations should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.translations(402, filters.language)

    expect(api['get']).toHaveBeenCalledWith(
      '/person/402/translations?language=en-US&api_key=API_KEY'
    )
  })

  test('latest should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.latest(filters.language)

    expect(api['get']).toHaveBeenCalledWith(
      '/person/latest?language=en-US&api_key=API_KEY'
    )
  })

  test('popular should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.popular(filters.language)

    expect(api['get']).toHaveBeenCalledWith(
      '/person/popular?language=en-US&api_key=API_KEY'
    )
  })
})
