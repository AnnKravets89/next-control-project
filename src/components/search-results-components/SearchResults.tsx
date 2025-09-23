import styles from "./search.module.css";
import {IMovies} from "@/models/movies-models/MoviesModel";
import {FC} from "react";
import MovieInfo from "@/components/movie-info-components/MovieInfo";
import Pagination from "@/components/pagination-components/Pagination";

type SearchProps = {
    results: IMovies[];
    currentPage: number;
    totalPages: number;
    query: string;
}

const SearchResults:FC<SearchProps> = async ({results, currentPage, totalPages, query}) => {
    return (
        <div className={styles.moviesSearchList}>
            <div className={styles.movieSearchListContainer}>
                <div className={styles.searchBox}>
                    <h2 className={styles.searchTitle}>Search results for: {query}</h2>
                </div>
                <div>
                    <div className={styles.movieSearchListGrid}>
                        {results.map((result) => (
                            <MovieInfo key={result.id} movie={result} />
                        ))}
                    </div>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchResults;
