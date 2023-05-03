import { Certifications } from '../apis/certifications'
import { Changes } from '../apis/changes'
import { Collections } from '../apis/collections'
import { Companies } from '../apis/companies'
import { Configuration } from '../apis/configuration'
import { Credits } from '../apis/credits'
import { Discover } from '../apis/discover'
import { Genres } from '../apis/genres'
import { Movies } from '../apis/movies'
import { Trending } from '../apis/trending'
import { Find } from '../apis/find'
import { GuestSessions } from '../apis/guest-sessions'
import { Keywords } from '../apis/keywords'
import { Account } from '../apis/account'
import { Authentication } from '../apis/authentication'
import { Lists } from '../apis/lists'
import { Networks } from '../apis/networks'
import { People } from '../apis/people'
import { Reviews } from '../apis/reviews'
import { WatchProviders } from '../apis/watch-providers'
import { Search } from '../apis/search'
import { TV } from '../apis/tv'
import { TVEpisodes } from '../apis/tv-episodes'
import { TVEpisodeGroups } from '../apis/tv-episode-groups'
import { TVSeasons } from '../apis/tv-seasons'
import { Wrapper } from '.'

describe('TMDB wrapper/client', () => {
  test('should has all namespaces properly', async () => {
    const tmdb = new Wrapper({ apiKey: 'API_KEY' })

    expect(tmdb.account).toBeInstanceOf(Account)
    expect(tmdb.authentication).toBeInstanceOf(Authentication)
    expect(tmdb.certifications).toBeInstanceOf(Certifications)
    expect(tmdb.changes).toBeInstanceOf(Changes)
    expect(tmdb.collections).toBeInstanceOf(Collections)
    expect(tmdb.companies).toBeInstanceOf(Companies)
    expect(tmdb.configuration).toBeInstanceOf(Configuration)
    expect(tmdb.credits).toBeInstanceOf(Credits)
    expect(tmdb.discover).toBeInstanceOf(Discover)
    expect(tmdb.find).toBeInstanceOf(Find)
    expect(tmdb.genres).toBeInstanceOf(Genres)
    expect(tmdb.guestSessions).toBeInstanceOf(GuestSessions)
    expect(tmdb.keywords).toBeInstanceOf(Keywords)
    expect(tmdb.lists).toBeInstanceOf(Lists)
    expect(tmdb.movies).toBeInstanceOf(Movies)
    expect(tmdb.networks).toBeInstanceOf(Networks)
    expect(tmdb.people).toBeInstanceOf(People)
    expect(tmdb.reviews).toBeInstanceOf(Reviews)
    expect(tmdb.search).toBeInstanceOf(Search)
    expect(tmdb.trending).toBeInstanceOf(Trending)
    expect(tmdb.tv).toBeInstanceOf(TV)
    expect(tmdb.tvEpisodes).toBeInstanceOf(TVEpisodes)
    expect(tmdb.tvSeasons).toBeInstanceOf(TVSeasons)
    expect(tmdb.tvEpisodeGroups).toBeInstanceOf(TVEpisodeGroups)
    expect(tmdb.watchProviders).toBeInstanceOf(WatchProviders)
  })
})