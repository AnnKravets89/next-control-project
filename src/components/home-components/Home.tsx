import styles from "@/components/home-components/home.module.css";
import {movieService} from "@/services/movie-service/api.movies.service";
import PopularMovie from "@/components/popular-movies-components/PopularMovie";

const Home = async () => {
    const {results} = await movieService.getPopularMovies();
    const topSixMovies = results.slice(0,6);

    return (
        <div className={styles.home}>
            <div className={styles.homeContainer}>
                <div className={styles.popularContainer}>
                    <h2>Popular Movies</h2>
                    <div className={styles.popularMovies}>
                        {
                            topSixMovies.map((result) => (<PopularMovie key={result.id} movie={result}/>))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
