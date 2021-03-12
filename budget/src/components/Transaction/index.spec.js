import React from 'react';
import {shallow} from 'enzyme';
import Transaction from '.';


describe('Transaction components', () => {
    let sut;
    let props;
    
    beforeEach(() => {
         props = {
            transaction: {
                value: 23,
                comment: 'test',
                date: '01.01.21'
    
            }
        };
        sut = shallow( <Transaction {...props}/>);
    })
    it('should show transaction', () => { 
        expect(sut).toMatchSnapshot();
    });
    it('should show  two zeros after amount', () => { 
        expect(sut.find('Value').text()).toBe('23.00')
        
    });
})