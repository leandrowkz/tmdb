import { Keywords } from '.'

const makeSUT = () => {
  const filters = {
    language: <const>'en-US',
    include_adult: true,
  }

  const api = new Keywords({
    url: 'URL',
    apiKey: 'API_KEY',
  })

  api['get'] = jest.fn()

  return { api, filters }
}

describe('Keywords API', () => {
  test('details should call TMDB URL properly', async () => {
    const { api } = makeSUT()

    await api.details('MOCK_ID')

    expect(api['get']).toHaveBeenCalledWith('/keyword/MOCK_ID?api_key=API_KEY')
  })

  test('movies should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.movies('MOCK_ID', filters)

    expect(api['get']).toHaveBeenCalledWith(
      '/keyword/MOCK_ID/movies?language=en-US&include_adult=true&api_key=API_KEY'
    )
  })
})
