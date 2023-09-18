import styled from 'styled-components';

export const ReviewsListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  background-color: #7cb7b7f2;
  border-radius: 8px;
  padding: 20px;
`;

export const ReviewsText = styled.p`
  color: #fff;
  font-family: 'Ubuntu', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.55;
`;

export const ReviewsTitle = styled.h2`
  margin-bottom: 10px;
  color: #2c5f63;
  font-family: 'Ubuntu', sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2;
`;
