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
This client is organized in the same namespace structure present on [TMDB documentation](https://developers.themoviedb.org/3/getting-started/introduction). You'll need create a register and an [API key](https://www.themoviedb.org/settings/api) to interact with TMDB API. After that, just create a new instance from
TMDB wrapper client:
```ts
import { TMDB } from '@leandrowkz/tmdb'

const tmdb = new TMDB({ apiKey: 'CREATED_ON_TMDB' })

const fightClub = await tmdb.movies.details(550)

console.log(fightClub)

{
  "adult": false,
  "backdrop_path": "/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg",
  "belongs_to_collection": null,
  "budget": 63000000,
  "genres": [...],
  "homepage": "",
  "id": 550,
  "imdb_id": "tt0137523",
  "original_language": "en",
  "original_title": "Fight Club",
  "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
  "popularity": 0.5,
  "poster_path": null,
  "production_companies": [...],
  "production_countries": [...],
  "release_date": "1999-10-12",
  "revenue": 100853753,
  "runtime": 139,
  "spoken_languages": [...],
  "status": "Released",
  "tagline": "How much can you know about yourself if you've never been in a fight?",
  "title": "Fight Club",
  "video": false,
  "vote_average": 7.8,
  "vote_count": 3439
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

### Accessing APIS through Wrapper
You can access all APIs through a single TMDB wrapper instance, provided by the
class `TMDB`.
```ts
import { TMDB } from '@leandrowkz/tmdb'

const tmdb = new TMDB({ apiKey: 'YOUR_API_KEY' })

// All APIs will be available under TMDB, for example:
tmdb.account.details(...)
tmdb.authentication.createGuestSession(...)
tmdb.certifications.movie(...)
tmdb.changes.movie(...)
tmdb.collections.images(...)
tmdb.companies.alternativeNames(...)
tmdb.configuration.countries(...)
tmdb.credits.details(...)
tmdb.discover.tv(...)
tmdb.find.find(...)
tmdb.genres.tv(...)
tmdb.guestSessions.ratedMovies(...)
tmdb.keywords.movies(...)
tmdb.lists.addItem(...)
tmdb.movies.details(...)
tmdb.networks.details(...)
tmdb.people.movieCredits(...)
tmdb.reviews.details(...)
tmdb.search.tvShows(...)
tmdb.trending.getTrending(...)
tmdb.tv.recommendations(...)
tmdb.tvEpisodeGroups.details(...)
tmdb.tvEpisodes.credits(...)
tmdb.tvSeasons.translations(...)
tmdb.watchProviders.movieProviders(...)
```

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

