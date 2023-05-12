import { CollectionsAPI } from '.'

const makeSUT = () => {
  const filters = {
    language: {
      language: <const>'en-US',
    },
  }

  const api = new CollectionsAPI({
    url: 'URL',
    apiKey: 'API_KEY',
  })

  api['get'] = jest.fn()

  return { api, filters }
}

describe('Collections API', () => {
  test('details should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.details(442, filters.language)

    expect(api['get']).toHaveBeenCalledWith(
      '/collection/442?language=en-US&api_key=API_KEY'
    )
  })

  test('images should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.images(442, filters.language)

    expect(api['get']).toHaveBeenCalledWith(
      '/collection/442/images?language=en-US&api_key=API_KEY'
    )
  })

  test('translations should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.translations(442, filters.language)

    expect(api['get']).toHaveBeenCalledWith(
      '/collection/442/translations?language=en-US&api_key=API_KEY'
    )
  })
})
