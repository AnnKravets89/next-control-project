import {IMoviesResponse} from "@/models/movies-models/MoviesResponseModel";
import {fetcherMovies} from "@/services/movie-service/movie.fetcher";

export const movieService = {
    getPopularMovies: async (page: number = 1): Promise<IMoviesResponse> => {
        return fetcherMovies('/movie/popular', {
            language: "en-US",
            page: page,
        });

    }
}
