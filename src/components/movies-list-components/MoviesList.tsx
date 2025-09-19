import {movieService} from "@/services/movie-service/api.movies.service";
import styles from "./movies.list.module.css";
import MovieInfo from "@/components/movie-info-components/MovieInfo";
import Pagination from "@/components/pagination-components/Pagination";

type Props = {
    params: {
        page?: string;
    }
}

const MoviesList = async ({params}: Props) => {
    const currentPage = Number(params.page || 1);
    const {results, total_pages} = await movieService.getMovies(currentPage);

    return (
        <div className={styles.moviesList}>
            <div className={styles.movieListContainer}>
                <div className={styles.movieListGrid}>
                    {
                        results.map((result) => (<MovieInfo key={result.id} movie={result}/>))
                    }
                </div>
            </div>

            <div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={total_pages}
                />
            </div>
        </div>
    );
};

export default MoviesList;
