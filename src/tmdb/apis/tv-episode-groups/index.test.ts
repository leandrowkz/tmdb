import { TVEpisodeGroups } from '.'

const makeSUT = () => {
  const filters = {
    language: {
      language: <const>'en-US',
    },
  }

  const api = new TVEpisodeGroups({
    url: 'URL',
    apiKey: 'API_KEY',
  })

  api['get'] = jest.fn()

  return { api, filters }
}

describe('TVEpisodeGroups API', () => {
  test('details should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.details(100, filters.language)

    expect(api['get']).toHaveBeenCalledWith(
      '/tv/episode_group/100?language=en-US&api_key=API_KEY'
    )
  })
})
