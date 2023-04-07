import { TMDBOptions } from 'src/types/TMDBOptions'
import { TMDB } from './TMDB'
import { Certifications } from './apis/Certifications'
import { Changes } from './apis/Changes'
import { Collections } from './apis/Collections'
import { Companies } from './apis/Companies'
import { Configuration } from './apis/Configuration'
import { Credits } from './apis/Credits'
import { Discover } from './apis/Discover'
import { Genres } from './apis/Genres'
import { Movies } from './apis/Movies'
import { Trending } from './apis/Trending'

describe('TMDB client', () => {
  test('should set API url with default value', async () => {
    const options: TMDBOptions = { apiKey: 'API_KEY' }

    new TMDB(options)

    expect(options.url).toBe(TMDB.API_URL_V3)
  })

  test('should has all namespaces properly', async () => {
    const tmdb = new TMDB({ apiKey: 'API_KEY' })

    expect(tmdb.certifications).toBeInstanceOf(Certifications)
    expect(tmdb.changes).toBeInstanceOf(Changes)
    expect(tmdb.collections).toBeInstanceOf(Collections)
    expect(tmdb.companies).toBeInstanceOf(Companies)
    expect(tmdb.configuration).toBeInstanceOf(Configuration)
    expect(tmdb.credits).toBeInstanceOf(Credits)
    expect(tmdb.discover).toBeInstanceOf(Discover)
    expect(tmdb.genres).toBeInstanceOf(Genres)
    expect(tmdb.movies).toBeInstanceOf(Movies)
    expect(tmdb.trending).toBeInstanceOf(Trending)
  })
})
