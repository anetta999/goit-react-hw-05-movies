import { Container } from 'components/Container';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { StyledSection } from 'components/Section.styled';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'services/api';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }
    const getMoviesListByQuery = async () => {
      try {
        setLoading(true);
        setError(false);
        const { results } = await fetchMoviesByQuery(query);
        setMovies(results);
        if (!results.length) {
          alert(
            'No films found matching your search query, please change your request and try again'
          );
          return;
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
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
      <StyledSection>
        <Container>
          <Searchbar onSubmit={handleSubmit} />
          {movies.length > 0 && <MoviesList movies={movies} />}
        </Container>
      </StyledSection>
      {loading && <p>LOADING</p>}
      {error && !loading && (
        <p>Something went wrong, please try reloading the page</p>
      )}
    </div>
  );
};

export default MoviesPage;
