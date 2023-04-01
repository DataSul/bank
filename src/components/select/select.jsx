import {SelectContainer,SelectLabel,SelectDropdown} from './Select.styled'
const Select = (props) => {
  return (
      <SelectContainer>
          <SelectLabel htmlFor={props.id}>{props.text}</SelectLabel>
    <SelectDropdown name="select" id={props.id} onChange={props.onChange}>
      {props.options.map((option) => (
          <option key={option} value={option}>
          {option}
        </option>
      ))}
    </SelectDropdown>
      </SelectContainer>
  );
};

export default Select