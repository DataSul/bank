import styled from "styled-components";
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  padding: 0.3rem 0.8rem;
  border-radius: 0.25rem;
  text-decoration: none;
  margin-top:20px;
  
  &:hover {
    background-color: #0069d9;
    border-color: #0062cc;
  }
`;
export const AddExpenseContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #222;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const GroupLabel = styled.label`
  margin-bottom: 5px;
  color: #555;
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;

export const RadioButton = styled.input`
  margin-right: 5px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #3399FF;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2277CC;
  }

  &:disabled {
    background-color: #BBB;
    cursor: not-allowed;
  }
`;