import {Label,Input,Container} from './LabelInput.styled'

const LabelInput = (props) => {
  return (
    <Container>
      <Label htmlFor={props.id}>{props.text}</Label>
      <Input
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </Container>
  );
};

export default LabelInput;