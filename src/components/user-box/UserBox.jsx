import './UserBox.css'

const UserBox = (props) => {
    return(
        <div className="userDiv" style={props.info.type === "expense"? {backgroundColor: 'rgb(220, 53, 69, 0.6)'}: {backgroundColor: 'rgb(40, 167, 69, 0.6)'}}>
            <h3>Created At: {props.info.created_at}</h3>
            <h3>type: {props.info.type}</h3>
            <h3>category: {props.info.category}</h3>
            <h3>amount: {props.info.amount}</h3>
        </div>
    )
}

export default UserBox