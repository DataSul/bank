import LabelInput from '../Lable-input/LableInput';
import { useState, useContext } from 'react';
import Select from '../select/select';
import { FiltersContainer, ApplyButton } from './Filters.styled';
import React from 'react';
import { FiltersContext } from './FiltersContext';
const FilterContext = React.createContext({});
const userArr = [{
  created_at: "20-12-2007",
  type: "income",
  category: "salary",
  amount: 5000
},
{
  created_at: "10-4-2017",
  type: "expense",
  category: "gym",
  amount: 125
},
{
  created_at: "20-01-1997",
  type: "expense",
  category: "shopping",
  amount: 600
},
{
  created_at: "02-02-2002",
  type: "expense",
  category: "family",
  amount: 2000
},
{
  created_at: "20-01-1997",
  type: "income",
  category: "invoice",
  amount: 2500
},
]
const Filters = () => {
  const [selectedDate, setSelectedDate] = useState('')
  const [minAmount, setMinAmount] = useState(undefined);
  const [maxAmount, setMaxAmount] = useState(undefined);
  const [selectedCategory, setSelectedCategory] = useState();
  const filterValues = useContext(FilterContext);

  const onSelectedDate = (e) => setSelectedDate(e.target.value);
  const onMinAmountChange = (e) => setMinAmount(parseFloat(e.target.value));
  const onMaxAmountChange = (e) => setMaxAmount(parseFloat(e.target.value));
  const onCategoryChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);
  };

  const onFiltersSubmit = () => {
    if (selectedCategory === 'income') {
      console.log(userArr.filter((user) => user.type === 'income'));
    } else if (selectedCategory === 'expense') {
      console.log(userArr.filter((user) => user.type === 'expense'));
    } else {
      console.log(userArr);
    }
  }

  const options = [
    {
      id: 1,
      label: 'Expense',
      value: 'expense'
    },
    {
      id: 2,
      label: 'Income',
      value: 'income'
    },
  ]

  return (
    <FiltersContainer>

<FilterContext.Provider value={{ selectedDate, minAmount, maxAmount, selectedCategory }}>
        <div>
          <LabelInput
            id={1}
            text='Expense creation date'
            type={'date'}
            name={'date-filter'}
            value={selectedDate}
            onChange={onSelectedDate}
          />
        </div>
        <div>
          <Select
            value={selectedCategory}
            text='Select Category'
            options={options.map(option => (
              <option key={option.id} value={option.value}>{option.label}</option>
            ))}
            onChange={onCategoryChange}
          />
        </div>
        <div>
          <LabelInput
            id={3}
            text='Enter min amount'
            type={'amount'}
            name={'amount-min-filter'}
            value={minAmount}
            onChange={onMinAmountChange}
          />
          <LabelInput
            id={4}
            text='Enter max amount'
            type={'amount'}
            name={'amount-max-filter'}
            value={maxAmount}
            onChange={onMaxAmountChange}
          />
        </div>
        <div>
          <ApplyButton onClick={onFiltersSubmit} className='apply__button'>Apply</ApplyButton>
        </div>
      </FilterContext.Provider>
    </FiltersContainer>
  )
}

export default Filters;