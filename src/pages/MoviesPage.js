import { Container } from 'components/Container';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { StyledSection } from 'components/Section.styled';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'services/api';
import toast, { Toaster } from 'react-hot-toast';

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
          toast.error(
            'No films found matching your search query, please change your request and try again',
            {
              duration: 5000,
            }
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
      toast.error(
        'No films found matching your search query, please change your request and try again',
        {
          duration: 5000,
        }
      );
      return;
    }

    setSearchParams({ query: inputValue });
    evt.currentTarget.reset();
  };
  return (
    <>
      <StyledSection>
        <Container>
          <Searchbar onSubmit={handleSubmit} />
          {movies.length > 0 && <MoviesList movies={movies} />}
        </Container>
      </StyledSection>
      {loading && <Loader />}
      {error &&
        !loading &&
        toast.error('Something went wrong, please try reloading the page', {
          duration: 5000,
        })}
      <Toaster position="top-right" />
    </>
  );
};

export default MoviesPage;
