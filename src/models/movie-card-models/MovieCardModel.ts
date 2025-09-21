import {ISpokenLanguage} from "@/models/movie-card-models/SpokenLanguageModel";
import {IProductionCountry} from "@/models/movie-card-models/ProductionCountryModel";
import {IProductionCompany} from "@/models/movie-card-models/ProductionCompanyModel";
import {IGenre} from "@/models/genres-models/GenreModel";
import {IBelongsToCollection} from "@/models/movie-card-models/BelongsToCollectionModel";

export interface IMovieCard {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: IBelongsToCollection;
    budget: number;
    genres: IGenre[];
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: IProductionCompany[];
    production_countries: IProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: ISpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
