import {FC} from "react";
import MoviesList from "@/components/movies-list-components/MoviesList";

type Props = {
    params: {
        page?: string;
    }
}

const MoviePage:FC<Props> = ({params}) => {
    return (
        <div>
            <MoviesList params={params}/>
        </div>
    );
};

export default MoviePage;

