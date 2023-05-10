import { BaseAPI } from '../base'
import {
  SearchCollectionsFilters,
  SearchCollectionsResponse,
  SearchCompaniesResponse,
  SearchKeywordsResponse,
  SearchMoviesFilters,
  SearchMoviesResponse,
  SearchMultiSearchFilters,
  SearchMultiSearchResponse,
  SearchPeopleFilters,
  SearchPeopleResponse,
  SearchFilters,
  SearchTVShowsFilters,
  SearchTVShowsResponse,
} from './types'

export class SearchAPI extends BaseAPI {
  /**
   * Search for companies.
   *
   * @see https://developers.themoviedb.org/3/search/search-companies
   */
  public async companies(
    filters: SearchFilters
  ): Promise<SearchCompaniesResponse> {
    const path = this.getPath('/search/company', filters)

    return this.get<SearchCompaniesResponse>(path)
  }

  /**
   * Search for collections.
   *
   * @see https://developers.themoviedb.org/3/search/search-collections
   */
  public async collections(
    filters: SearchCollectionsFilters
  ): Promise<SearchCollectionsResponse> {
    const path = this.getPath('/search/collection', filters)

    return this.get<SearchCollectionsResponse>(path)
  }

  /**
   * Search for keywords.
   *
   * @see https://developers.themoviedb.org/3/search/search-keywords
   */
  public async keywords(
    filters: SearchFilters
  ): Promise<SearchKeywordsResponse> {
    const path = this.getPath('/search/keyword', filters)

    return this.get<SearchKeywordsResponse>(path)
  }

  /**
   * Search for movies.
   *
   * @see https://developers.themoviedb.org/3/search/search-movies
   */
  public async movies(
    filters: SearchMoviesFilters
  ): Promise<SearchMoviesResponse> {
    const path = this.getPath('/search/movie', filters)

    return this.get<SearchMoviesResponse>(path)
  }

  /**
   * Search multiple models in a single request. Multi search currently supports searching for
   * movies, tv shows and people in a single request.
   *
   * @see https://developers.themoviedb.org/3/search/multi-search
   */
  public async multiSearch(
    filters: SearchMultiSearchFilters
  ): Promise<SearchMultiSearchResponse> {
    const path = this.getPath('/search/multi', filters)

    return this.get<SearchMultiSearchResponse>(path)
  }

  /**
   * Search for people.
   *
   * @see https://developers.themoviedb.org/3/search/search-people
   */
  public async people(
    filters: SearchPeopleFilters
  ): Promise<SearchPeopleResponse> {
    const path = this.getPath('/search/person', filters)

    return this.get<SearchPeopleResponse>(path)
  }

  /**
   * Search for a TV show.
   *
   * @see https://developers.themoviedb.org/3/search/search-tv-shows
   */
  public async tvShows(
    filters: SearchTVShowsFilters
  ): Promise<SearchTVShowsResponse> {
    const path = this.getPath('/search/tv', filters)

    return this.get<SearchTVShowsResponse>(path)
  }
}
