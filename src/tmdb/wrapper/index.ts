import { TMDBOptions } from '../../types'
import { CertificationsAPI } from '../apis/certifications'
import { ChangesAPI } from '../apis/changes'
import { CollectionsAPI } from '../apis/collections'
import { CompaniesAPI } from '../apis/companies'
import { ConfigurationAPI } from '../apis/configuration'
import { CreditsAPI } from '../apis/credits'
import { DiscoverAPI } from '../apis/discover'
import { GenresAPI } from '../apis/genres'
import { MoviesAPI } from '../apis/movies'
import { TrendingAPI } from '../apis/trending'
import { FindAPI } from '../apis/find'
import { GuestSessionsAPI } from '../apis/guest-sessions'
import { KeywordsAPI } from '../apis/keywords'
import { AccountAPI } from '../apis/account'
import { AuthenticationAPI } from '../apis/authentication'
import { ListsAPI } from '../apis/lists'
import { NetworksAPI } from '../apis/networks'
import { PeopleAPI } from '../apis/people'
import { ReviewsAPI } from '../apis/reviews'
import { SearchAPI } from '../apis/search'
import { TVShowsAPI } from '../apis/tv-shows'
import { WatchProvidersAPI } from '../apis/watch-providers'
import { TVEpisodesAPI } from '../apis/tv-episodes'
import { TVSeasonsAPI } from '../apis/tv-seasons'
import { TVEpisodeGroupsAPI } from '../apis/tv-episode-groups'

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
