import { StyledForm, StyledInput, SubmitBtn } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledInput type="text" name="query" autoFocus="on" autoComplete="on" />
      <SubmitBtn type="submit">Search</SubmitBtn>
    </StyledForm>
  );
};
