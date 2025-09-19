import {IMoviesResponse} from "@/models/movies-models/MoviesResponseModel";
import {fetcherMovies} from "@/services/movie-service/movie.fetcher";

export const movieService = {
    getPopularMovies: async (page: number = 1): Promise<IMoviesResponse> => {
        return fetcherMovies('/movie/popular', {
            language: "en-US",
            page: page,
        });

    },

    getMovies: async (page: number): Promise<IMoviesResponse> => {
        return fetcherMovies('/discover/movie', {
            language: "en-US",
            sort_by: "popularity.desc",
            page: page,
        });
    }
}
