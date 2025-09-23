import styles from "./movie.list.card.module.css";
import {IMovieCard} from "@/models/movie-card-models/MovieCardModel";
import {FC} from "react";
import StarRating from "@/components/stars-rating-components/StarRating";
import PosterPreview from "@/components/poster-component/PosterPreview";
import Link from "next/link";
import GenreBadge from "@/components/genre-badge-components/GenreBadge";
import Backdrop from "@/components/backdrop-component/Backdrop";
import ProductionCompany from "@/components/production-company-components/ProductionCompany";

type MovieCardProps = {
    movie: IMovieCard | null;
}

const MovieListCard: FC<MovieCardProps> = ({movie}) => {
    return (
        <div className={styles.movieCard}>
            {
                movie && <>
                    <div className={styles.movieCardContainer}>
                        <div className={styles.movieCardContent}>

                            <div className={styles.titleItemsContainer}>
                                <div className={styles.titleRatingContainer}>
                                    <div className={styles.title}>
                                        <h1>{movie.title}</h1>
                                        <p>{movie.original_title}</p>
                                    </div>
                                    <div className={styles.rating}>
                                        <StarRating initialRating={movie.vote_average}/>
                                        <p>{movie.vote_average} from {movie.vote_count} users</p>
                                    </div>
                                </div>

                                <div className={styles.posterItemsContainer}>
                                    <PosterPreview
                                        poster_path={movie?.poster_path}
                                        className={styles.posterLarge}
                                    />

                                    <div className={styles.labelsItems}>
                                        <div className={styles.labels}>
                                            <p>Country:</p>
                                            <p>Release Date:</p>
                                            <p>Status:</p>
                                            <p>Tagline:</p>
                                            <p>Genre:</p>
                                            <p>Voice Acting Language:</p>
                                            <p>Origin Language:</p>
                                            <p>Playback Time:</p>
                                            <p>Budget:</p>
                                            <p>Revenue:</p>
                                            <p>Adult:</p>
                                            <p>Popularity:</p>
                                        </div>
                                        <div className={styles.items}>
                                            <ul className={styles.country}>
                                                {movie.origin_country.map((country, index) => (
                                                    <li key={index}>{country}</li>
                                                ))}
                                            </ul>
                                            <p>{movie.release_date}</p>
                                            <p>{movie.status}</p>
                                            <p>{!movie.tagline ? '-' : movie?.tagline}</p>
                                            <div className={styles.genres}>
                                                {
                                                    movie.genres.map((genre) => (
                                                        <Link
                                                            href={`/genre/${genre.id}`}
                                                            key={genre.id}
                                                            className={styles.genreLink}>
                                                            <GenreBadge key={genre.id} genre={genre} className={styles.genreStyle}/>
                                                        </Link>
                                                    ))
                                                }
                                            </div>
                                            <ul className={styles.languages}>
                                                {
                                                    movie.spoken_languages.map((language) => (
                                                        <li key={language.iso_639_1}>{language.english_name}</li>
                                                    ))
                                                }
                                            </ul>
                                            <p>{movie.original_language}</p>
                                            <p>{movie.runtime} min</p>
                                            <p>{movie.budget} $</p>
                                            <p>{movie.revenue} $</p>
                                            <p>{!movie.adult ? '-' : 'For Adults Only'}</p>
                                            <p>{movie.popularity}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.descriptionExpandedContainer}>
                                <div className={styles.descriptionProduction}>
                                    <div className={styles.description}>
                                        <h3>Movie Description</h3>
                                        <p className={styles.descText}>{movie.overview}</p>
                                        <div className={styles.homepage}>
                                            {movie.homepage && (
                                                <Link href={movie.homepage} target={"_blank"} rel={'noopener noreferrer'}>
                                                    Movie Website
                                                </Link>
                                            )}
                                        </div>

                                        <div className={styles.expandedInfo}>
                                            <div className={styles.companies}>
                                                <p className={styles.companyTitle}>Production Companies:</p>
                                                {
                                                    movie.production_companies.map((company) => (
                                                        <ProductionCompany key={company.id} company={company}/>
                                                    ))
                                                }
                                            </div>

                                            <div className={styles.prodCountry}>
                                                <p className={styles.companyTitle}>Production Countries:</p>
                                                {
                                                    movie.production_countries.map((country, index) => (
                                                        <p key={index} className={styles.prodCountryName}>
                                                            {country.name}  ({country.iso_3166_1})
                                                        </p>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.collection}>
                                        <p className={styles.collectionTitle}>
                                            Belongs To Collection
                                        </p>
                                        <div className={styles.collectionName}>
                                            {movie.belongs_to_collection?.name && (
                                                <p>{movie.belongs_to_collection?.name}</p>
                                            )}
                                        </div>
                                        <div className={styles.collectionImage}>
                                            {movie.belongs_to_collection && (
                                                <>
                                                    <PosterPreview poster_path={movie.belongs_to_collection.poster_path}
                                                                   className={styles.collectionPoster}/>
                                                    <div className={styles.backdropImage}>
                                                        <Backdrop backdrop_path={movie.belongs_to_collection.backdrop_path}/>
                                                        <Backdrop backdrop_path={movie.backdrop_path}/>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default MovieListCard;
