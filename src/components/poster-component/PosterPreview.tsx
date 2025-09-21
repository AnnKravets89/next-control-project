import Image from "next/image";

type PosterPreviewProps = {
    poster_path?: string | null,
    title?: string,
    className?: string,
}

const PosterPreview = ({poster_path, title, className}: PosterPreviewProps) => {
    const fallback = '/movie-poster-placeholder.png';
    const posterUrl = poster_path ?
        `https://image.tmdb.org/t/p/w300${poster_path}` : fallback;

    return (
        <div>
            <Image
                src={posterUrl}
                alt={title || 'Movie Poster'}
                width={300}
                height={450}
                className={className}
            />
        </div>
    );
};

export default PosterPreview;
