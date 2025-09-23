import {FC} from "react";
import MoviesList from "@/components/movies-list-components/MoviesList";

type Props = {
    searchParams: {
        page?: string;
    }
}

const MoviePage:FC<Props> = ({searchParams}) => {
    return (
        <div>
            <MoviesList searchParams={searchParams}/>
        </div>
    );
};

export default MoviePage;

