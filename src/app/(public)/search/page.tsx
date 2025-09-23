import SearchResults from "@/components/search-results-components/SearchResults";
import {movieService} from "@/services/movie-service/api.movies.service";
import SearchBar from "@/components/header-components/search-bar-components/SearchBar";
import {IMovies} from "@/models/movies-models/MoviesModel";


type SearchProps = {
    searchParams: {
        query?: string;
        page?: string;
    }
}
const SearchPage = async ({searchParams}:SearchProps) => {
    const query = searchParams.query || '';
    const currentPage = Number(searchParams.page) || 1;

    let results: IMovies[] = [];
    let total_pages = 0;

    if (query) {
        const data = await movieService.getSearchMovies(query, currentPage);
        results = data.results;
        total_pages = data.total_pages;
    }
    return (
        <div>
            {query && (
                <SearchResults
                    results={results}
                    currentPage={currentPage}
                    totalPages={total_pages}
                    query={query}
                />
            )}
        </div>
    );
};

export default SearchPage;
