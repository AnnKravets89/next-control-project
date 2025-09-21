import {IMoviesResponse} from "@/models/movies-models/MoviesResponseModel";
import {fetcherMovies} from "@/services/movie-service/movie.fetcher";
import {IMovieCard} from "@/models/movie-card-models/MovieCardModel";
import {fetcherMovieCard} from "@/services/movie-service/movie.card.fetcher";

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
    },

    getMovieCard: async (id: number): Promise<IMovieCard> => {
        return fetcherMovieCard(`/movie/${id}`, {
            language: "en-US",
        });
    },
}
