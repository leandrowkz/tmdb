import { TV } from '.'

const makeSUT = () => {
  const filters = {
    language: {
      language: <const>'en-US',
    },
    languageAndPage: {
      language: <const>'en-US',
      page: 300,
    },
    sessions: {
      guest_session_id: 'MOCK_GUEST_SESSION_ID',
      session_id: 'MOCK_SESSION_ID',
    },
    details: {
      language: <const>'en-US',
      append_to_response: [<const>'videos', <const>'cast'],
    },
    accountStates: {
      language: <const>'en-US',
      guest_session_id: 'MOCK_GUEST_SESSION_ID',
      session_id: 'MOCK_SESSION_ID',
    },
    changes: {
      start_date: '2000-01-02',
      end_date: '2020-14-04',
      page: 300,
    },
  }

  const api = new TV({
    url: 'URL',
    apiKey: 'API_KEY',
  })

  api['get'] = jest.fn()
  api['post'] = jest.fn()
  api['delete'] = jest.fn()

  return { api, filters }
}

describe('TV API', () => {
  test('details should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.details(4000, filters.details)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/4000?language=en-US&append_to_response=videos%2Ccast&api_key=API_KEY'
    )
  })

  test('accountStates should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.accountStates(4000, filters.accountStates)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/4000/account_states?language=en-US&guest_session_id=MOCK_GUEST_SESSION_ID&session_id=MOCK_SESSION_ID&api_key=API_KEY'
    )
  })

  test('aggregateCredits should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.aggregateCredits(4000, filters.language)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/4000/aggregate_credits?language=en-US&api_key=API_KEY'
    )
  })

  test('alternativeTitles should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.alternativeTitles(4000, filters.language)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/4000/alternative_titles?language=en-US&api_key=API_KEY'
    )
  })

  test('changes should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.changes(4000, filters.changes)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/4000/changes?start_date=2000-01-02&end_date=2020-14-04&page=300&api_key=API_KEY'
    )
  })

  test('contentRatings should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.contentRatings(4000, filters.language)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/4000/content_ratings?language=en-US&api_key=API_KEY'
    )
  })

  test('credits should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.credits(4000, filters.language)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/4000/credits?language=en-US&api_key=API_KEY'
    )
  })

  test('episodeGroups should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.episodeGroups(4000, filters.language)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/4000/episode_groups?language=en-US&api_key=API_KEY'
    )
  })

  test('externalIds should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.externalIds(4000, filters.language)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/4000/external_ids?language=en-US&api_key=API_KEY'
    )
  })

  test('images should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.images(4000, filters.language)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/4000/images?language=en-US&api_key=API_KEY'
    )
  })

  test('keywords should call TMDB URL properly', async () => {
    const { api } = makeSUT()

    await api.keywords(4000)

    expect(api['get']).toHaveBeenCalledWith('/tv/4000/keywords?api_key=API_KEY')
  })

  test('recommendations should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.recommendations(4000, filters.languageAndPage)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/4000/recommendations?language=en-US&page=300&api_key=API_KEY'
    )
  })

  test('reviews should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.reviews(4000, filters.languageAndPage)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/4000/reviews?language=en-US&page=300&api_key=API_KEY'
    )
  })

  test('screenedTheatrically should call TMDB URL properly', async () => {
    const { api } = makeSUT()

    await api.screenedTheatrically(4000)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/4000/screened_theatrically?api_key=API_KEY'
    )
  })

  test('similar should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.similar(4000, filters.languageAndPage)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/4000/similar?language=en-US&page=300&api_key=API_KEY'
    )
  })

  test('translations should call TMDB URL properly', async () => {
    const { api } = makeSUT()

    await api.translations(4000)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/4000/translations?api_key=API_KEY'
    )
  })

  test('videos should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.videos(4000, filters.language)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/4000/videos?language=en-US&api_key=API_KEY'
    )
  })

  test('watchProviders should call TMDB URL properly', async () => {
    const { api } = makeSUT()

    await api.watchProviders(4000)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/4000/watch/providers?api_key=API_KEY'
    )
  })

  test('rateTVShow should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()
    const body = { value: 8 }

    await api.rateTVShow(4000, body, filters.sessions)

    expect(api['post']).toHaveBeenCalledWith(
      '/tv/4000/rating?guest_session_id=MOCK_GUEST_SESSION_ID&session_id=MOCK_SESSION_ID&api_key=API_KEY',
      body
    )
  })

  test('deleteTVShowRate should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.deleteTVShowRate(4000, filters.sessions)

    expect(api['delete']).toHaveBeenCalledWith(
      '/tv/4000/rating?guest_session_id=MOCK_GUEST_SESSION_ID&session_id=MOCK_SESSION_ID&api_key=API_KEY'
    )
  })

  test('latest should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.latest(filters.language)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/latest?language=en-US&api_key=API_KEY'
    )
  })

  test('airingToday should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.airingToday(filters.languageAndPage)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/airing_today?language=en-US&page=300&api_key=API_KEY'
    )
  })

  test('onTheAir should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.onTheAir(filters.languageAndPage)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/on_the_air?language=en-US&page=300&api_key=API_KEY'
    )
  })

  test('popular should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.popular(filters.languageAndPage)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/popular?language=en-US&page=300&api_key=API_KEY'
    )
  })

  test('topRated should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.topRated(filters.languageAndPage)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/top_rated?language=en-US&page=300&api_key=API_KEY'
    )
  })
})
