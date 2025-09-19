import styles from "./genre.badge.module.css";
import {IGenre} from "@/models/genres-models/GenreModel";
import {FC} from "react";

type GenreBadgeProps = {
    genre: IGenre;
    className?: string;
}
const GenreBadge: FC<GenreBadgeProps> = ({genre, className}) => {
    return (
        <div className={styles.genreBadge}>
            <p className={className}>
                {genre.name}
            </p>
        </div>
    );
};

export default GenreBadge;
