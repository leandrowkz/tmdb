import { GuestSessionsAPI } from '.'
import type { GuestSessionsRatedFilters } from './types'

const makeSUT = () => {
  const filters: GuestSessionsRatedFilters = {
    language: 'en-US',
    sort_by: 'created_at.asc',
  }

  const api = new GuestSessionsAPI({
    url: 'URL',
    apiKey: 'API_KEY',
  })

  api['get'] = jest.fn()

  return { api, filters }
}

describe('GuestSessions API', () => {
  test('ratedMovies should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.ratedMovies('MOCK_ID', filters)

    expect(api['get']).toHaveBeenCalledWith(
      '/guest_session/MOCK_ID/rated/movies?language=en-US&sort_by=created_at.asc&api_key=API_KEY'
    )
  })

  test('ratedTVEpisodes should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.ratedTVEpisodes('MOCK_ID', filters)

    expect(api['get']).toHaveBeenCalledWith(
      '/guest_session/MOCK_ID/rated/tv/episodes?language=en-US&sort_by=created_at.asc&api_key=API_KEY'
    )
  })

  test('ratedTVShows should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.ratedTVShows('MOCK_ID', filters)

    expect(api['get']).toHaveBeenCalledWith(
      '/guest_session/MOCK_ID/rated/tv?language=en-US&sort_by=created_at.asc&api_key=API_KEY'
    )
  })
})
