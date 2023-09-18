import styled from 'styled-components';

export const MovieCard = styled.div`
  display: flex;
  gap: 40px;
  background-color: #7cb7b7f2;
  border-radius: 8px;
  padding: 20px;
`;

export const MovieTitle = styled.h1`
  margin-bottom: 4px;
  color: #2c5f63;
  font-family: 'Ubuntu', sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
`;

export const MovieSubTitle = styled(MovieTitle)`
  font-weight: 400;
  font-size: 40px;
`;

export const MovieSecondSubTitle = styled(MovieTitle)`
  font-weight: 400;
  font-size: 30px;
`;

export const MovieCardText = styled.p`
  color: #fff;
  font-family: 'Ubuntu', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.55;
  margin-bottom: 10px;
`;

export const GenresText = styled(MovieCardText)`
  margin-bottom: 0;
`;

export const GenresItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const MovieImg = styled.img`
  border: 4px solid #2c5f63;
  border-radius: 8px;
`;
