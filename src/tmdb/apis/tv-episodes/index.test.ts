import { TVEpisodes } from '.'

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

  const api = new TVEpisodes({
    url: 'URL',
    apiKey: 'API_KEY',
  })

  api['get'] = jest.fn()
  api['post'] = jest.fn()
  api['delete'] = jest.fn()

  return { api, filters }
}

describe('TVEpisodes API', () => {
  test('details should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.details(100, 200, 300, filters.details)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/100/season/200/episode/300?language=en-US&append_to_response=videos%2Ccast&api_key=API_KEY'
    )
  })

  test('accountStates should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.accountStates(100, 200, 300, filters.sessions)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/100/season/200/episode/300/account_states?guest_session_id=MOCK_GUEST_SESSION_ID&session_id=MOCK_SESSION_ID&api_key=API_KEY'
    )
  })

  test('changes should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.changes(5000, filters.changes)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/episode/5000/changes?start_date=2000-01-02&end_date=2020-14-04&page=300&api_key=API_KEY'
    )
  })

  test('credits should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.credits(100, 200, 300, filters.language)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/100/season/200/episode/300/credits?language=en-US&api_key=API_KEY'
    )
  })

  test('externalIds should call TMDB URL properly', async () => {
    const { api } = makeSUT()

    await api.externalIds(100, 200, 300)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/100/season/200/episode/300/external_ids?api_key=API_KEY'
    )
  })

  test('images should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.images(100, 200, 300, filters.language)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/100/season/200/episode/300/images?language=en-US&api_key=API_KEY'
    )
  })

  test('translations should call TMDB URL properly', async () => {
    const { api } = makeSUT()

    await api.translations(100, 200, 300)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/100/season/200/episode/300/translations?api_key=API_KEY'
    )
  })

  test('videos should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.videos(100, 200, 300, filters.language)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/100/season/200/episode/300/videos?language=en-US&api_key=API_KEY'
    )
  })

  test('rateTVShow should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()
    const body = { value: 8 }

    await api.rateTVEpisode(100, 200, 300, body, filters.sessions)

    expect(api['post']).toHaveBeenCalledWith(
      '/tv/100/season/200/episode/300/rating?guest_session_id=MOCK_GUEST_SESSION_ID&session_id=MOCK_SESSION_ID&api_key=API_KEY',
      body
    )
  })

  test('deleteTVShowRate should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.deleteTVEpisodeRate(100, 200, 300, filters.sessions)

    expect(api['delete']).toHaveBeenCalledWith(
      '/tv/100/season/200/episode/300/rating?guest_session_id=MOCK_GUEST_SESSION_ID&session_id=MOCK_SESSION_ID&api_key=API_KEY'
    )
  })
})
