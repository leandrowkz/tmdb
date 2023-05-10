import { BaseAPI } from '../base'
import type {
  AccountAddToWatchlistBody,
  AccountAddToWatchlistFilters,
  AccountAddToWatchlistResponse,
  AccountCreatedListsFilters,
  AccountCreatedListsResponse,
  AccountDetailsFilters,
  AccountDetailsResponse,
  AccountFavoriteMoviesFilters,
  AccountFavoriteMoviesResponse,
  AccountFavoriteTVShowsFilters,
  AccountFavoriteTVShowsResponse,
  AccountMarkAsFavoriteBody,
  AccountMarkAsFavoriteFilters,
  AccountMarkAsFavoriteResponse,
  AccountMovieWatchlistFilters,
  AccountMovieWatchlistResponse,
  AccountRatedMoviesFilters,
  AccountRatedMoviesResponse,
  AccountRatedTVEpisodesFilters,
  AccountRatedTVEpisodesResponse,
  AccountRatedTVShowsFilters,
  AccountRatedTVShowsResponse,
  AccountTVShowWatchlistFilters,
  AccountTVShowWatchlistResponse,
} from './types'

export class AccountAPI extends BaseAPI {
  /**
   * Get your account details.
   *
   * @see https://developers.themoviedb.org/3/account/get-account-details
   */
  public async details(
    filters: AccountDetailsFilters
  ): Promise<AccountDetailsResponse> {
    const path = this.getPath('/account', filters)

    return this.get<AccountDetailsResponse>(path)
  }

  /**
   * Get all of the lists created by an account. Will invlude private lists if you are the owner.
   *
   * @see https://developers.themoviedb.org/3/account/get-created-lists
   */
  public async createdLists(
    accountId: number,
    filters: AccountCreatedListsFilters
  ): Promise<AccountCreatedListsResponse> {
    const path = this.getPath(`/account/${accountId}/lists`, filters)

    return this.get<AccountCreatedListsResponse>(path)
  }

  /**
   * Get the list of your favorite movies.
   *
   * @see https://developers.themoviedb.org/3/account/get-favorite-movies
   */
  public async favoriteMovies(
    accountId: number,
    filters: AccountFavoriteMoviesFilters
  ): Promise<AccountFavoriteMoviesResponse> {
    const path = this.getPath(`/account/${accountId}/favorite/movies`, filters)

    return this.get<AccountFavoriteMoviesResponse>(path)
  }

  /**
   * Get the list of your favorite TV shows.
   *
   * @see https://developers.themoviedb.org/3/account/get-favorite-tv-shows
   */
  public async favoriteTVShows(
    accountId: number,
    filters: AccountFavoriteTVShowsFilters
  ): Promise<AccountFavoriteTVShowsResponse> {
    const path = this.getPath(`/account/${accountId}/favorite/tv`, filters)

    return this.get<AccountFavoriteTVShowsResponse>(path)
  }

  /**
   * This method allows you to mark a movie or TV show as a favorite item.
   *
   * @see https://developers.themoviedb.org/3/account/mark-as-favorite
   */
  public async markAsFavorite(
    accountId: number,
    data: AccountMarkAsFavoriteBody,
    filters: AccountMarkAsFavoriteFilters
  ): Promise<AccountMarkAsFavoriteResponse> {
    const path = this.getPath(`/account/${accountId}/favorite`, filters)

    return this.post<AccountMarkAsFavoriteResponse>(path, data)
  }

  /**
   * Get a list of all the movies you have rated.
   *
   * @see https://developers.themoviedb.org/3/account/get-rated-movies
   */
  public async ratedMovies(
    accountId: number,
    filters: AccountRatedMoviesFilters
  ): Promise<AccountRatedMoviesResponse> {
    const path = this.getPath(`/account/${accountId}/rated/movies`, filters)

    return this.get<AccountRatedMoviesResponse>(path)
  }

  /**
   * Get a list of all the TV shows you have rated.
   *
   * @see https://developers.themoviedb.org/3/account/get-rated-tv-shows
   */
  public async ratedTVShows(
    accountId: number,
    filters: AccountRatedTVShowsFilters
  ): Promise<AccountRatedTVShowsResponse> {
    const path = this.getPath(`/account/${accountId}/rated/tv`, filters)

    return this.get<AccountRatedTVShowsResponse>(path)
  }

  /**
   * Get a list of all the TV episodes you have rated.
   *
   * @see https://developers.themoviedb.org/3/account/get-rated-tv-episodes
   */
  public async ratedTVEpisodes(
    accountId: number,
    filters: AccountRatedTVEpisodesFilters
  ): Promise<AccountRatedTVEpisodesResponse> {
    const path = this.getPath(
      `/account/${accountId}/rated/tv/episodes`,
      filters
    )

    return this.get<AccountRatedTVEpisodesResponse>(path)
  }

  /**
   * Get a list of all the movies you have added to your watchlist.
   *
   * @see https://developers.themoviedb.org/3/account/get-movies-watchlist
   */
  public async movieWatchlist(
    accountId: number,
    filters: AccountMovieWatchlistFilters
  ): Promise<AccountMovieWatchlistResponse> {
    const path = this.getPath(`/account/${accountId}/watchlist/movies`, filters)

    return this.get<AccountMovieWatchlistResponse>(path)
  }

  /**
   * Get a list of all the TV shows you have added to your watchlist.
   *
   * @see https://developers.themoviedb.org/3/account/get-tv-show-watchlist
   */
  public async tvShowWatchlist(
    accountId: number,
    filters: AccountTVShowWatchlistFilters
  ): Promise<AccountTVShowWatchlistResponse> {
    const path = this.getPath(`/account/${accountId}/watchlist/tv`, filters)

    return this.get<AccountTVShowWatchlistResponse>(path)
  }

  /**
   * Add a movie or TV show to your watchlist.
   *
   * @see https://developers.themoviedb.org/3/account/add-to-watchlist
   */
  public async addToWatchlist(
    accountId: number,
    data: AccountAddToWatchlistBody,
    filters: AccountAddToWatchlistFilters
  ): Promise<AccountAddToWatchlistResponse> {
    const path = this.getPath(`/account/${accountId}/watchlist`, filters)

    return this.post<AccountAddToWatchlistResponse>(path, data)
  }
}
