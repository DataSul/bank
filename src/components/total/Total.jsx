import { useState, useEffect } from 'react';
import UserBox from '../user-box/UserBox';
import SumBox from '../sum-box/SumBox';
import { FlexDiv } from './totalStyled';

const Total = ({ transactions }) => {
  const amounts = transactions.reduce(
    (acc, item) => {
      if (item.type === "income") {
        acc.income += item.amount;
      } else if (item.type === "expense") {
        acc.expense += item.amount;
      }
      return acc;
    },
    { income: 0, expense: 0, difference: 0 }
  );

  amounts.difference = amounts.income - amounts.expense;

  return (
    <FlexDiv>
      <SumBox text="income" amount={amounts.income} />
      <SumBox text="difference" amount={amounts.difference} />
      <SumBox text="expense" amount={amounts.expense} />
    </FlexDiv>
  );
};

const Users = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
    setTransactions(storedTransactions);
  }, []);

  const handleDelete = (deletedTransactionIndex) => {
    const updatedTransactions = [...transactions];
    updatedTransactions.splice(deletedTransactionIndex, 1);
    localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
    setTransactions(updatedTransactions);
  };

  return (
    <div>
      <Total transactions={transactions} />
      {transactions.map((transaction, index) => (
        <UserBox key={index} info={transaction} onDelete={() => handleDelete(index)} />
      ))}
    </div>
  );
};

export default Users;