import {BASE_URL, fetchOptions} from "@/services/base-fetch-config";
import {IMoviesResponse} from "@/models/movies-models/MoviesResponseModel";

interface IMovieParams {
    language?: string;
    sort_by?: string;
    page?: number;
}

export const fetcherMovies = async (
    path: string, params: IMovieParams = {}): Promise<IMoviesResponse> => {
    const url = new URL(`${BASE_URL}${path}`);

    if (params.language) {
        url.searchParams.append('language', params.language);
    }
    if (params.sort_by) {
        url.searchParams.append('sort_by', params.sort_by);
    }
    if (params.page) {
        url.searchParams.append('page', params.page.toString());
    }

    try {
        const response = await fetch(url.toString(), fetchOptions);

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error fetching movies: ${response.status} - ${response.statusText}. Details: ${errorText}`);
        }

        const data: IMoviesResponse = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(`Failed to fetch from movie API path ${path}:`,error);
        throw error;
    }
};
