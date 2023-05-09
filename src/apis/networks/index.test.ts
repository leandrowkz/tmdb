import { NetworksAPI } from '.'

const makeSUT = () => {
  const api = new NetworksAPI({
    url: 'URL',
    apiKey: 'API_KEY',
  })

  api['get'] = jest.fn()

  return { api }
}

describe('Networks API', () => {
  test('details should call TMDB URL properly', async () => {
    const { api } = makeSUT()

    await api.details(4000)

    expect(api['get']).toHaveBeenCalledWith('/network/4000?api_key=API_KEY')
  })

  test('alternativeNames should call TMDB URL properly', async () => {
    const { api } = makeSUT()

    await api.alternativeNames(4000)

    expect(api['get']).toHaveBeenCalledWith(
      '/network/4000/alternative_names?api_key=API_KEY'
    )
  })

  test('images should call TMDB URL properly', async () => {
    const { api } = makeSUT()

    await api.images(4000)

    expect(api['get']).toHaveBeenCalledWith(
      '/network/4000/images?api_key=API_KEY'
    )
  })
})
