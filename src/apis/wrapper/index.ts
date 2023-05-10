import { TMDBOptions } from '../../types'
import { CertificationsAPI } from '../certifications'
import { ChangesAPI } from '../changes'
import { CollectionsAPI } from '../collections'
import { CompaniesAPI } from '../companies'
import { ConfigurationAPI } from '../configuration'
import { CreditsAPI } from '../credits'
import { DiscoverAPI } from '../discover'
import { GenresAPI } from '../genres'
import { MoviesAPI } from '../movies'
import { TrendingAPI } from '../trending'
import { FindAPI } from '../find'
import { GuestSessionsAPI } from '../guest-sessions'
import { KeywordsAPI } from '../keywords'
import { AccountAPI } from '../account'
import { AuthenticationAPI } from '../authentication'
import { ListsAPI } from '../lists'
import { NetworksAPI } from '../networks'
import { PeopleAPI } from '../people'
import { ReviewsAPI } from '../reviews'
import { SearchAPI } from '../search'
import { TVShowsAPI } from '../tv-shows'
import { WatchProvidersAPI } from '../watch-providers'
import { TVEpisodesAPI } from '../tv-episodes'
import { TVSeasonsAPI } from '../tv-seasons'
import { TVEpisodeGroupsAPI } from '../tv-episode-groups'

export class Wrapper {
  public account: AccountAPI
  public authentication: AuthenticationAPI
  public certifications: CertificationsAPI
  public changes: ChangesAPI
  public collections: CollectionsAPI
  public companies: CompaniesAPI
  public configuration: ConfigurationAPI
  public credits: CreditsAPI
  public discover: DiscoverAPI
  public find: FindAPI
  public genres: GenresAPI
  public guestSessions: GuestSessionsAPI
  public keywords: KeywordsAPI
  public lists: ListsAPI
  public movies: MoviesAPI
  public networks: NetworksAPI
  public people: PeopleAPI
  public reviews: ReviewsAPI
  public search: SearchAPI
  public trending: TrendingAPI
  public tvShows: TVShowsAPI
  public tvEpisodes: TVEpisodesAPI
  public tvSeasons: TVSeasonsAPI
  public tvEpisodeGroups: TVEpisodeGroupsAPI
  public watchProviders: WatchProvidersAPI

  constructor(options: TMDBOptions) {
    this.account = new AccountAPI(options)
    this.authentication = new AuthenticationAPI(options)
    this.certifications = new CertificationsAPI(options)
    this.changes = new ChangesAPI(options)
    this.collections = new CollectionsAPI(options)
    this.companies = new CompaniesAPI(options)
    this.configuration = new ConfigurationAPI(options)
    this.credits = new CreditsAPI(options)
    this.discover = new DiscoverAPI(options)
    this.find = new FindAPI(options)
    this.genres = new GenresAPI(options)
    this.guestSessions = new GuestSessionsAPI(options)
    this.keywords = new KeywordsAPI(options)
    this.lists = new ListsAPI(options)
    this.movies = new MoviesAPI(options)
    this.networks = new NetworksAPI(options)
    this.people = new PeopleAPI(options)
    this.reviews = new ReviewsAPI(options)
    this.search = new SearchAPI(options)
    this.trending = new TrendingAPI(options)
    this.tvShows = new TVShowsAPI(options)
    this.tvEpisodes = new TVEpisodesAPI(options)
    this.tvSeasons = new TVSeasonsAPI(options)
    this.tvEpisodeGroups = new TVEpisodeGroupsAPI(options)
    this.watchProviders = new WatchProvidersAPI(options)
  }
}
