import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledMoviesList = styled.ul`
  width: 700px;
  background-color: #7cb7b7f2;
  border-radius: 8px;
  padding: 20px;
`;
export const MoviesListLink = styled(Link)`
  display: block;
  color: #ffffff;
  font-family: 'Ubuntu', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  max-width: 500px;
  transition: 350ms color, font-weight, ease-in;

  &:is(:hover, :focus) {
    color: #2c5f63;
    font-weight: 600;
  }
`;

export const MoviesListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;
