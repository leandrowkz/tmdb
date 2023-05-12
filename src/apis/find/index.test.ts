import { FindAPI } from '.'
import { FindFilters } from './types'

const makeSUT = () => {
  const findFilters: FindFilters = {
    language: <const>'en-US',
    external_source: 'imdb_id',
  }

  const filters = {
    find: findFilters,
  }

  const api = new FindAPI({
    url: 'URL',
    apiKey: 'API_KEY',
  })

  api['get'] = jest.fn()

  return { api, filters }
}

describe('Find API', () => {
  test('find should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.find('EXTERNAL_ID', filters.find)

    expect(api['get']).toHaveBeenCalledWith(
      '/find/EXTERNAL_ID?language=en-US&external_source=imdb_id&api_key=API_KEY'
    )
  })
})
