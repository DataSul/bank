
import LabelInput from '../Lable-input/LableInput';
import { useState } from 'react';
import Select from '../select/select';
import { FiltersContainer, ApplyButton } from './Filters.styled';


const Filters = () => {
  const [selectedDate, setSelectedDate] = useState('')
  const [minAmount, setMinAmount] = useState(undefined);
  const [maxAmount, setMaxAmount] = useState(undefined);
  const [selectedCategory, setSelectedCategory] = useState();
  const onSelectedDate = (e) => setSelectedDate(e.target.value);
  const onMinAmountChange = (e) => setMinAmount(parseFloat(e.target.value));
  const onMaxAmountChange = (e) => setMaxAmount(parseFloat(e.target.value));
  const onCategoryChange = (e) => setSelectedCategory(e.target.value);

  const onFiltersSubmit = () => {

    const minAmountInt = parseFloat(minAmount)
    const maxAmountInt = parseFloat(maxAmount);

    console.log({ minAmountInt, maxAmountInt, selectedCategory, selectedDate })

  }

  const options = [
    {
      id: 1,
      label: 'Shopping',
      value: 'shopping'
    },
    {
      id: 2,
      label: 'Invoice',
      value: 'invoice'
    },
    {
      id: 3,
      label: 'gym',
      value: 'gym'
    },
    {
      id: 4,
      label: 'salary',
      value: 'salary'
    },
    {
      id: 5,
      label: 'family',
      value: 'family'
    },
    {
      id: 6,
      label: 'groceries',
      value: 'groceries'
    },
    {
      id: 7,
      label: 'other',
      value: 'other'
    },
  ]

  return (
    <FiltersContainer>
      <div >
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
      </FiltersContainer>
  )
}

export default Filters;