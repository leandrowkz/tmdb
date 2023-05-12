import { DiscoverAPI } from '.'
import type { DiscoverMovieFilters, DiscoverTVShowFilters } from './types'

const makeSUT = () => {
  const movieFilters: DiscoverMovieFilters = {
    language: <const>'en-US',
    region: <const>'US',
    sort_by: 'popularity.asc',
    certification_country: 'AE',
    certification: 'APTA',
    'certification.lte': '16',
    'certification.gte': '18',
    include_adult: true,
    include_video: true,
    page: 40,
    primary_release_year: 2000,
    'primary_release_date.lte': '2020-12-10',
    'primary_release_date.gte': '2020-12-13',
    'release_date.lte': '2019-05-01',
    'release_date.gte': '2019-05-02',
    with_release_type: [1, 2, 4],
    year: 2020,
    'vote_count.gte': 1000,
    'vote_count.lte': 2000,
    'vote_average.gte': 3000,
    'vote_average.lte': 4000,
    with_cast: ['PERSON_1', 'PERSON_2'],
    with_crew: ['PERSON_4', 'PERSON_5'],
    with_people: ['PERSON_6', 'PERSON_7'],
    with_companies: ['COMPANY_1', 'COMPANY_2'],
    without_companies: ['COMPANY_3', 'COMPANY_4'],
    with_genres: ['GENRE_1', 'GENRE_2'],
    without_genres: ['GENRE_3', 'GENRE_4'],
    with_keywords: ['KEYWORD_1', 'KEYWORD_2'],
    without_keyword: ['KEYWORD_3', 'KEYWORD_4'],
    'with_runtime.gte': 120,
    'with_runtime.lte': 180,
    with_original_language: 'en-US',
    with_watch_providers: ['PROVIDER_1', 'PROVIDER_2'],
    watch_region: 'BR',
    with_watch_monetization_types: 'flatrate',
  }

  const tvFilters: DiscoverTVShowFilters = {
    language: <const>'en-US',
    'air_date.gte': '2020-01-02',
    'air_date.lte': '2020-01-03',
    'first_air_date.gte': '2019-02-01',
    'first_air_date.lte': '2019-02-02',
    first_air_date_year: 1999,
    sort_by: 'popularity.asc',
    page: 40,
    timezone: 'America/Sao_Paulo',
    'vote_count.gte': 1000,
    'vote_average.gte': 3000,
    with_genres: ['GENRE_1', 'GENRE_2'],
    with_networks: ['NETWORK_1', 'NETWORK_2'],
    without_genres: ['GENRE_3', 'GENRE_4'],
    'with_runtime.gte': 120,
    'with_runtime.lte': 180,
    include_null_first_air_dates: true,
    with_original_language: 'en-US',
    without_keywords: ['KEYWORD_3', 'KEYWORD_4'],
    screened_theatrically: true,
    with_companies: ['COMPANY_1', 'COMPANY_2'],
    with_keywords: ['KEYWORD_1', 'KEYWORD_2'],
    with_watch_providers: ['PROVIDER_1', 'PROVIDER_2'],
    watch_region: 'BR',
    with_watch_monetization_types: 'flatrate',
    with_status: ['0', '5'],
    with_type: ['1', '4'],
    without_companies: ['COMPANY_3', 'COMPANY_4'],
  }

  const filters = {
    movies: movieFilters,
    tv: tvFilters,
  }

  const api = new DiscoverAPI({
    url: 'URL',
    apiKey: 'API_KEY',
  })

  api['get'] = jest.fn()

  return { api, filters }
}

describe('Discover API', () => {
  test('movies should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.movies(filters.movies)

    expect(api['get']).toHaveBeenCalledWith(
      '/discover/movie?language=en-US&region=US&sort_by=popularity.asc&certification_country=AE&certification=APTA&certification.lte=16&certification.gte=18&include_adult=true&include_video=true&page=40&primary_release_year=2000&primary_release_date.lte=2020-12-10&primary_release_date.gte=2020-12-13&release_date.lte=2019-05-01&release_date.gte=2019-05-02&with_release_type=1%2C2%2C4&year=2020&vote_count.gte=1000&vote_count.lte=2000&vote_average.gte=3000&vote_average.lte=4000&with_cast=PERSON_1%2CPERSON_2&with_crew=PERSON_4%2CPERSON_5&with_people=PERSON_6%2CPERSON_7&with_companies=COMPANY_1%2CCOMPANY_2&without_companies=COMPANY_3%2CCOMPANY_4&with_genres=GENRE_1%2CGENRE_2&without_genres=GENRE_3%2CGENRE_4&with_keywords=KEYWORD_1%2CKEYWORD_2&without_keyword=KEYWORD_3%2CKEYWORD_4&with_runtime.gte=120&with_runtime.lte=180&with_original_language=en-US&with_watch_providers=PROVIDER_1%2CPROVIDER_2&watch_region=BR&with_watch_monetization_types=flatrate&api_key=API_KEY'
    )
  })

  test('tv should call TMDB URL properly', async () => {
    const { api, filters } = makeSUT()

    await api.tv(filters.tv)

    expect(api['get']).toHaveBeenCalledWith(
      '/discover/tv?language=en-US&air_date.gte=2020-01-02&air_date.lte=2020-01-03&first_air_date.gte=2019-02-01&first_air_date.lte=2019-02-02&first_air_date_year=1999&sort_by=popularity.asc&page=40&timezone=America%2FSao_Paulo&vote_count.gte=1000&vote_average.gte=3000&with_genres=GENRE_1%2CGENRE_2&with_networks=NETWORK_1%2CNETWORK_2&without_genres=GENRE_3%2CGENRE_4&with_runtime.gte=120&with_runtime.lte=180&include_null_first_air_dates=true&with_original_language=en-US&without_keywords=KEYWORD_3%2CKEYWORD_4&screened_theatrically=true&with_companies=COMPANY_1%2CCOMPANY_2&with_keywords=KEYWORD_1%2CKEYWORD_2&with_watch_providers=PROVIDER_1%2CPROVIDER_2&watch_region=BR&with_watch_monetization_types=flatrate&with_status=0%2C5&with_type=1%2C4&without_companies=COMPANY_3%2CCOMPANY_4&api_key=API_KEY'
    )
  })
})
