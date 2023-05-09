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
import { WatchProvidersAPI } from '../apis/watch-providers'
import { SearchAPI } from '../apis/search'
import { TVShowsAPI } from '../apis/tv-shows'
import { TVEpisodesAPI } from '../apis/tv-episodes'
import { TVEpisodeGroupsAPI } from '../apis/tv-episode-groups'
import { TVSeasonsAPI } from '../apis/tv-seasons'
import { Wrapper } from '.'

describe('TMDB wrapper/client', () => {
  test('should has all namespaces properly', async () => {
    const tmdb = new Wrapper({ apiKey: 'API_KEY' })

    expect(tmdb.account).toBeInstanceOf(AccountAPI)
    expect(tmdb.authentication).toBeInstanceOf(AuthenticationAPI)
    expect(tmdb.certifications).toBeInstanceOf(CertificationsAPI)
    expect(tmdb.changes).toBeInstanceOf(ChangesAPI)
    expect(tmdb.collections).toBeInstanceOf(CollectionsAPI)
    expect(tmdb.companies).toBeInstanceOf(CompaniesAPI)
    expect(tmdb.configuration).toBeInstanceOf(ConfigurationAPI)
    expect(tmdb.credits).toBeInstanceOf(CreditsAPI)
    expect(tmdb.discover).toBeInstanceOf(DiscoverAPI)
    expect(tmdb.find).toBeInstanceOf(FindAPI)
    expect(tmdb.genres).toBeInstanceOf(GenresAPI)
    expect(tmdb.guestSessions).toBeInstanceOf(GuestSessionsAPI)
    expect(tmdb.keywords).toBeInstanceOf(KeywordsAPI)
    expect(tmdb.lists).toBeInstanceOf(ListsAPI)
    expect(tmdb.movies).toBeInstanceOf(MoviesAPI)
    expect(tmdb.networks).toBeInstanceOf(NetworksAPI)
    expect(tmdb.people).toBeInstanceOf(PeopleAPI)
    expect(tmdb.reviews).toBeInstanceOf(ReviewsAPI)
    expect(tmdb.search).toBeInstanceOf(SearchAPI)
    expect(tmdb.trending).toBeInstanceOf(TrendingAPI)
    expect(tmdb.tvShows).toBeInstanceOf(TVShowsAPI)
    expect(tmdb.tvEpisodes).toBeInstanceOf(TVEpisodesAPI)
    expect(tmdb.tvSeasons).toBeInstanceOf(TVSeasonsAPI)
    expect(tmdb.tvEpisodeGroups).toBeInstanceOf(TVEpisodeGroupsAPI)
    expect(tmdb.watchProviders).toBeInstanceOf(WatchProvidersAPI)
  })
})
