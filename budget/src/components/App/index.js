import React, {Component} from 'react';
import Balance from '../Balance';
import Transactions from '../Transactions';
import Form from '../Form';


// let id = 0;
class App extends Component {
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
    onChange = (value) => {
        this.setState((state) => ({ 
            balance: state.balance + Number(value),
            transactions: [{
                 value,
                 label: 'change',
                 id: ++id
                },...state.transactions]
            }))
    }

    //  onIncrease () {
    //     this.setState((state) => ({
    //         balance: this.state.balance + 1,
    //         transactions: [{
    //             label: 'increase',
    //             value: 1,
    //             id: ++id
    //         }, ...state.transactions]
    //     }))
    //  }
    //  onDecrease = () => {
    //     this.setState((state) => ({
    //         balance: this.state.balance - 1,
    //         transactions: [{
    //             label: 'decrease',
    //             value: -1,
    //             id: ++id
    //         }, ...state.transactions]
    //     }))
    // }

     render() {
        console.log('render');
        return (
            
            < >
                <Balance balance={this.state.balance}/>
                <Form onChange={this.onChange}/>
                <hr/>
                <Transactions transactions={this.state.transactions}/>
            </>
            )
     }
     
}

export default App;