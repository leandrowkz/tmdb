import { ConfigurationAPI } from '.'

const makeSUT = () => {
  const api = new ConfigurationAPI({
    url: 'URL',
    apiKey: 'API_KEY',
  })

  api['get'] = jest.fn()

  return { api }
}

describe('Configuration API', () => {
  test('details should call TMDB URL properly', async () => {
    const { api } = makeSUT()

    await api.configuration()

    expect(api['get']).toHaveBeenCalledWith('/configuration?api_key=API_KEY')
  })

  test('coutries should call TMDB URL properly', async () => {
    const { api } = makeSUT()

    await api.countries()

    expect(api['get']).toHaveBeenCalledWith(
      '/configuration/countries?api_key=API_KEY'
    )
  })

  test('jobs should call TMDB URL properly', async () => {
    const { api } = makeSUT()

    await api.jobs()

    expect(api['get']).toHaveBeenCalledWith(
      '/configuration/jobs?api_key=API_KEY'
    )
  })

  test('languages should call TMDB URL properly', async () => {
    const { api } = makeSUT()

    await api.languages()

    expect(api['get']).toHaveBeenCalledWith(
      '/configuration/languages?api_key=API_KEY'
    )
  })

  test('primaryTranslations should call TMDB URL properly', async () => {
    const { api } = makeSUT()

    await api.primaryTranslations()

    expect(api['get']).toHaveBeenCalledWith(
      '/configuration/primary_translations?api_key=API_KEY'
    )
  })

  test('timezones should call TMDB URL properly', async () => {
    const { api } = makeSUT()

    await api.timezones()

    expect(api['get']).toHaveBeenCalledWith(
      '/configuration/timezones?api_key=API_KEY'
    )
  })
})
