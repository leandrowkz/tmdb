import { TMDBResponseList } from 'src/types'
import { MovieItem } from '../movies/types'
import { TVShowItem } from '../tv/types'
import { PersonItem } from '../people/types'

type MediaList = (MovieItem | TVShowItem | PersonItem)[]

export type TrendingResponse = TMDBResponseList<MediaList>
