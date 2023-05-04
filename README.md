# 📦 🎥 TMDB TypeScript client
This package is a TS wrapper client for [The Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction). It provides an easy way to use and access TMDB
available apis at version 3.

![Autocomplete TMDB](./autocomplete.gif)

## Installation
```ts
// Using npm
npm i @leandrowkz/tmdb

// Using yarn
yarn add @leandrowkz/tmdb
```

## Basic usage
Access the APIs through a single wrapper or by creating instances for each API.

### Using wrapper
```ts
import { TMDB } from '@leandrowkz/tmdb'

const tmdb = new TMDB({ apiKey: 'CREATED_ON_TMDB' })

const fightClub = await tmdb.movies.details(550)

console.log(fightClub)

{
  "id": 550,
  "imdb_id": "tt0137523",
  "tagline": "How much can you know about yourself if you've never been in a fight?",
  "title": "Fight Club",
  "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
  "backdrop_path": "/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg",
  "poster_path": null,
  // ...
}
```

### Using isolated APIs
```ts
import { Movies } from '@leandrowkz/tmdb'

const movies = new Movies({ apiKey: 'CREATED_ON_TMDB' })

const fightClub = await movies.details(550)

console.log(fightClub)

{
  "id": 550,
  "imdb_id": "tt0137523",
  "tagline": "How much can you know about yourself if you've never been in a fight?",
  "title": "Fight Club",
  "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
  "backdrop_path": "/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg",
  "poster_path": null,
  // ...
}
```

