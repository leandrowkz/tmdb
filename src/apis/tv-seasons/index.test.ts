import { TVSeasonsAPI } from '.'

const makeSUT = () => {
  const filters = {
    language: {
      language: <const>'en-US',
    },
    sessions: {
      guest_session_id: 'MOCK_GUEST_SESSION_ID',
      session_id: 'MOCK_SESSION_ID',
    },
    details: {
      language: <const>'en-US',
      append_to_response: [<const>'videos', <const>'cast'],
    },
    changes: {
      start_date: '2000-01-02',
      end_date: '2020-14-04',
      page: 300,
    },
  }

  const api = new TVSeasonsAPI({
    url: 'URL',
    apiKey: 'API_KEY',
  })

  api['get'] = jest.fn()

  return { api, filters }
}

describe('TVSeasons API', () => {
  test('details should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.details(100, 200, filters.details)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/100/season/200?language=en-US&append_to_response=videos%2Ccast&api_key=API_KEY'
    )
  })

  test('accountStates should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.accountStates(100, 200, {
      ...filters.sessions,
      ...filters.language,
    })

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/100/season/200/account_states?guest_session_id=MOCK_GUEST_SESSION_ID&session_id=MOCK_SESSION_ID&language=en-US&api_key=API_KEY'
    )
  })

  test('aggregateCredits should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.aggregateCredits(100, 200, filters.language)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/100/season/200/aggregate_credits?language=en-US&api_key=API_KEY'
    )
  })

  test('changes should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.changes(5000, filters.changes)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/season/5000/changes?start_date=2000-01-02&end_date=2020-14-04&page=300&api_key=API_KEY'
    )
  })

  test('credits should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.credits(100, 200, filters.language)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/100/season/200/credits?language=en-US&api_key=API_KEY'
    )
  })

  test('externalIds should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.externalIds(100, 200, filters.language)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/100/season/200/external_ids?language=en-US&api_key=API_KEY'
    )
  })

  test('images should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.images(100, 200, filters.language)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/100/season/200/images?language=en-US&api_key=API_KEY'
    )
  })

  test('translations should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.translations(100, 200, filters.language)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/100/season/200/translations?language=en-US&api_key=API_KEY'
    )
  })

  test('videos should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.videos(100, 200, filters.language)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/100/season/200/videos?language=en-US&api_key=API_KEY'
    )
  })
})
