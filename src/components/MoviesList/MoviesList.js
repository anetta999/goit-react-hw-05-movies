import { useLocation } from 'react-router-dom';
import {
  MoviesListItem,
  MoviesListLink,
  StyledMoviesList,
} from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <StyledMoviesList>
      {movies.map(({ id, title }) => {
        return (
          <MoviesListItem key={id}>
            <MoviesListLink to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </MoviesListLink>
          </MoviesListItem>
        );
      })}
    </StyledMoviesList>
  );
};
