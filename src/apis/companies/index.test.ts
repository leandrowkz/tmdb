import { CompaniesAPI } from '.'

const makeSUT = () => {
  const api = new CompaniesAPI({
    url: 'URL',
    apiKey: 'API_KEY',
  })

  api['get'] = jest.fn()

  return { api }
}

describe('Companies API', () => {
  test('details should call TMDB URL properly', async () => {
    const { api } = makeSUT()

    await api.details(442)

    expect(api['get']).toHaveBeenCalledWith('/company/442?api_key=API_KEY')
  })

  test('alternativeNames should call TMDB URL properly', async () => {
    const { api } = makeSUT()

    await api.alternativeNames(442)

    expect(api['get']).toHaveBeenCalledWith(
      '/company/442/alternative_names?api_key=API_KEY'
    )
  })

  test('images should call TMDB URL properly', async () => {
    const { api } = makeSUT()

    await api.images(442)

    expect(api['get']).toHaveBeenCalledWith(
      '/company/442/images?api_key=API_KEY'
    )
  })
})
