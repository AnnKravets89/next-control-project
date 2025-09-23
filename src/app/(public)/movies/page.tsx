import MoviesList from "@/components/movies-list-components/MoviesList";
import {FC} from "react";

type Props = {
    searchParams: {
        page?: string;
    }
}

const MoviesPage:FC<Props> = ({searchParams}) => {
    return (
        <div>
            <MoviesList searchParams={searchParams}/>
        </div>
    );
};

export default MoviesPage;
