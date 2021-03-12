import PropTypes from 'prop-types';
import {Wrapper,TransactionDate, Value, Comment } from './styles';
// import Transactions from '../Transactions';

const Transaction = ({transaction: {value, date, comment}}) => (
    <Wrapper value={value}> 
        <TransactionDate>{date}</TransactionDate>
        <Value>{value.toFixed(2)}</Value>
        <Comment>{comment}</Comment>
        <br/>
    </Wrapper>                            
); 

Transaction.propTypes = {
    transaction: PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.number
    })
}

Transaction.defould = {
    transactions: {
        label: '',
        value: 0
    }
    }

export default Transaction;