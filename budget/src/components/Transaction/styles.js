import styled from 'styled-components';
// import Transaction from '.';

export const Wrapper = styled.div`
     background-color: ${({ value }) => value < 0 ? '#fdfde1' : '#fff'};
     border: 1px solid #dbdbdb ;
     border-radius: 3px;
     padding: 5px;
     margin: 10px;
     `;

Wrapper.displayName = 'TransactionWrapper'

export const TransactionDate = styled.div`
     flex-grow: 1;
     `;
TransactionDate.displayName = 'TransactionDate'

export const Value = styled.div`
     flex-grow: 1;
     `;
Value.displayName = 'Value'

export const Comment = styled.div`
     flex-grow: 2;
     `;
Comment.displayName = 'Comment'
 
