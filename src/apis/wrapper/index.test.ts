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
import { WatchProvidersAPI } from '../watch-providers'
import { SearchAPI } from '../search'
import { TVShowsAPI } from '../tv-shows'
import { TVEpisodesAPI } from '../tv-episodes'
import { TVEpisodeGroupsAPI } from '../tv-episode-groups'
import { TVSeasonsAPI } from '../tv-seasons'
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
