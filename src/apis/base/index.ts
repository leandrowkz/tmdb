import { Fetcher } from "../../core/fetcher";
import type { TMDBOptions } from "../../types";

export class BaseAPI extends Fetcher {
	static API_URL_V3 = "https://api.themoviedb.org/3";

	constructor({ url, apiKey, debug = false }: TMDBOptions) {
		const baseURL = !url ? BaseAPI.API_URL_V3 : url;

		super(baseURL, debug);

		this.addHeader("Authorization", `Bearer ${apiKey}`);
	}

	protected getPath(
		path: string,
		queryString?: Record<
			string,
			string | string[] | number | number[] | boolean
		>,
	) {
		const params = new URLSearchParams(queryString as Record<string, string>);

		return `${path}?${params.toString()}`;
	}
}
