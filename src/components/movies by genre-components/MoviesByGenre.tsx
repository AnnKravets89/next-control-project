"use client";
import styles from "./movies.by.genre.module.css";
import MovieInfo from "@/components/movie-info-components/MovieInfo";
import Pagination from "@/components/pagination-components/Pagination";
import {IMovies} from "@/models/movies-models/MoviesModel";
import {FC} from "react";

type Props = {
    results: IMovies[];
    currentPage: number;
    totalPages: number;
    genreId?: number;
}

const MoviesByGenre: FC<Props> = ({results, currentPage, totalPages}) => {
    return (
        <div className={styles.moviesByGenreList}>
            <div className={styles.moviesByGenreContainer}>
                <div className={styles.moviesByGenreGrid}>
                    {
                        results.map((result) => (<MovieInfo key={result.id} movie={result}/>))
                    }
                </div>
            </div>

            <div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                />
            </div>
        </div>
    );
};

export default MoviesByGenre;
