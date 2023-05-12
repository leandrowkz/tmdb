import { ChangesAPI } from '.'

const makeSUT = () => {
  const filters = {
    changes: {
      start_date: '2020-04-12',
      end_date: '2020-04-13',
      page: 40,
    },
  }

  const api = new ChangesAPI({
    url: 'URL',
    apiKey: 'API_KEY',
  })

  api['get'] = jest.fn()

  return { api, filters }
}

describe('Changes API', () => {
  test('movie should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.movie(filters.changes)

    expect(api['get']).toHaveBeenCalledWith(
      '/movie/changes?start_date=2020-04-12&end_date=2020-04-13&page=40&api_key=API_KEY'
    )
  })

  test('tv should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.tv(filters.changes)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/changes?start_date=2020-04-12&end_date=2020-04-13&page=40&api_key=API_KEY'
    )
  })

  test('person should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.person(filters.changes)

    expect(api['get']).toHaveBeenCalledWith(
      '/person/changes?start_date=2020-04-12&end_date=2020-04-13&page=40&api_key=API_KEY'
    )
  })
})
