import type { TMDBResponseList } from '../../types'
import type { MovieItem } from '../movies/types'
import type { TVShowItem } from '../tv-shows/types'
import type { PersonItem } from '../people/types'

// Responses
type MediaList = (MovieItem | TVShowItem | PersonItem)[]

export type TrendingResponse = TMDBResponseList<MediaList>
