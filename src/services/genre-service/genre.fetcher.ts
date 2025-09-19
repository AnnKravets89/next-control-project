import {IGenreParams} from "@/models/genres-models/GenreParamsModel";
import {IGenreResponse} from "@/models/genres-models/GenreResponseModel";
import {BASE_URL, fetchOptions} from "@/services/base-fetch-config";

export const fetcherGenres = async (
    path: string, params: IGenreParams = {}): Promise<IGenreResponse> => {
    const url = new URL(`${BASE_URL}${path}`);

    if (params.language) {
        url.searchParams.append('language', params.language);
    }

    try {
        const response = await fetch(url.toString(), fetchOptions);

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error fetching movies: ${response.status} - ${response.statusText}. Details: ${errorText}`);
        }

        const data: IGenreResponse = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(`Failed to fetch from movie API path ${path}:`,error);
        throw error;
    }
}
