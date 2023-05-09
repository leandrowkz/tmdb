import { TMDBResponseList } from 'src/types'
import { MovieItem } from '../movies/types'
import { TVShowItem } from '../tv-shows/types'
import { PersonItem } from '../people/types'

// Responses
type MediaList = (MovieItem | TVShowItem | PersonItem)[]

export type TrendingResponse = TMDBResponseList<MediaList>
