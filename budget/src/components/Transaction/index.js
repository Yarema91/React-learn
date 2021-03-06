const Transaction = (props) => (
    <div>
        Label: {props.transaction.label},
         <p>Value: {props.transaction.value}</p>
        <br/>
    </div>
                            
);
export default Transaction;