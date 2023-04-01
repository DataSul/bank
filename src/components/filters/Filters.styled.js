import styled from 'styled-components';

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
`;
export const ApplyButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0069d9;
  }

  &:focus {
    outline: none;
  }
`;