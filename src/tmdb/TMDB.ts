import { TMDBOptions } from '../types/TMDBOptions'
import { Certifications } from './apis/Certifications'
import { Changes } from './apis/Changes'
import { Collections } from './apis/Collections'
import { Companies } from './apis/Companies'
import { Configuration } from './apis/Configuration'
import { Discover } from './apis/Discover'
import { Genres } from './apis/Genres'
import { Movies } from './apis/Movies'
import { Trending } from './apis/Trending'

export class TMDB {
  static API_URL_V3 = 'https://api.themoviedb.org/3'

  public certifications: Certifications
  public changes: Changes
  public collections: Collections
  public companies: Companies
  public configuration: Configuration
  public discover: Discover
  public genres: Genres
  public movies: Movies
  public trending: Trending

  constructor(options: TMDBOptions) {
    if (!options.url) {
      options.url = TMDB.API_URL_V3
    }

    this.certifications = new Certifications(options)
    this.changes = new Changes(options)
    this.collections = new Collections(options)
    this.companies = new Companies(options)
    this.configuration = new Configuration(options)
    this.discover = new Discover(options)
    this.genres = new Genres(options)
    this.movies = new Movies(options)
    this.trending = new Trending(options)
  }
}
