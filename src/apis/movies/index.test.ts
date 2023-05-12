import { MoviesAPI } from '.'

const makeSUT = () => {
  const filters = {
    country: {
      country: <const>'US',
    },
    language: {
      language: <const>'en-US',
    },
    languageAndPage: {
      page: 100,
      language: <const>'en-US',
    },
    languagePageAndRegion: {
      page: 100,
      language: <const>'en-US',
      region: <const>'US',
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
    session: {
      session_id: 'SESSION_ID',
      guest_session_id: 'GUEST_SESSION_ID',
    },
  }

  const body = {
    rateMovie: {
      value: 10,
    },
  }

  const api = new MoviesAPI({
    url: 'URL',
    apiKey: 'API_KEY',
  })

  api['get'] = jest.fn()
  api['post'] = jest.fn()
  api['delete'] = jest.fn()

  return { api, body, filters }
}

describe('Movies API', () => {
  test('details should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.details(402, filters.details)

    expect(api['get']).toHaveBeenCalledWith(
      '/movie/402?language=en-US&append_to_response=movies%2Ctv%2Cimages&api_key=API_KEY'
    )
  })

  test('accountStates should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.accountStates(402, filters.session)

    expect(api['get']).toHaveBeenCalledWith(
      '/movie/402/account_states?session_id=SESSION_ID&guest_session_id=GUEST_SESSION_ID&api_key=API_KEY'
    )
  })

  test('alternativeTitles should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.alternativeTitles(402, filters.country)

    expect(api['get']).toHaveBeenCalledWith(
      '/movie/402/alternative_titles?country=US&api_key=API_KEY'
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

  test('keywords should call TMDB URL properly', async () => {
    const { api } = makeSUT()

    await api.keywords(402)

    expect(api['get']).toHaveBeenCalledWith(
      '/movie/402/keywords?api_key=API_KEY'
    )
  })

  test('lists should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.lists(402, filters.languageAndPage)

    expect(api['get']).toHaveBeenCalledWith(
      '/movie/402/lists?page=100&language=en-US&api_key=API_KEY'
    )
  })

  test('recommendations should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.recommendations(402, filters.languageAndPage)

    expect(api['get']).toHaveBeenCalledWith(
      '/movie/402/recommendations?page=100&language=en-US&api_key=API_KEY'
    )
  })

  test('releaseDates should call TMDB URL properly', async () => {
    const { api } = makeSUT()

    await api.releaseDates(402)

    expect(api['get']).toHaveBeenCalledWith(
      '/movie/402/release_dates?api_key=API_KEY'
    )
  })

  test('reviews should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.reviews(402, filters.languageAndPage)

    expect(api['get']).toHaveBeenCalledWith(
      '/movie/402/reviews?page=100&language=en-US&api_key=API_KEY'
    )
  })

  test('similar should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.similar(402, filters.languageAndPage)

    expect(api['get']).toHaveBeenCalledWith(
      '/movie/402/similar?page=100&language=en-US&api_key=API_KEY'
    )
  })

  test('translations should call TMDB URL properly', async () => {
    const { api } = makeSUT()

    await api.translations(402)

    expect(api['get']).toHaveBeenCalledWith(
      '/movie/402/translations?api_key=API_KEY'
    )
  })

  test('videos should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.videos(402, filters.language)

    expect(api['get']).toHaveBeenCalledWith(
      '/movie/402/videos?language=en-US&api_key=API_KEY'
    )
  })

  test('watchProviders should call TMDB URL properly', async () => {
    const { api } = makeSUT()

    await api.watchProviders(402)

    expect(api['get']).toHaveBeenCalledWith(
      '/movie/402/watch/providers?api_key=API_KEY'
    )
  })

  test('rate should call TMDB URL properly', async () => {
    const { api, body, filters } = makeSUT()

    await api.rate(402, body.rateMovie, filters.session)

    expect(api['post']).toHaveBeenCalledWith(
      '/movie/402/rating?session_id=SESSION_ID&guest_session_id=GUEST_SESSION_ID&api_key=API_KEY',
      body.rateMovie
    )
  })

  test('deleteRate should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.deleteRate(402, filters.session)

    expect(api['delete']).toHaveBeenCalledWith(
      '/movie/402/rating?session_id=SESSION_ID&guest_session_id=GUEST_SESSION_ID&api_key=API_KEY'
    )
  })

  test('latest should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.latest(filters.language)

    expect(api['get']).toHaveBeenCalledWith(
      '/movie/latest?language=en-US&api_key=API_KEY'
    )
  })

  test('nowPlaying should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.nowPlaying(filters.languagePageAndRegion)

    expect(api['get']).toHaveBeenCalledWith(
      '/movie/now_playing?page=100&language=en-US&region=US&api_key=API_KEY'
    )
  })

  test('popular should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.popular(filters.language)

    expect(api['get']).toHaveBeenCalledWith(
      '/movie/popular?language=en-US&api_key=API_KEY'
    )
  })

  test('topRated should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.topRated(filters.languagePageAndRegion)

    expect(api['get']).toHaveBeenCalledWith(
      '/movie/top_rated?page=100&language=en-US&region=US&api_key=API_KEY'
    )
  })

  test('upcoming should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.upcoming(filters.languagePageAndRegion)

    expect(api['get']).toHaveBeenCalledWith(
      '/movie/upcoming?page=100&language=en-US&region=US&api_key=API_KEY'
    )
  })
})
