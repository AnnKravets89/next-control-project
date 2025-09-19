import styles from "./genres.module.css";
import {genreService} from "@/services/genre-service/api.genres.service";
import Link from "next/link";
import GenreBadge from "@/components/genre-badge-components/GenreBadge";

const Genres = async () => {
    const {genres} = await genreService.getGenres();

    return (
        <div className={styles.genresContainer}>
            <div className={styles.genresListContainer}>
                <div className={styles.genreListGrid}>
                    {
                        genres.map((genre) => (
                            <Link
                                href={{pathname: `/genre/${genre.id}`}}
                                key={genre.id}
                                className={styles.genreLink}
                            >
                                <GenreBadge key={genre.id} genre={genre}/>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Genres;
