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
  background-color: #F12B2B;
  border-color: #F12B2B;
  padding: 0.3rem 0.8rem;
  border-radius: 0.25rem;
  text-decoration: none;
  position: fixed;
  top: 0;
  left: 0;
  
  &:hover {
    background-color: #D11111;
    border-color: #D11111;
  }
`;