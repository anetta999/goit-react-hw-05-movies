import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`;

export const CastListItem = styled.li`
  flex-basis: calc(100% - 40px * 3) / 4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 4px solid #2c5f63;
  border-radius: 8px;
`;

export const CastCardFooter = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 8px;
  padding-right: 8px;
  max-width: 185px;
`;

export const CastText = styled.p`
  max-width: 185px;
`;
