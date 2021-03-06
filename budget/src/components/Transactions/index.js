import Transaction from '../Transaction';

const Transactions = (props) => (
    <div>
        {
           props.transactions.map((transaction) => <Transaction key={transaction.id}
                 transaction={transaction}/>

                    )
                }
    </div>
                            
);
export default Transactions;