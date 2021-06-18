import PropTypes from 'prop-types';
import { useCallback, useContext } from "react";
import { AppContext } from "../../providers/context";
import { Wrapper, TransactionDate, Value, Comment, Icon } from './styles';
import Star0 from "./../../assets/star0.svg";
import Star from "./../../assets/star.svg";
// src/assets/star (1).svg




const Transaction = ({ transaction: { id, value, date, comment, isStarred }, onDelete, onStarClick }) => {
    const { state } = useContext(AppContext);

    const deleteItem = useCallback(() => onDelete(id), [id]);

    return (
        <Wrapper value={value}>
            <Icon onClick={() => onStarClick(id)}>
                <img src={isStarred ? Star : Star0}/>
            </Icon>
            <TransactionDate>{date}</TransactionDate>
            <Value>{value.toFixed(2)}, {state.currency}</Value>
            <Comment>{comment}</Comment>
            <button onClick={deleteItem}>Delete</button>
            <br />
        </Wrapper>
    )
};

Transaction.propTypes = {
    transaction: PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.number
    }),
    onStarClick: PropTypes.func
   
}

Transaction.defould = {
    transactions: {
        label: '',
        value: 0
    }
}

export default Transaction;