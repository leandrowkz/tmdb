import { BaseAPI } from '../../base-api'
import {
  CollectionsFilters,
  CollectionsResponse,
  CompaniesResponse,
  KeywordsResponse,
  MoviesFilters,
  MoviesResponse,
  MultiSearchFilters,
  MultiSearchResponse,
  PeopleFilters,
  PeopleResponse,
  SearchFilters,
  TVShowsFilters,
  TVShowsResponse,
} from './types'

export class Search extends BaseAPI {
  /**
   * Search for companies.
   *
   * @see https://developers.themoviedb.org/3/search/search-companies
   */
  public async companies(filters: SearchFilters): Promise<CompaniesResponse> {
    const path = this.getPath('/search/company', filters)

    return this.get<CompaniesResponse>(path)
  }

  /**
   * Search for collections.
   *
   * @see https://developers.themoviedb.org/3/search/search-collections
   */
  public async collections(
    filters: CollectionsFilters
  ): Promise<CollectionsResponse> {
    const path = this.getPath('/search/collection', filters)

    return this.get<CollectionsResponse>(path)
  }

  /**
   * Search for keywords.
   *
   * @see https://developers.themoviedb.org/3/search/search-keywords
   */
  public async keywords(filters: SearchFilters): Promise<KeywordsResponse> {
    const path = this.getPath('/search/keyword', filters)

    return this.get<KeywordsResponse>(path)
  }

  /**
   * Search for movies.
   *
   * @see https://developers.themoviedb.org/3/search/search-movies
   */
  public async movies(filters: MoviesFilters): Promise<MoviesResponse> {
    const path = this.getPath('/search/movie', filters)

    return this.get<MoviesResponse>(path)
  }

  /**
   * Search multiple models in a single request. Multi search currently supports searching for
   * movies, tv shows and people in a single request.
   *
   * @see https://developers.themoviedb.org/3/search/multi-search
   */
  public async multiSearch(
    filters: MultiSearchFilters
  ): Promise<MultiSearchResponse> {
    const path = this.getPath('/search/multi', filters)

    return this.get<MultiSearchResponse>(path)
  }

  /**
   * Search for people.
   *
   * @see https://developers.themoviedb.org/3/search/search-people
   */
  public async people(filters: PeopleFilters): Promise<PeopleResponse> {
    const path = this.getPath('/search/person', filters)

    return this.get<PeopleResponse>(path)
  }

  /**
   * Search for a TV show.
   *
   * @see https://developers.themoviedb.org/3/search/search-tv-shows
   */
  public async tvShows(filters: TVShowsFilters): Promise<TVShowsResponse> {
    const path = this.getPath('/search/tv', filters)

    return this.get<TVShowsResponse>(path)
  }
}
