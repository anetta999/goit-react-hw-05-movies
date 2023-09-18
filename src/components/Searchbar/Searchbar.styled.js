import styled from 'styled-components';

export const StyledForm = styled.form`
  display: inline-flex;
  gap: 25px;
  align-items: center;
  margin-bottom: 74px;
`;

export const StyledInput = styled.input`
  width: 536px;
  height: 40px;

  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 14px;
  padding-right: 14px;
  border: 3px solid #589195;
  border-radius: 3px;
  background-color: #fff;
  outline: transparent;

  color: #2c5f63;
  font-family: 'Ubuntu', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 2;
  letter-spacing: -0.42px;

  &:focus {
    outline: 4px solid #31797e;
    border: transparent;
  }
`;

export const SubmitBtn = styled.button`
  width: 170px;
  padding-top: 11px;
  padding-bottom: 11px;
  padding-left: 30px;
  padding-right: 30px;
  border: 4px solid transparent;
  border-radius: 38px;
  background-color: #589195;

  color: #fff;
  font-family: 'Ubuntu', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;

  transition: 250ms border ease-in;

  &:is(:hover, :focus) {
    border: 4px solid #2c5f63;
  }
`;

export const GoBackBtn = styled(SubmitBtn)`
  width: 150px;
  padding-left: 36px;
  padding-right: 36px;
  font-size: 16px;
  margin-bottom: 75px;
`;

export const AdditionalInfoLink = styled(SubmitBtn)`
  border-radius: 4px;
`;
