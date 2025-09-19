import {IMovies} from "@/models/movies-models/MoviesModel";
import {FC} from "react";
import styles from "./movie.info.module.css";
import Link from "next/link";
import PosterPreview from "@/components/poster-component/PosterPreview";
import StarRating from "@/components/stars-rating-components/StarRating";

type MovieInfoProps = {
    movie: IMovies;
}
const MovieInfo: FC<MovieInfoProps> = ({movie}) => {
    return (
        <div className={styles.movieInfoContainer}>
            <Link href={{pathname: `/movie/${movie.id}`}} className={styles.movieInfoCard}>
                <div>
                    <PosterPreview poster_path={movie.poster_path} title={movie.original_title} className={styles.posterMedium}/>
                </div>

                <div className={styles.titleContainer}>
                    <h2 className={styles.movieInfoTitle}>
                        {movie.title}
                    </h2>
                    <div className={styles.movieRating}>
                        <StarRating mode={'compact'} initialRating={movie.vote_average}/>
                    </div>
                </div>

                <div className={styles.movieRelease}>
                    <p>Release:</p>
                    <p>{movie.release_date}</p>
                </div>
            </Link>
        </div>
    );
};

export default MovieInfo;
