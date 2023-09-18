import { Container } from 'components/Container';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { StyledSection } from 'components/Section.styled';
import { useState, useEffect } from 'react';

import { fetchTrendingMovies } from 'services/api';
import { HomeTitle } from './HomePage.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <>
      {loading && <p>LOADING</p>}
      {error && !loading && (
        <p>Something went wrong, please try reloading the page</p>
      )}
      <StyledSection>
        <Container>
          <HomeTitle>Trending today</HomeTitle>
          {movies.length > 0 && <MoviesList movies={movies} />}
        </Container>
      </StyledSection>
    </>
  );
};

export default HomePage;
