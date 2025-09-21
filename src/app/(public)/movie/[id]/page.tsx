import type { Metadata } from 'next';
import {FC} from "react";
import {movieService} from "@/services/movie-service/api.movies.service";
import MovieListCard from "@/components/movie-list-card-components/MovieListCard";

type MovieCardProps = {
    params: {id: string};

}

export const generateMetadata = async ({params}: MovieCardProps): Promise<Metadata> => {
    const {id} =  params;

    return {
        title: `Movie Card Title ${id}`,
    }
}

const MovieCardPage: FC<MovieCardProps> = async ({params}) => {
    const movie = await movieService.getMovieCard(Number(params.id));
    return (
        <div>
            <MovieListCard movie={movie}/>
        </div>
    );
};

export default MovieCardPage;
