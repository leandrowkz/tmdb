import { GenresAPI } from '.'
import { GenresFilters } from './types'

const makeSUT = () => {
  const genresFilters: GenresFilters = {
    language: <const>'en-US',
  }

  const filters = {
    genres: genresFilters,
  }

  const api = new GenresAPI({
    url: 'URL',
    apiKey: 'API_KEY',
  })

  api['get'] = jest.fn()

  return { api, filters }
}

describe('Genres API', () => {
  test('movie should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.movie(filters.genres)

    expect(api['get']).toHaveBeenCalledWith(
      '/genre/movie/list?language=en-US&api_key=API_KEY'
    )
  })
})
