const BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_TOKEN = process.env.TMDB_TOKEN;

const fetchOptions = {
    headers: {
        Authorization: `Bearer ${TMDB_TOKEN}`,
        'Content-Type': 'application/json',
    },
};
export { BASE_URL, fetchOptions};
