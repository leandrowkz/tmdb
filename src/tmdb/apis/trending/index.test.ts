import { Trending } from '.'

const makeSUT = () => {
  const api = new Trending({
    url: 'URL',
    apiKey: 'API_KEY',
  })

  api['get'] = jest.fn()

  return { api }
}

describe('Trending API', () => {
  test('getTrending should call TMDB URL properly', async () => {
    const { api } = makeSUT()

    await api.getTrending('all', 'week')

    expect(api['get']).toHaveBeenCalledWith(
      '/trending/all/week?api_key=API_KEY'
    )
  })
})
