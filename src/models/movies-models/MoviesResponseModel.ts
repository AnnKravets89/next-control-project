import {IMovies} from "@/models/movies-models/MoviesModel";

export interface IMoviesResponse {
    page: number;
    results: IMovies[];
    total_pages: number;
    total_results?: number;
}
