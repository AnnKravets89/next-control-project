import Image from "next/image";

type BackdropProps = {
    backdrop_path: string;
    title?: string;
}

const Backdrop = ({backdrop_path, title}: BackdropProps ) => {
    const fallback = '/movie-poster-placeholder.png'
    const backdropUrl = backdrop_path ?
        `https://image.tmdb.org/t/p/w300${backdrop_path}` : fallback;
    return (
        <div>
            <Image
                src={backdropUrl}
                alt={title || 'Backdrop poster'}
                width={300}
                height={450}
            />
        </div>
    );
};

export default Backdrop;
