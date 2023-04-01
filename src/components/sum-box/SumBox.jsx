const SumBox = (props) => {
    return(
        <div className="sumBox">
            <h3>{props.text}</h3>
            <p>{props.amount}</p>
        </div>
    )
}

export default SumBox 