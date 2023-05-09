import { BaseAPI } from '../../base-api'
import {
  AddToWatchlistBody,
  AddToWatchlistFilters,
  AddToWatchlistResponse,
  CreatedListsFilters,
  CreatedListsResponse,
  DetailsFilters,
  DetailsResponse,
  FavoriteMoviesFilters,
  FavoriteMoviesResponse,
  FavoriteTVShowsFilters,
  FavoriteTVShowsResponse,
  MarkAsFavoriteBody,
  MarkAsFavoriteFilters,
  MarkAsFavoriteResponse,
  MovieWatchlistFilters,
  MovieWatchlistResponse,
  RatedMoviesFilters,
  RatedMoviesResponse,
  RatedTVEpisodesFilters,
  RatedTVEpisodesResponse,
  RatedTVShowsFilters,
  RatedTVShowsResponse,
  TVShowWatchlistFilters,
  TVShowWatchlistResponse,
} from './types'

export class AccountAPI extends BaseAPI {
  /**
   * Get your account details.
   *
   * @see https://developers.themoviedb.org/3/account/get-account-details
   */
  public async details(filters: DetailsFilters): Promise<DetailsResponse> {
    const path = this.getPath('/account', filters)

    return this.get<DetailsResponse>(path)
  }

  /**
   * Get all of the lists created by an account. Will invlude private lists if you are the owner.
   *
   * @see https://developers.themoviedb.org/3/account/get-created-lists
   */
  public async createdLists(
    accountId: number,
    filters: CreatedListsFilters
  ): Promise<CreatedListsResponse> {
    const path = this.getPath(`/account/${accountId}/lists`, filters)

    return this.get<CreatedListsResponse>(path)
  }

  /**
   * Get the list of your favorite movies.
   *
   * @see https://developers.themoviedb.org/3/account/get-favorite-movies
   */
  public async favoriteMovies(
    accountId: number,
    filters: FavoriteMoviesFilters
  ): Promise<FavoriteMoviesResponse> {
    const path = this.getPath(`/account/${accountId}/favorite/movies`, filters)

    return this.get<FavoriteMoviesResponse>(path)
  }

  /**
   * Get the list of your favorite TV shows.
   *
   * @see https://developers.themoviedb.org/3/account/get-favorite-tv-shows
   */
  public async favoriteTVShows(
    accountId: number,
    filters: FavoriteTVShowsFilters
  ): Promise<FavoriteTVShowsResponse> {
    const path = this.getPath(`/account/${accountId}/favorite/tv`, filters)

    return this.get<FavoriteTVShowsResponse>(path)
  }

  /**
   * This method allows you to mark a movie or TV show as a favorite item.
   *
   * @see https://developers.themoviedb.org/3/account/mark-as-favorite
   */
  public async markAsFavorite(
    accountId: number,
    data: MarkAsFavoriteBody,
    filters: MarkAsFavoriteFilters
  ): Promise<MarkAsFavoriteResponse> {
    const path = this.getPath(`/account/${accountId}/favorite`, filters)

    return this.post<MarkAsFavoriteResponse>(path, data)
  }

  /**
   * Get a list of all the movies you have rated.
   *
   * @see https://developers.themoviedb.org/3/account/get-rated-movies
   */
  public async ratedMovies(
    accountId: number,
    filters: RatedMoviesFilters
  ): Promise<RatedMoviesResponse> {
    const path = this.getPath(`/account/${accountId}/rated/movies`, filters)

    return this.get<RatedMoviesResponse>(path)
  }

  /**
   * Get a list of all the TV shows you have rated.
   *
   * @see https://developers.themoviedb.org/3/account/get-rated-tv-shows
   */
  public async ratedTVShows(
    accountId: number,
    filters: RatedTVShowsFilters
  ): Promise<RatedTVShowsResponse> {
    const path = this.getPath(`/account/${accountId}/rated/tv`, filters)

    return this.get<RatedTVShowsResponse>(path)
  }

  /**
   * Get a list of all the TV episodes you have rated.
   *
   * @see https://developers.themoviedb.org/3/account/get-rated-tv-episodes
   */
  public async ratedTVEpisodes(
    accountId: number,
    filters: RatedTVEpisodesFilters
  ): Promise<RatedTVEpisodesResponse> {
    const path = this.getPath(
      `/account/${accountId}/rated/tv/episodes`,
      filters
    )

    return this.get<RatedTVEpisodesResponse>(path)
  }

  /**
   * Get a list of all the movies you have added to your watchlist.
   *
   * @see https://developers.themoviedb.org/3/account/get-movies-watchlist
   */
  public async movieWatchlist(
    accountId: number,
    filters: MovieWatchlistFilters
  ): Promise<MovieWatchlistResponse> {
    const path = this.getPath(`/account/${accountId}/watchlist/movies`, filters)

    return this.get<MovieWatchlistResponse>(path)
  }

  /**
   * Get a list of all the TV shows you have added to your watchlist.
   *
   * @see https://developers.themoviedb.org/3/account/get-tv-show-watchlist
   */
  public async tvShowWatchlist(
    accountId: number,
    filters: TVShowWatchlistFilters
  ): Promise<TVShowWatchlistResponse> {
    const path = this.getPath(`/account/${accountId}/watchlist/tv`, filters)

    return this.get<TVShowWatchlistResponse>(path)
  }

  /**
   * Add a movie or TV show to your watchlist.
   *
   * @see https://developers.themoviedb.org/3/account/add-to-watchlist
   */
  public async addToWatchlist(
    accountId: number,
    data: AddToWatchlistBody,
    filters: AddToWatchlistFilters
  ): Promise<AddToWatchlistResponse> {
    const path = this.getPath(`/account/${accountId}/watchlist`, filters)

    return this.post<AddToWatchlistResponse>(path, data)
  }
}
