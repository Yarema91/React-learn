import React, { Component } from 'react';
import Balance from '../Balance';
import Transactions from '../Transactions';
import Form from '../Form';
import { Wrapper } from './styles';
import ErrorBoundary from '../ErrorBoundary';


let id = 0;
class Home extends Component {
    constructor() {
        super();
        this.state = {
            balance: 0,
            transactions: []


        }
        this.onChange = this.onChange.bind(this);
        // this.onDecrease = this.onDecrease.bind(this);
        console.log('constructor');
    }
    onChange = ({value, date, comment}) => {
        this.setState((state) => ({
            balance: state.balance + Number(value),
            transactions: [{
                value: +value,
                date,
                comment,
                id: ++id
            }, ...state.transactions]
        }))
    }

    render() {
        console.log('render');
        return (
            <ErrorBoundary>
                <Wrapper >

                    <Balance balance={this.state.balance} />
                    <Form onChange={this.onChange} />
                    <hr />
                    <Transactions transactions={this.state.transactions}   />

                </Wrapper>
            </ErrorBoundary>
        )
    }

}

export default Home;