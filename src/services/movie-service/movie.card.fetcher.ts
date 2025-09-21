import {IMovieCard} from "@/models/movie-card-models/MovieCardModel";
import {BASE_URL, fetchOptions} from "@/services/base-fetch-config";

export const fetcherMovieCard = async (
    path: string, params: {language: string }): Promise<IMovieCard> => {
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

        const data: IMovieCard = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(`Failed to fetch from movie API path ${path}:`,error);
        throw error;
    }
}
