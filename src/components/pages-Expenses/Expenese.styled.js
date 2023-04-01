import styled from 'styled-components'
import { Link } from 'react-router-dom';
export const StyledContainer = styled.div`
width:300px;
height:auto;
display:flex;
flex-direction:column;
border: 1px solid red;
display:flex;
align-items:center;
`;
export const CenteredLink = styled.div` 
display: flex;
 justify-content: center;
  align-items: center; 
`

export const StyledTitle = styled.p`
margin:5px;
font-size:16px;

`;
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