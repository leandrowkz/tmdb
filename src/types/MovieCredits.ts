import { Person } from './Person'

export type MovieCredits = {
  id: string
  cast: Person[]
  crew: Person[]
}
