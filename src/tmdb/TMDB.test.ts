import { TMDBOptions } from 'src/types/TMDBOptions'
import { TMDB } from './TMDB'
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
import { Account } from './apis/account'
import { Authentication } from './apis/authentication'
import { Lists } from './apis/lists'
import { Networks } from './apis/networks'
import { People } from './apis/people'
import { Reviews } from './apis/reviews'

describe('TMDB client', () => {
  test('should set API url with default value', async () => {
    const options: TMDBOptions = { apiKey: 'API_KEY' }

    new TMDB(options)

    expect(options.url).toBe(TMDB.API_URL_V3)
  })

  test('should has all namespaces properly', async () => {
    const tmdb = new TMDB({ apiKey: 'API_KEY' })

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
    expect(tmdb.trending).toBeInstanceOf(Trending)
  })
})
