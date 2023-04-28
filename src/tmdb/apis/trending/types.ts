import { TMDBResponseList } from 'src/types'
import { MovieItem } from '../movies/types'
import { TVShow } from '../tv/types'
import { Person } from '../people/types'

type TVShowItem = TVShow & { media_type: 'tv' }
type PersonItem = Person & { media_type: 'person' }
type MediaList = (MovieItem | TVShowItem | PersonItem)[]

export type TrendingResponse = TMDBResponseList<MediaList>
