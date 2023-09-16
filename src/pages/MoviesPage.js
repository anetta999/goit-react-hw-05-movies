import { MoviesList } from 'components/MoviesList/MoviesList';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'services/api';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }
    const getMoviesListByQuery = async () => {
      try {
        const { results } = await fetchMoviesByQuery(query);
        setMovies(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMoviesListByQuery();
  }, [query]);

  return (
    <div>
      <Searchbar />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
