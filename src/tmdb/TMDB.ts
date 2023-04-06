import { TMDBOptions } from '../types/TMDBOptions'
import { Discover } from './apis/Discover'
import { Genres } from './apis/Genres'
import { Movies } from './apis/Movies'
import { Trending } from './apis/Trending'

export class TMDB {
  static API_URL_V3 = 'https://api.themoviedb.org/3'

  public discover: Discover
  public genres: Genres
  public movies: Movies
  public trending: Trending

  constructor(options: TMDBOptions) {
    if (!options.url) {
      options.url = TMDB.API_URL_V3
    }

    this.discover = new Discover(options)
    this.genres = new Genres(options)
    this.movies = new Movies(options)
    this.trending = new Trending(options)
  }
}
