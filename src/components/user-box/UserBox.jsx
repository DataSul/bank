import './UserBox.css';
import { ImgButton, Container } from './UserBoxStyled';

const UserBox = (props) => {
    const handleDelete = () => {
      const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
      const updatedTransactions = transactions.filter(
        (transaction) =>
          transaction.created_at !== props.info.created_at ||
          transaction.type !== props.info.type ||
          transaction.category !== props.info.category ||
          transaction.amount !== props.info.amount
      );
      props.onDelete(updatedTransactions);
    };
  
    return (
      <div className="userBoxContainer" style={{ position: 'relative' }}>
        <Container>
          <ImgButton onClick={handleDelete}></ImgButton>
        </Container>
        <div
          className="userDiv"
          style={
            props.info.type === 'expense'
              ? { backgroundColor: 'rgb(220, 53, 69, 0.6)' }
              : { backgroundColor: 'rgb(40, 167, 69, 0.6)' }
          }
        >
          <h3>Created At: {props.info.created_at}</h3>
          <h3>Type: {props.info.type}</h3>
          <h3>Category: {props.info.category}</h3>
          <h3>Amount: {props.info.amount}</h3>
        </div>
      </div>
    );
  };
  

export default UserBox;