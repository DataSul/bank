import { useState } from 'react';
import LabelInput from '../Lable-input/LableInput';
import {
  Form,
  FormGroup,
  GroupLabel,
  RadioGroup,
  RadioButton,
  SubmitButton,
  AddExpenseContainer,
  Title,
 StyledLink,
 SuccessMessage

} from './ExpenseIncome.styled';
import { Link } from "react-router-dom";

const AddExpense = () => {

  const [date, setDate] = useState("");
  const [select, setSelect] = useState("");
  const [radio, setRadio] = useState(false);
  const [money, setMoney] = useState("");
  const [options, setOptions] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const AddNewObj = (e) => {
    e.preventDefault();
    if (date !== "" && radio !== false && money !== "") {
      const userObj = {
        created_at: date,
        type: radio,
        category: select,
        amount: parseFloat(money)
      };
      console.log(userObj);
      let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
      // Check if the new transaction already exists in localStorage
      const alreadyExists = transactions.some(transaction =>
        transaction.created_at === userObj.created_at &&
        transaction.type === userObj.type &&
        transaction.category === userObj.category &&
        transaction.amount === userObj.amount
      );
      if (!alreadyExists) {
        transactions.push(userObj);
        localStorage.setItem('transactions', JSON.stringify(transactions));
        e.target.reset(); // reset the form inputs
        setSuccessMessage("Successfully added!");
      } else {
        setSuccessMessage("Transaction already exists!");
      }
    }
  };

  const RadioCheck = (e) => {
    e.target.checked && setRadio(e.target.value);
    if (e.target.value === "income") {
      setOptions(["salary", "invoice"]);
      setSelect("salary");
    } else {
      setOptions(["gym", "shopping", "family", "other"]);
      setSelect("gym");
    }
  };

  return (
    <AddExpenseContainer>
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      <Title>Add Expense</Title>
      <Form onSubmit={AddNewObj}>
        <FormGroup>
          <GroupLabel htmlFor="expense-date">Date</GroupLabel>
          <LabelInput
            id="expense-date"
            type="date"
            name="expense-date"
            onChange={(e) => setDate(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <GroupLabel>Expense Type</GroupLabel>
          <RadioGroup>
            <GroupLabel htmlFor="expense-type-expense">
              <RadioButton
                id="expense-type-expense"
                type="radio"
                name="expense-type"
                value="expense"
                onChange={RadioCheck}
              />
              Expense
            </GroupLabel>
            <GroupLabel htmlFor="expense-type-income">
              <RadioButton
                id="expense-type-income"
                type="radio"
                name="expense-type"
                value="income"
                onChange={RadioCheck}
              />
              Income
            </GroupLabel>
          </RadioGroup>
        </FormGroup>
        <FormGroup>
          <GroupLabel htmlFor="expense-category">Category</GroupLabel>
          <select
            id="expense-category"
            value={select}
            onChange={(e) => setSelect(e.target.value)}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </FormGroup>
        <FormGroup>
          <GroupLabel htmlFor="expense-total-sum">Total Sum</GroupLabel>
          <LabelInput
            id="expense-total-sum"
            type="number"
            name="expense-total-sum"
            onChange={(e) => setMoney(e.target.value)}
          />
        </FormGroup>
        <SubmitButton type='submit'>Add</SubmitButton>
      </Form>
      <StyledLink to='/Expenses'>See all Transactions</StyledLink>
    </AddExpenseContainer>
  );
};

export default AddExpense;