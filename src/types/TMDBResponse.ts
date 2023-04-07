import { TMDBResponseError } from './TMDBResponseError'

export type TMDBResponse<Response> = Response | TMDBResponseError
