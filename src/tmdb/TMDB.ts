import { TMDBOptions } from '../types/TMDBOptions'
import { Certifications } from './apis/certifications'
import { Changes } from './apis/changes'
import { Collections } from './apis/collections'
import { Companies } from './apis/companies'
import { Configuration } from './apis/configuration'
import { Credits } from './apis/credits'
import { Discover } from './apis/discover'
import { Genres } from './apis/genres'
import { Movies } from './apis/movies'
import { Trending } from './apis/trending'
import { Find } from './apis/find'
import { GuestSessions } from './apis/guest-sessions'
import { Keywords } from './apis/keywords'

export class TMDB {
  static API_URL_V3 = 'https://api.themoviedb.org/3'

  public certifications: Certifications
  public changes: Changes
  public collections: Collections
  public companies: Companies
  public configuration: Configuration
  public credits: Credits
  public discover: Discover
  public find: Find
  public genres: Genres
  public guestSessions: GuestSessions
  public keywords: Keywords
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
    this.credits = new Credits(options)
    this.discover = new Discover(options)
    this.find = new Find(options)
    this.genres = new Genres(options)
    this.guestSessions = new GuestSessions(options)
    this.keywords = new Keywords(options)
    this.movies = new Movies(options)
    this.trending = new Trending(options)
  }
}
