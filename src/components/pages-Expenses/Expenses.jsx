



import Filters from '../../components/filters/Filters';
import Total from '../../components/total/Total';
import Users from '../../components/users/Users';
import { Link } from 'react-router-dom';
import { StyledLink,CenteredLink } from './Expenese.styled';


const ExpensesScreen = () => {
  return (
    <>
      <Filters/> 
      <Users/>
      <Total/>
      <CenteredLink>
      <StyledLink to='/ExpenseIncome'>Add Expense</StyledLink>
      </CenteredLink>
    </>
  )
}

export default ExpensesScreen;