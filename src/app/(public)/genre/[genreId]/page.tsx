import MoviesByGenre from "@/components/movies by genre-components/MoviesByGenre";
import {movieService} from "@/services/movie-service/api.movies.service";

type MoviesGenreProps = {
    params: {
        genreId: string;
    };
    searchParams: {
        page?: string;
    }
}

const MoviesByGenrePage = async ({params, searchParams}: MoviesGenreProps ) => {
    const genreId = Number(params.genreId);
    const currentPage = Number(searchParams.page || 1);

    const {results, total_pages} = await movieService.getMoviesByGenre(genreId, currentPage);

    return (
        <div>
            <MoviesByGenre
                results={results}
                currentPage={currentPage}
                totalPages={total_pages}
                genreId={genreId}
            />
        </div>
    );
};

export default MoviesByGenrePage;
