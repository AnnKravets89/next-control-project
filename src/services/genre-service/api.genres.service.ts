import {IGenreResponse} from "@/models/genres-models/GenreResponseModel";
import {fetcherGenres} from "@/services/genre-service/genre.fetcher";

export const genreService = {
    getGenres: async (): Promise<IGenreResponse> => {
        return fetcherGenres('/genre/movie/list', {
            language: "en-US",
        });
    }
}
