import styled from 'styled-components';

export const StyledLoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledError = styled.div`
  color: red;
  margin-bottom: 10px;
`;

export const StyledButton = styled.button`
  padding: 10px;
  background-color: #0077cc;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #0066b3;
  }
`;
