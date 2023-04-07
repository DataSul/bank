import { useState, useEffect } from 'react';



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

};

export default Users;