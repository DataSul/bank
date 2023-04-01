import styled from 'styled-components';

export const Label = styled.label`
  font-weight: bold;
  font-size: 16px;
  color: #333;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  color: #333;

  &:focus {
    outline: none;
    border: 1px solid #0077ff;
  }
`;

export const Container = styled.div`
  margin-bottom: 20px;
`;