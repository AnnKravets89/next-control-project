import React, {FC} from 'react';
import {IMovies} from "@/models/movies-models/MoviesModel";
import styles from "./popular.movie.module.css";
import Link from "next/link";
import PosterPreview from "@/components/poster-component/PosterPreview";

type PopularMoviesProps = {
    movie: IMovies;
}

const PopularMovie: FC<PopularMoviesProps> = ({movie}) => {
    return (
        <div className={styles.posterContainer}>
            <Link href={{pathname: `/movie/${movie.id}`,}} className={styles.posterCard}>
                <div>
                    <PosterPreview poster_path={movie.poster_path} title={movie.original_title} className={styles.posterSmall}/>
                    <h2>{movie.title}</h2>
                </div>
            </Link>
        </div>
    );
};

export default PopularMovie;
