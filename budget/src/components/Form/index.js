import { Component } from "react";
import PropTypes from 'prop-types';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            value: []
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state, this.props);
        // debugger
        this.props.onChange(this.state.value)
        this.setState({
            value: ''
        })
    }

    onChange = (e) => {
        const { value } = e.target;

        this.setState({
            value: +value
        })
    }
    
    render() {
        return (<form onSubmit={this.onSubmit}>
            <input name='balanse' 
            type='number' 
            placeholder='Sum'
            value={this.state.value}
            onChange={this.onChange}/>
        
            <button>Save</button>
        </form>)
    }
}

Form.propTypes = {
    onChange: PropTypes.func
};

export default Form; 
