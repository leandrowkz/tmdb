import { BaseAPI } from '../base'
import type {
  ConfigurationDetailsResponse,
  ConfigurationCountriesResponse,
  ConfigurationJobsResponse,
  ConfigurationLanguagesResponse,
  ConfigurationPrimaryTranslationsResponse,
  ConfigurationTimezonesResponse,
} from './types'

export class ConfigurationAPI extends BaseAPI {
  /**
   * Get the system wide configuration information. Some elements of the API require some knowledge
   * of this configuration data. The purpose of this is to try and keep the actual API responses as
   * light as possible. It is recommended you cache this data within your application and check for
   * updates every few days.
   *
   * This method currently holds the data relevant to building image URLs as well as the change key
   * map.
   *
   * To build an image URL, you will need 3 pieces of data. The base_url, size and file_path. Simply
   * combine them all and you will have a fully qualified URL. Here’s an example URL:
   *
   * https://image.tmdb.org/t/p/w500/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg
   *
   * The configuration method also contains the list of change keys which can be useful if you are
   * building an app that consumes data from the change feed.
   *
   * @see https://developers.themoviedb.org/3/configuration/get-api-configuration
   */
  public async configuration(): Promise<ConfigurationDetailsResponse> {
    const path = this.getPath('/configuration')

    return this.get<ConfigurationDetailsResponse>(path)
  }

  /**
   * Get the list of countries (ISO 3166-1 tags) used throughout TMDB.
   *
   * @see https://developers.themoviedb.org/3/configuration/get-countries
   */
  public async countries(): Promise<ConfigurationCountriesResponse> {
    const path = this.getPath('/configuration/countries')

    return this.get<ConfigurationCountriesResponse>(path)
  }

  /**
   * Get a list of the jobs and departments we use on TMDB.
   *
   * @see https://developers.themoviedb.org/3/configuration/get-jobs
   */
  public async jobs(): Promise<ConfigurationJobsResponse> {
    const path = this.getPath('/configuration/jobs')

    return this.get<ConfigurationJobsResponse>(path)
  }

  /**
   * Get the list of languages (ISO 639-1 tags) used throughout TMDB.
   *
   * @see https://developers.themoviedb.org/3/configuration/get-languages
   */
  public async languages(): Promise<ConfigurationLanguagesResponse> {
    const path = this.getPath('/configuration/languages')

    return this.get<ConfigurationLanguagesResponse>(path)
  }

  /**
   * Get a list of the officially supported translations on TMDB.
   *
   * While it's technically possible to add a translation in any one of the
   * https://developers.themoviedb.org/3/configuration/get-languages we have added to TMDB (we don't
   * restrict content), the ones listed in this method are the ones we also support for localizing
   * the website with which means they are what we refer to as the "primary" translations.
   *
   * These are all specified as https://en.wikipedia.org/wiki/IETF_language_tag to identify the
   * languages we use on TMDB. There is one exception which is image languages. They are currently
   * only designated by a ISO-639-1 tag. This is a planned upgrade for the future.
   *
   * We're always open to adding more if you think one should be added. You can ask about getting a
   * new primary translation added by posting on https://www.themoviedb.org/talk/category/5047951f760ee3318900009a.
   *
   * One more thing to mention, these are the translations that map to our website translation
   * project. You can view and contribute to that project https://www.localeapp.com/projects/8267.
   *
   * @see https://developers.themoviedb.org/3/configuration/get-primary-translations
   */
  public async primaryTranslations(): Promise<ConfigurationPrimaryTranslationsResponse> {
    const path = this.getPath('/configuration/primary_translations')

    return this.get<ConfigurationPrimaryTranslationsResponse>(path)
  }

  /**
   * Get the list of timezones used throughout TMDB.
   *
   * @see https://developers.themoviedb.org/3/configuration/get-timezones
   */
  public async timezones(): Promise<ConfigurationTimezonesResponse> {
    const path = this.getPath('/configuration/timezones')

    return this.get<ConfigurationTimezonesResponse>(path)
  }
}
