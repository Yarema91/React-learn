import PropTypes from 'prop-types';
import {Wrapper} from './styles';
// import Transactions from '../Transactions';

const Transaction = ({transaction}) => (
    <Wrapper>
        Label: {transaction.label},
         <p>Value: {transaction.value}</p>
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