import { MoviesList } from 'components/MoviesList/MoviesList';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'services/api';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
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

  const handleSubmit = evt => {
    evt.preventDefault();
    const inputValue = evt.currentTarget.elements.query.value;

    if (inputValue === '') {
      alert('Searchfield cannot be empty, please enter the film name');
      return;
    }

    setSearchParams({ query: inputValue });
    evt.currentTarget.reset();
  };
  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
