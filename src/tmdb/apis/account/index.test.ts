import { Account } from '.'

const makeSUT = () => {
  const filters = {
    sessionIdFilter: {
      session_id: 'SESSION_ID',
    },
    mediaFilters: {
      session_id: 'SESSION_ID',
      language: <const>'en-US',
      page: 114,
      sort_by: <const>'created_at.asc',
    },
  }

  const bodies = {
    markAsFavoriteBody: {
      media_id: 673,
      media_type: <const>'movie',
      favorite: true,
    },
    addToWatchlistBody: {
      media_id: 498,
      media_type: <const>'tv',
      watchlist: false,
    },
  }

  const api = new Account({
    url: 'URL',
    apiKey: 'API_KEY',
  })

  api['get'] = jest.fn()
  api['post'] = jest.fn()

  return { api, filters, bodies }
}

describe('Accounts API', () => {
  test('details should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.details(filters.sessionIdFilter)

    expect(api['get']).toHaveBeenCalledWith(
      '/account?session_id=SESSION_ID&api_key=API_KEY'
    )
  })

  test('createdLists should call TMDB URL properly', async () => {
    const { api } = makeSUT()

    const filters = {
      session_id: 'SESSION_ID',
      language: <const>'en-US',
      page: 114,
    }

    await api.createdLists(4000, filters)

    expect(api['get']).toHaveBeenCalledWith(
      '/account/4000/lists?session_id=SESSION_ID&language=en-US&page=114&api_key=API_KEY'
    )
  })

  test('favoriteMovies should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.favoriteMovies(4000, filters.mediaFilters)

    expect(api['get']).toHaveBeenCalledWith(
      '/account/4000/favorite/movies?session_id=SESSION_ID&language=en-US&page=114&sort_by=created_at.asc&api_key=API_KEY'
    )
  })

  test('favoriteTVShows should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.favoriteTVShows(4000, filters.mediaFilters)

    expect(api['get']).toHaveBeenCalledWith(
      '/account/4000/favorite/tv?session_id=SESSION_ID&language=en-US&page=114&sort_by=created_at.asc&api_key=API_KEY'
    )
  })

  test('markAsFavorite should call TMDB URL properly', async () => {
    const { api, filters, bodies } = makeSUT()

    await api.markAsFavorite(
      4000,
      bodies.markAsFavoriteBody,
      filters.sessionIdFilter
    )

    expect(api['post']).toHaveBeenCalledWith(
      '/account/4000/favorite?session_id=SESSION_ID&api_key=API_KEY',
      bodies.markAsFavoriteBody
    )
  })

  test('ratedMovies should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.ratedMovies(4000, filters.mediaFilters)

    expect(api['get']).toHaveBeenCalledWith(
      '/account/4000/rated/movies?session_id=SESSION_ID&language=en-US&page=114&sort_by=created_at.asc&api_key=API_KEY'
    )
  })

  test('ratedTVShow should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.ratedTVShows(4000, filters.mediaFilters)

    expect(api['get']).toHaveBeenCalledWith(
      '/account/4000/rated/tv?session_id=SESSION_ID&language=en-US&page=114&sort_by=created_at.asc&api_key=API_KEY'
    )
  })

  test('ratedTVEpisodes should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.ratedTVEpisodes(4000, filters.mediaFilters)

    expect(api['get']).toHaveBeenCalledWith(
      '/account/4000/rated/tv/episodes?session_id=SESSION_ID&language=en-US&page=114&sort_by=created_at.asc&api_key=API_KEY'
    )
  })

  test('movieWatchlist should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.movieWatchlist(4000, filters.mediaFilters)

    expect(api['get']).toHaveBeenCalledWith(
      '/account/4000/watchlist/movies?session_id=SESSION_ID&language=en-US&page=114&sort_by=created_at.asc&api_key=API_KEY'
    )
  })

  test('tvShowWatchlist should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.tvShowWatchlist(4000, filters.mediaFilters)

    expect(api['get']).toHaveBeenCalledWith(
      '/account/4000/watchlist/tv?session_id=SESSION_ID&language=en-US&page=114&sort_by=created_at.asc&api_key=API_KEY'
    )
  })

  test('addToWatchlist should call TMDB URL properly', async () => {
    const { api, filters, bodies } = makeSUT()

    await api.addToWatchlist(
      4000,
      bodies.addToWatchlistBody,
      filters.sessionIdFilter
    )

    expect(api['post']).toHaveBeenCalledWith(
      '/account/4000/watchlist?session_id=SESSION_ID&api_key=API_KEY',
      bodies.addToWatchlistBody
    )
  })
})
