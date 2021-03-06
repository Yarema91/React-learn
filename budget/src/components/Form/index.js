import { Component } from "react";

class Form extends Component {
    // constructor() {
    //     super();
    // }

    onSubmit= (e) => {
        e.preventDefould();

    }
    
    render() {
        return (<form onSubmit={this.onSubmit}>
            <input name='balanse' type='number' placeholder='Sum'></input>
            <button>Save</button>
        </form>)
    }

}

export default Form; 