## Available APIs
This library provides classes to access all [TMDB APIs on version 3](https://developers.themoviedb.org/3). The
following list shows all library APIs, how to use them and the available methods. Click on the API
you want to see to check the API documentation.

Since this package is written on TS you will get autocomplete out of the box.

| API               | TMDB Docs                                             | Access                  | Status |
|-------------------|-------------------------------------------------------|-------------------------|--------|
| Account           | https://developers.themoviedb.org/3/account           | `tmdb.account.*`        | ✅     |
| Authentication    | https://developers.themoviedb.org/3/authentication    | `tmdb.authentication.*` | ✅     |
| Certifications    | https://developers.themoviedb.org/3/certifications    | `tmdb.certifications.*` | ✅     |
| Changes           | https://developers.themoviedb.org/3/changes           | `tmdb.changes.*`        | ✅     |
| Collections       | https://developers.themoviedb.org/3/collections       | `tmdb.collections.*`    | ✅     |
| Companies         | https://developers.themoviedb.org/3/companies         | `tmdb.certifications.*` | ✅     |
| Configuration     | https://developers.themoviedb.org/3/configuration     | `tmdb.configuration.*`  | ✅     |
| Credits           | https://developers.themoviedb.org/3/credits           | `tmdb.credits.*`        | ✅     |
| Discover          | https://developers.themoviedb.org/3/discover          | `tmdb.discover.*`       | ✅     |
| Find              | https://developers.themoviedb.org/3/find              | `tmdb.find.*`           | ✅     |
| Genres            | https://developers.themoviedb.org/3/genres            | `tmdb.genres.*`         | ✅     |
| Guest Sessions    | https://developers.themoviedb.org/3/guest-sessions    | `tmdb.guestSessions.*`  | ✅     |
| Keywords          | https://developers.themoviedb.org/3/keywords          | `tmdb.keywords.*`       | ✅     |
| Lists             | https://developers.themoviedb.org/3/lists             | `tmdb.lists.*`          | ✅     |
| Movies            | https://developers.themoviedb.org/3/movies            | `tmdb.movies.*`         | ✅     |
| Networks          | https://developers.themoviedb.org/3/networks          | `tmdb.networks.*`       | ✅     |
| Trending          | https://developers.themoviedb.org/3/trending          | `tmdb.trending.*`       | ✅     |
| People            | https://developers.themoviedb.org/3/people            | `tmdb.people.*`         | ✅     |
| Reviews           | https://developers.themoviedb.org/3/reviews           | `tmdb.reviews.*`        | ✅     |
| Search            | https://developers.themoviedb.org/3/search            | `tmdb.search.*`         | ✅     |
| TV                | https://developers.themoviedb.org/3/tv                | `tmdb.tv.*`             | ✅     |
| TV Episodes       | https://developers.themoviedb.org/3/tv-episodes       | `tmdb.tvEpisodes.*`     | ✅     |
| TV Seasons        | https://developers.themoviedb.org/3/tv-seasons        | `tmdb.tvSeasons.*`      | ✅     |
| TV Episode Groups | https://developers.themoviedb.org/3/tv-episode-groups | `tmdb.tvEpisodeGroups.*`| ✅     |
| Watch Providers   | https://developers.themoviedb.org/3/watch-providers   | `tmdb.watchProviders.*` | ✅     |

### Account
TMDB documentation: https://developers.themoviedb.org/3/account

```ts
import { Account } from '@leandrowkz/tmdb'

const account = new Account({ apiKey: 'TMDB_APIKEY' })

account.*
```

| Methods               | Parameters                                                                                  | TMDB docs                                                         |
|-----------------------|---------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| **`details`**         | `filters: DetailsFilters`                                                                   | https://developers.themoviedb.org/3/account/get-account-details   |
| **`createdLists`**    | `accountId: number`<br /> `filters: CreatedListsFilters`                                    | https://developers.themoviedb.org/3/account/get-created-lists     |
| **`favoriteMovies`**  | `accountId: number`<br /> `filters: FavoriteMoviesFilters`                                  | https://developers.themoviedb.org/3/account/get-favorite-movies   |
| **`favoriteTVShows`** | `accountId: number`<br /> `filters: FavoriteTVShowsFilters`                                 | https://developers.themoviedb.org/3/account/get-favorite-tv-shows |
| **`markAsFavorite`**  | `accountId: number`<br /> `data: MarkAsFavoriteBody`<br /> `filters: MarkAsFavoriteFilters` | https://developers.themoviedb.org/3/account/mark-as-favorite      |
| **`ratedMovies`**     | `accountId: number`<br /> `filters: RatedMoviesFilters`                                     | https://developers.themoviedb.org/3/account/get-rated-movies      |
| **`ratedTVShows`**    | `accountId: number`<br /> `filters: RatedTVShowsFilters`                                    | https://developers.themoviedb.org/3/account/get-rated-tv-shows    |
| **`ratedTVEpisodes`** | `accountId: number`<br /> `filters: RatedTVEpisodesFilters`                                 | https://developers.themoviedb.org/3/account/get-rated-tv-episodes |
| **`movieWatchlist`**  | `accountId: number`<br /> `filters: MovieWatchlistFilters`                                  | https://developers.themoviedb.org/3/account/get-movies-watchlist  |
| **`tvShowWatchlist`** | `accountId: number`<br /> `filters: TVShowWatchlistFilters`                                 | https://developers.themoviedb.org/3/account/get-tv-show-watchlist |
| **`addToWatchlist`**  | `accountId: number`<br /> `data: AddToWatchlistBody`<br /> `filters: AddToWatchlistFilters` | https://developers.themoviedb.org/3/account/add-to-watchlist      |


### Authentication
TMDB documentation: https://developers.themoviedb.org/3/authentication

```ts
import { Authentication } from '@leandrowkz/tmdb'

const auth = new Authentication({ apiKey: 'TMDB_APIKEY' })

auth.*
```

| Methods                      | Parameters                         | TMDB docs                                                               |
|------------------------------|------------------------------------|-------------------------------------------------------------------------|
| **`createGuestSession`**     | `-`                                | https://developers.themoviedb.org/3/authentication/create-guest-session |
| **`createRequestToken`**     | `-`                                | https://developers.themoviedb.org/3/authentication/create-request-token |
| **`createSession`**          | `data: CreateSessionBody`          | https://developers.themoviedb.org/3/authentication/create-session |
| **`createSessionWithLogin`** | `data: CreateSessionWithLoginBody` | https://developers.themoviedb.org/3/authentication/validate-request-token |
| **`createSessionConvertV4`** | `data: CreateSessionConvertV4Body` | https://developers.themoviedb.org/3/authentication/create-session-from-v4-access-token |
| **`deleteSession`**          | `data: DeleteSessionBody`          | https://developers.themoviedb.org/3/authentication/delete-session |

### Certifications
TMDB documentation: https://developers.themoviedb.org/3/certifications

```ts
import { Certifications } from '@leandrowkz/tmdb'

const certifications = new Certifications({ apiKey: 'TMDB_APIKEY' })

certifications.*
```

| Methods     | Parameters | TMDB docs                                                                   |
|-------------|------------|-----------------------------------------------------------------------------|
| **`movie`** | `-`        | https://developers.themoviedb.org/3/certifications/get-movie-certifications |
| **`tv`**    | `-`        | https://developers.themoviedb.org/3/certifications/get-tv-certifications    |

### Changes
TMDB documentation: https://developers.themoviedb.org/3/changes

```ts
import { Changes } from '@leandrowkz/tmdb'

const changes = new Changes({ apiKey: 'TMDB_APIKEY' })

changes.*
```

| Methods      | Parameters                 | TMDB docs                                                                   |
|--------------|----------------------------|-----------------------------------------------------------------------------|
| **`movie`**  | `filters?: ChangesFilters` | https://developers.themoviedb.org/3/changes/get-movie-change-list |
| **`tv`**     | `filters?: ChangesFilters` | https://developers.themoviedb.org/3/changes/get-tv-change-list |
| **`person`** | `filters?: ChangesFilters` | https://developers.themoviedb.org/3/changes/get-person-change-list |

### Collections
TMDB documentation: https://developers.themoviedb.org/3/collections

```ts
import { Collections } from '@leandrowkz/tmdb'

const collections = new Collections({ apiKey: 'TMDB_APIKEY' })

collections.*
```

| Methods            | Parameters                 | TMDB docs                                                                   |
|--------------------|----------------------------|-----------------------------------------------------------------------------|
| **`details`**      | `collectionId: number`<br />`filters?: CollectionsFilters` | https://developers.themoviedb.org/3/collections/get-collection-details |
| **`images`**       | `collectionId: number`<br />`filters?: CollectionsFilters` | https://developers.themoviedb.org/3/collections/get-collection-images |
| **`translations`** | `collectionId: number`<br />`filters?: CollectionsFilters` | https://developers.themoviedb.org/3/collections/get-collection-translations |

### Companies
TMDB documentation: https://developers.themoviedb.org/3/companies

```ts
import { Companies } from '@leandrowkz/tmdb'

const companies = new Companies({ apiKey: 'TMDB_APIKEY' })

companies.*
```

| Methods                | Parameters          | TMDB docs                                                                   |
|------------------------|---------------------|-----------------------------------------------------------------------------|
| **`details`**          | `companyId: number` | https://developers.themoviedb.org/3/companies/get-company-details |
| **`alternativeNames`** | `companyId: number` | https://developers.themoviedb.org/3/companies/get-company-alternative-names |
| **`images`**           | `companyId: number` | https://developers.themoviedb.org/3/companies/get-company-images |

### Configuration
TMDB documentation: https://developers.themoviedb.org/3/configuration

```ts
import { Configuration } from '@leandrowkz/tmdb'

const configs = new Configuration({ apiKey: 'TMDB_APIKEY' })

configs.*
```

| Methods                   | Parameters | TMDB docs                                                                   |
|---------------------------|------------|-----------------------------------------------------------------------------|
| **`configuration`**       | `-`        | https://developers.themoviedb.org/3/configuration/get-api-configuration |
| **`countries`**           | `-`        | https://developers.themoviedb.org/3/configuration/get-countries |
| **`jobs`**                | `-`        | https://developers.themoviedb.org/3/configuration/get-jobs |
| **`languages`**           | `-`        | https://developers.themoviedb.org/3/configuration/get-languages |
| **`primaryTranslations`** | `-`        | https://developers.themoviedb.org/3/configuration/get-primary-translations |
| **`timezones`**           | `-`        | https://developers.themoviedb.org/3/configuration/get-timezones |

### Credits
TMDB documentation: https://developers.themoviedb.org/3/credits

```ts
import { Credits } from '@leandrowkz/tmdb'

const credits = new Credits({ apiKey: 'TMDB_APIKEY' })

credits.*
```

| Methods       | Parameters         | TMDB docs                                               |
|---------------|--------------------|---------------------------------------------------------|
| **`details`** | `creditId: number` | https://developers.themoviedb.org/3/credits/get-details |


### Discover
TMDB documentation: https://developers.themoviedb.org/3/discover

```ts
import { Configuration } from '@leandrowkz/tmdb'

const discover = new Discover({ apiKey: 'TMDB_APIKEY' })

discover.*
```

| Methods            | Parameters                | TMDB docs                                                   |
|--------------------|---------------------------|-------------------------------------------------------------|
| **`movies`**       | `filters?: MovieFilters`  | https://developers.themoviedb.org/3/discover/movie-discover |
| **`tv`**           | `filters?: TVShowFilters` | https://developers.themoviedb.org/3/discover/tv-discover |

### Find
TMDB documentation: https://developers.themoviedb.org/3/find

```ts
import { Find } from '@leandrowkz/tmdb'

const find = new Find({ apiKey: 'TMDB_APIKEY' })

find.*
```

| Methods    | Parameters                                      | TMDB docs                                           |
|------------|-------------------------------------------------|-----------------------------------------------------|
| **`find`** | `externalId: string`<br/>`filters: FindFilters` | https://developers.themoviedb.org/3/find/find-by-id |

### Genres
TMDB documentation: https://developers.themoviedb.org/3/genres

```ts
import { Genres } from '@leandrowkz/tmdb'

const genres = new Genres({ apiKey: 'TMDB_APIKEY' })

genres.*
```

| Methods     |  Parameters                 | TMDB docs                                                 |
|-------------|----------------------------|-----------------------------------------------------------|
| **`movie`** | `filters?: GenresFilters`  | https://developers.themoviedb.org/3/genres/get-movie-list |
| **`tv`**    | `filters?: GenresFilters`  | https://developers.themoviedb.org/3/genres/get-tv-list    |

### Guest Sessions
TMDB documentation: https://developers.themoviedb.org/3/guest-sessions

```ts
import { GuestSessions } from '@leandrowkz/tmdb'

const guestSessions = new GuestSessions({ apiKey: 'TMDB_APIKEY' })

guestSessions.*
```

| Methods    |  Parameters                 | TMDB docs                                                 |
|-------------|----------------------------|-----------------------------------------------------------|
| **`ratedMovies`**     | `guestSessionId: string`<br/>`filters?: RatedFilters` | https://developers.themoviedb.org/3/guest-sessions/get-guest-session-rated-movies |
| **`ratedTVShows`**    | `guestSessionId: string`<br/>`filters?: RatedFilters` | https://developers.themoviedb.org/3/guest-sessions/get-guest-session-rated-tv-shows |
| **`ratedTVEpisodes`** | `guestSessionId: string`<br/>`filters?: RatedFilters` | https://developers.themoviedb.org/3/guest-sessions/get-guest-session-rated-tv-episodes |

### Keywords
TMDB documentation: https://developers.themoviedb.org/3/keywords

```ts
import { Keywords } from '@leandrowkz/tmdb'

const keywords = new Genres({ apiKey: 'TMDB_APIKEY' })

keywords.*
```

| Methods | Parameters | TMDB docs |
|---------|------------|-----------|
| **`details`** | `keywordId: string`                                | https://developers.themoviedb.org/3/keywords/get-keyword-details |
| **`movies`**  | `keywordId: string`<br/>`filters?: MoviesFilters`  | https://developers.themoviedb.org/3/keywords/get-movies-by-keyword |

### Lists
TMDB documentation: https://developers.themoviedb.org/3/lists

```ts
import { Lists } from '@leandrowkz/tmdb'

const lists = new Lists({ apiKey: 'TMDB_APIKEY' })

lists.*
```

| Methods | Parameters | TMDB docs |
|---------|------------|-----------|
| **`details`**    | `listId: string | number`<br/>`filters?: DetailsFilters`                              | https://developers.themoviedb.org/3/lists/get-list-details |
| **`itemStatus`** | `listId: string | number`<br/>`filters: ItemStatusFilters`                            | https://developers.themoviedb.org/3/lists/check-item-status |
| **`create`**     | `data: CreateListBody`<br/>`filters: CreateListFilters`                               | https://developers.themoviedb.org/3/lists/create-list |
| **`addItem`**    | `listId: string | number`<br/>`data: AddItemBody`<br/>`filters: AddItemFilters`       | https://developers.themoviedb.org/3/lists/add-movie |
| **`removeItem`** | `listId: string | number`<br/>`data: RemoveItemBody`<br/>`filters: RemoveItemFilters` | https://developers.themoviedb.org/3/lists/remove-movie |
| **`clear`**      | `listId: string | number`<br/>`filters: ClearListFilters`                             | https://developers.themoviedb.org/3/lists/clear-list |
| **`remove`**     | `listId: string | number`<br/>`filters: DeleteListFilters`                            | https://developers.themoviedb.org/3/lists/delete-list |

### Movies
TMDB documentation: https://developers.themoviedb.org/3/movies

```ts
import { Movies } from '@leandrowkz/tmdb'

const movies = new Movies({ apiKey: 'TMDB_APIKEY' })

movies.*
```

| Methods | Parameters | TMDB docs |
|---------|------------|-----------|
| **`details`**           | `movieId: number`<br/>`filters?: DetailsFilters`                   | https://developers.themoviedb.org/3/movies/get-movie-details |
| **`accountStates`**     | `movieId: number`<br/>`filters?: AccountStatesFilters`             | https://developers.themoviedb.org/3/movies/get-movie-account-states |
| **`alternativeTitles`** | `movieId: number`<br/>`filters?: AlternativeTitlesFilters`         | https://developers.themoviedb.org/3/movies/get-movie-alternative-titles |
| **`changes`**           | `movieId: number`<br/>`filters?: ChangesFilters`                   | https://developers.themoviedb.org/3/movies/get-movie-changes |
| **`credits`**           | `movieId: number`<br/>`filters?: CreditsFilters`                   | https://developers.themoviedb.org/3/movies/get-movie-credits |
| **`externalIds`**       | `movieId: number`                                                  | https://developers.themoviedb.org/3/movies/get-movie-external-ids |
| **`images`**            | `movieId: number`<br/>`filters?: ImagesFilters`                    | https://developers.themoviedb.org/3/movies/get-movie-images |
| **`keywords`**          | `movieId: number`                                                  | https://developers.themoviedb.org/3/movies/get-movie-keywords |
| **`lists`**             | `movieId: number`<br/>`filters?: ListsFilters`                     | https://developers.themoviedb.org/3/movies/get-movie-lists |
| **`recommendations`**   | `movieId: number`<br/>`filters?: RecommendationsFilters`           | https://developers.themoviedb.org/3/movies/get-movie-recommendations |
| **`releaseDates`**      | `movieId: number`                                                  | https://developers.themoviedb.org/3/movies/get-movie-release-dates |
| **`reviews`**           | `movieId: number`<br/>`filters?: ReviewsFilters`                   | https://developers.themoviedb.org/3/movies/get-movie-reviews |
| **`similar`**           | `movieId: number`<br/>`filters?: SimilarFilters`                   | https://developers.themoviedb.org/3/movies/get-similar-movies |
| **`translations`**      | `movieId: number`                                                  | https://developers.themoviedb.org/3/movies/get-movie-translations |
| **`videos`**            | `movieId: number`<br/>`filters?: VideosFilters`                    | https://developers.themoviedb.org/3/movies/get-movie-videos |
| **`watchProviders`**    | `movieId: number`                                                  | https://developers.themoviedb.org/3/movies/get-movie-watch-providers |
| **`rate`**              | `movieId: number`<br/>`body: RateBody`<br/>`filters?: RateFilters` | https://developers.themoviedb.org/3/movies/rate-movie |
| **`deleteRate`**        | `movieId: number`<br/>`filters?: RateFilters`                      | https://developers.themoviedb.org/3/movies/delete-movie-rating |
| **`latest`**            | `filters?: LatestFilters`                                          | https://developers.themoviedb.org/3/movies/get-latest-movie |
| **`nowPlaying`**        | `filters?: NowPlayingFilters`                                      | https://developers.themoviedb.org/3/movies/get-now-playing |
| **`popular`**           | `filters?: PopularFilters`                                         | https://developers.themoviedb.org/3/movies/get-popular-movies |
| **`topRated`**          | `filters?: TopRatedFilters`                                        | https://developers.themoviedb.org/3/movies/get-top-rated-movies |
| **`upcoming`**          | `filters?: UpcomingFilters`                                        | https://developers.themoviedb.org/3/movies/get-upcoming |

### Networks
TMDB documentation: https://developers.themoviedb.org/3/networks

```ts
import { Networks } from '@leandrowkz/tmdb'

const networks = new Networks({ apiKey: 'TMDB_APIKEY' })

networks.*
```

| Methods | Parameters | TMDB docs |
|---------|------------|-----------|
| **`details`**          | `networkId: number` | https://developers.themoviedb.org/3/networks/get-network-details |
| **`alternativeNames`** | `networkId: number` | https://developers.themoviedb.org/3/networks/get-network-alternative-names |
| **`images`**           | `networkId: number` | https://developers.themoviedb.org/3/networks/get-network-images |

### People
TMDB documentation: https://developers.themoviedb.org/3/people

```ts
import { People } from '@leandrowkz/tmdb'

const people = new People({ apiKey: 'TMDB_APIKEY' })

people.*
```

| Methods | Parameters | TMDB docs |
|---------|------------|-----------|
| **`details`**         | `personId: number`<br/>`filters?: DetailsFilters`         | https://developers.themoviedb.org/3/people/get-person-details |
| **`changes`**         | `personId: number`<br/>`filters?: ChangesFilters`         | https://developers.themoviedb.org/3/people/get-person-changes |
| **`movieCredits`**    | `personId: number`<br/>`filters?: LanguageFilters`        | https://developers.themoviedb.org/3/people/get-person-movie-credits |
| **`tvCredits`**       | `personId: number`<br/>`filters?: LanguageFilters`        | https://developers.themoviedb.org/3/people/get-person-tv-credits |
| **`combinedCredits`** | `personId: number`<br/>`filters?: LanguageFilters`        | https://developers.themoviedb.org/3/people/get-person-combined-credits |
| **`externalIds`**     | `personId: number`<br/>`filters?: LanguageFilters`        | https://developers.themoviedb.org/3/people/get-person-external-ids |
| **`images`**          | `personId: number`                                        | https://developers.themoviedb.org/3/people/get-person-images |
| **`taggedImages`**    | `personId: number`<br/>`filters?: LanguageAndPageFilters` | https://developers.themoviedb.org/3/people/get-tagged-images |
| **`translations`**    | `personId: number`<br/>`filters?: LanguageFilters`        | https://developers.themoviedb.org/3/people/get-person-translations |
| **`latest`**          | `filters?: LanguageFilters`                               | https://developers.themoviedb.org/3/people/get-latest-person |
| **`popular`**         | `filters?: PopularFilters`                                | https://developers.themoviedb.org/3/people/get-popular-people |

### Reviews
TMDB documentation: https://developers.themoviedb.org/3/reviews

```ts
import { Reviews } from '@leandrowkz/tmdb'

const reviews = new Reviews({ apiKey: 'TMDB_APIKEY' })

reviews.*
```

| Methods | Parameters | TMDB docs |
|---------|------------|-----------|
| **`details`** | `reviewId: string` | https://developers.themoviedb.org/3/reviews/get-review-details |

### Search
TMDB documentation: https://developers.themoviedb.org/3/search

```ts
import { Search } from '@leandrowkz/tmdb'

const search = new Search({ apiKey: 'TMDB_APIKEY' })

search.*
```

| Methods | Parameters | TMDB docs |
|---------|------------|-----------|
| **`companies`**   | `filters: SearchFilters`      | https://developers.themoviedb.org/3/search/search-companies |
| **`collections`** | `filters: CollectionsFilters` | https://developers.themoviedb.org/3/search/search-collections |
| **`keywords`**    | `filters: SearchFilters`      | https://developers.themoviedb.org/3/search/search-keywords |
| **`movies`**      | `filters: MoviesFilters`      | https://developers.themoviedb.org/3/search/search-movies |
| **`multiSearch`** | `filters: MultiSearchFilters` | https://developers.themoviedb.org/3/search/multi-search |
| **`people`**      | `filters: PeopleFilters`      | https://developers.themoviedb.org/3/search/search-people |
| **`tvShows`**     | `filters: TVShowsFilters`     | https://developers.themoviedb.org/3/search/search-tv-shows |

### Trending
TMDB documentation: https://developers.themoviedb.org/3/trending

```ts
import { Trending } from '@leandrowkz/tmdb'

const trending = new Trending({ apiKey: 'TMDB_APIKEY' })

trending.*
```

| Methods | Parameters | TMDB docs |
|---------|------------|-----------|
| **`getTrending`** | `mediaType: 'all' | 'movie' | 'tv' | 'person'`<br/>`timeWindow: 'day' | 'week'` | https://developers.themoviedb.org/3/trending/get-trending |

### TV
TMDB documentation: https://developers.themoviedb.org/3/tv

```ts
import { TV } from '@leandrowkz/tmdb'

const tv = new TV({ apiKey: 'TMDB_APIKEY' })

tv.*
```

| Methods | Parameters | TMDB docs |
|---------|------------|-----------|
| **`details`**              | `tvShowId: number`<br/>`filters?: DetailsFilters`                   | https://developers.themoviedb.org/3/tv/get-tv-details |
| **`accountStates`**        | `tvShowId: number`<br/>`filters?: AccountStatesFilters`             | https://developers.themoviedb.org/3/tv/get-tv-account-states |
| **`aggregateCredits`**     | `tvShowId: number`<br/>`filters?: AggregateCreditsFilters`          | https://developers.themoviedb.org/3/tv/get-tv-aggregate-credits |
| **`alternativeTitles`**    | `tvShowId: number`<br/>`filters?: AlternativeTitlesFilters`         | https://developers.themoviedb.org/3/tv/get-tv-alternative-titles |
| **`changes`**              | `tvShowId: number`<br/>`filters?: ChangesFilters`                   | https://developers.themoviedb.org/3/tv/get-tv-changes |
| **`contentRatings`**       | `tvShowId: number`<br/>`filters?: ContentRatingsFilters`            | https://developers.themoviedb.org/3/tv/get-tv-content-ratings |
| **`credits`**              | `tvShowId: number`<br/>`filters?: CreditsFilters`                   | https://developers.themoviedb.org/3/tv/get-tv-credits |
| **`episodeGroups`**        | `tvShowId: number`<br/>`filters?: EpisodeGroupsFilters`             | https://developers.themoviedb.org/3/tv/get-tv-episode-groups |
| **`externalIds`**          | `tvShowId: number`<br/>`filters?: ExternalIdsFilters`               | https://developers.themoviedb.org/3/tv/get-tv-external-ids |
| **`images`**               | `tvShowId: number`<br/>`filters?: ImagesFilters`                    | https://developers.themoviedb.org/3/tv/get-tv-images |
| **`keywords`**             | `tvShowId: number`                                                  | https://developers.themoviedb.org/3/tv/get-tv-keywords |
| **`recommendations`**      | `tvShowId: number`<br/>`filters?: RecommendationsFilters`           | https://developers.themoviedb.org/3/tv/get-tv-recommendations |
| **`reviews`**              | `tvShowId: number`<br/>`filters?: ReviewsFilters`                   | https://developers.themoviedb.org/3/tv/get-tv-reviews |
| **`screenedTheatrically`** | `tvShowId: number`                                                  | https://developers.themoviedb.org/3/tv/get-screened-theatrically |
| **`similar`**              | `tvShowId: number`<br/>`filters?: SimilarFilters`                   | https://developers.themoviedb.org/3/tv/get-similar-tv-shows |
| **`translations`**         | `tvShowId: number`                                                  | https://developers.themoviedb.org/3/tv/get-tv-translations |
| **`videos`**               | `tvShowId: number`<br/>`filters?: VideosFilters`                    | https://developers.themoviedb.org/3/tv/get-tv-videos |
| **`watchProviders`**       | `tvShowId: number`                                                  | https://developers.themoviedb.org/3/tv/get-tv-watch-providers |
| **`rateTVShow`**           | `tvShowId: number`<br/>`body: RateBody`<br/>`filters?: RateFilters` | https://developers.themoviedb.org/3/tv/rate-tv-show |
| **`deleteTVShowRate`**     | `tvShowId: number`<br/>`filters?: RateFilters`                      | https://developers.themoviedb.org/3/tv/delete-tv-show-rating |
| **`latest`**               | `filters?: LatestFilters`                                           | https://developers.themoviedb.org/3/tv/get-latest-tv |
| **`airingToday`**          | `filters?: AiringTodayFilters`                                      | https://developers.themoviedb.org/3/tv/get-tv-airing-today |
| **`onTheAir`**             | `filters?: OnTheAirFilters`                                         | https://developers.themoviedb.org/3/tv/get-tv-airing-today |
| **`popular`**              | `filters?: PopularFilters`                                          | https://developers.themoviedb.org/3/tv/get-popular-tv-shows |
| **`topRated`**             | `filters?: TopRatedFilters`                                         | https://developers.themoviedb.org/3/tv/get-top-rated-tv |

### TV Episode Groups
TMDB documentation: https://developers.themoviedb.org/3/tv-episode-groups/

```ts
import { TVEpisodeGroups } from '@leandrowkz/tmdb'

const tvEpisodeGroups = new TVEpisodeGroups({ apiKey: 'TMDB_APIKEY' })

tvEpisodeGroups.*
```

| Methods | Parameters | TMDB docs |
|---------|------------|-----------|
| **`details`** | `episodeGroupId: number`<br/>`filters?: DetailsFilters` | https://developers.themoviedb.org/3/tv-episode-groups/get-tv-episode-group-details |

### TV Episodes
TMDB documentation: https://developers.themoviedb.org/3/tv-episodes

```ts
import { TVEpisodes } from '@leandrowkz/tmdb'

const tvEpisodes = new TVEpisodes({ apiKey: 'TMDB_APIKEY' })

tvEpisodes.*
```

| Methods | Parameters | TMDB docs |
|---------|------------|-----------|
| **`details`**             | `tvShowId: number`<br/>`season: number`<br/>`episode: number`<br/>`filters?: DetailsFilters`                   | https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-details |
| **`accountStates`**       | `tvShowId: number`<br/>`season: number`<br/>`episode: number`<br/>`filters?: AccountStatesFilters`             | https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-account-states |
| **`changes`**             | `tvShowId: number`<br/>`filters?: ChangesFilters`                                                              | https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-changes |
| **`credits`**             | `tvShowId: number`<br/>`season: number`<br/>`episode: number`<br/>`filters?: CreditsFilters`                   | https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-credits |
| **`externalIds`**         | `tvShowId: number`<br/>`season: number`<br/>`episode: number`                                                  | https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-external-ids |
| **`images`**              | `tvShowId: number`<br/>`season: number`<br/>`episode: number`<br/>`filters?: ImagesFilters`                    | https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-images |
| **`translations`**        | `tvShowId: number`<br/>`season: number`<br/>`episode: number`                                                  | https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-translations |
| **`videos`**              | `tvShowId: number`<br/>`season: number`<br/>`episode: number`<br/>`filters?: VideosFilters`                    | https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-videos |
| **`rateTVEpisode`**       | `tvShowId: number`<br/>`season: number`<br/>`episode: number`<br/>`body: RateBody`<br/>`filters?: RateFilters` | https://developers.themoviedb.org/3/tv-episodes/rate-tv-episode |
| **`deleteTVEpisodeRate`** | `tvShowId: number`<br/>`season: number`<br/>`episode: number`<br/>`filters?: RateFilters`                      | https://developers.themoviedb.org/3/tv-episodes/delete-tv-episode-rating |

### TV Seasons
TMDB documentation: https://developers.themoviedb.org/3/tv-seasons

```ts
import { TVSeasons } from '@leandrowkz/tmdb'

const tvSeasons = new TVSeasons({ apiKey: 'TMDB_APIKEY' })

tvSeasons.*
```

| Methods | Parameters | TMDB docs |
|---------|------------|-----------|
| **`details`**          | `tvShowId: number`<br/>`seasonNumber: number`<br/>`filters?: DetailsFilters`          | https://developers.themoviedb.org/3/tv-seasons/get-tv-season-details |
| **`accountStates`**    | `tvShowId: number`<br/>`seasonNumber: number`<br/>`filters?: AccountStatesFilters`    | https://developers.themoviedb.org/3/tv-seasons/get-tv-season-account-states |
| **`aggregateCredits`** | `tvShowId: number`<br/>`seasonNumber: number`<br/>`filters?: AggregateCreditsFilters` | https://developers.themoviedb.org/3/tv-seasons/get-tv-season-aggregate-credits |
| **`changes`**          | `tvShowId: number`<br/>`seasonNumber: number`<br/>`filters?: ChangesFilters`          | https://developers.themoviedb.org/3/tv-seasons/get-tv-season-changes |
| **`credits`**          | `tvShowId: number`<br/>`seasonNumber: number`<br/>`filters?: CreditsFilters`          | https://developers.themoviedb.org/3/tv-seasons/get-tv-season-credits |
| **`externalIds`**      | `tvShowId: number`<br/>`seasonNumber: number`<br/>`filters?: ExternalIdsFilters`      | https://developers.themoviedb.org/3/tv-seasons/get-tv-season-external-ids |
| **`images`**           | `tvShowId: number`<br/>`seasonNumber: number`<br/>`filters?: ImagesFilters`           | https://developers.themoviedb.org/3/tv-seasons/get-tv-season-images |
| **`translations`**     | `tvShowId: number`<br/>`seasonNumber: number`<br/>`filters?: TranslationFilters`      | https://developers.themoviedb.org/3/tv-seasons/get-tv-season-translations |
| **`videos`**           | `tvShowId: number`<br/>`seasonNumber: number`<br/>`filters?: VideosFilters`           | https://developers.themoviedb.org/3/tv-seasons/get-tv-season-videos |

### Watch Providers
TMDB documentation: https://developers.themoviedb.org/3/watch-providers

```ts
import { WatchProviders } from '@leandrowkz/tmdb'

const wp = new WatchProviders({ apiKey: 'TMDB_APIKEY' })

wp.*
```

| Methods | Parameters | TMDB docs |
|---------|------------|-----------|
| **`availableRegions`** | `filters?: AvailableRegionsFilters` | https://developers.themoviedb.org/3/watch-providers/get-available-regions |
| **`movieProviders`**   | `filters?: WatchProvidersFilters`   | https://developers.themoviedb.org/3/watch-providers/get-movie-providers |
| **`tvProviders`**      | `filters?: WatchProvidersFilters`   | https://developers.themoviedb.org/3/watch-providers/get-tv-providers |
