import styles from "./search.module.css";
import {IMovies} from "@/models/movies-models/MoviesModel";
import {FC} from "react";
import MovieInfo from "@/components/movie-info-components/MovieInfo";
import Pagination from "@/components/pagination-components/Pagination";

type SearchProps = {
    results: IMovies[];
    currentPage: number;
    totalPages: number;
}

const SearchResults:FC<SearchProps> = async ({results, currentPage, totalPages}) => {
    return (
        <div className={styles.moviesList}>
            <div className={styles.movieListContainer}>
                <div className={styles.searchBox}>

                </div>
                <div className={styles.movieListGrid}>
                    <div>
                        {results.map((result) => (
                            <MovieInfo key={result.id} movie={result} />
                        ))}
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResults;
