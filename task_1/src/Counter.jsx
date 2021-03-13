import React, { Component } from 'react';
import './counter.scss';

let counter = 0;

setInterval(() => {
    counter += 0;
    console.log(counter);
}, 1000);

class Counter extends Component {
    //Чтобы создать состояние мы используем класс
    // В кончтрукторе задаем начальное состояние
    constructor(props){
        console.log(props);
        super(props);

    // Мы можем менять данные которые в сотсоянии
    // именно этого компонента    
        this.state = {
           counter: props.state
        }

        setInterval(() => {
        // метод setState задает новое состояние счетчика   
        // Обновляет компоненту 
            this.setState({
                counter: this.state.counter + 1,
            })
        }, props.interval);
    }
    render() {
        return(
            <div className = "counter">{this.state.counter}</div>
        )
    }
}

export default Counter;
