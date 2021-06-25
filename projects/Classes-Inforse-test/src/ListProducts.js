import React, { Component } from "react"
import ModalNewProd from "./Components/ModalNewProd";

//algo to day
//1. add product
//2. actual date products 
//.3 http crudcrud
//3. true render grid
//4. open detalis with image
//4. modal edit
//5. delete
//6.  sort 

class ListProducts extends Component {

    // const [products, setProducts] = useState([
    state = {
        products: [
            {
                id: 1,
                imageUrl: 'some url here',
                name: 'Product1 name',
                count: 4,
                size: {
                    width: 200,
                    height: 200
                },
                weight: '200g',
                comments: [Comment, Comment]
            },
            {
                id: 2,
                imageUrl: 'some url here',
                name: 'Product2 name',
                count: 6,
                size: {
                    width: 200,
                    height: 200
                },
                weight: '200g',
                comments: [Comment, Comment]
            }
        ],
        modal: false
    }

    //    onCreate = ({  imageUrl, name, count, size, weight  }) => {
    //     const { products } = this.state;
    //    }

    //handle
    Toggle = (e) => {
        console.log(this.state);
        if (this.state.modal === true) {
            this.setState({
                modal: false
            })
        } else {
            this.setState({
                modal: true
            })
        }

    }

    handleCallback = () => {
        console.log('modal close');
        this.setState({
            modal: false
        });            
    }


    //    addProd = (e) => {   
    //    }

    // //modal 
    // const [modal, setModal] = useState(false);
    // const Toggle = () => setModal(!modal);


    // // inputNewProd
    // const [inputNewProd, setInputNewProd] =  useState('')
    // const addProd = (e) => {
    //     console.log('addNewProd', e.target.value);
    //     setInputNewProd([
    //         ...products,
    //         {
    //             id: Math.random(),
    //             name: inputNewProd
    //         }
    //     ])
    
    render() {
        return (
            <div>
                <h1>ListProducts</h1>
                <ul >{this.state.products.map(product => (
                    <li  key={product.id}>
                        <span>id: {product.id}</span>,
                        <span>imageUrl: {product.imageUrl}</span>,
                        <span> name: {product.name}</span>,
                        <span> count: {product.count}</span>,
                        <span>size:  width: {product.size.width}, height: {product.size.height} </span>,
                        <span>  weight: {product.weight}</span>,
                        <span>  comments: {product.comments}</span>
                    </li>
                ))}
                </ul>

                <button className='clickMe' onClick={() => this.Toggle()}>New Product</button>
                <ModalNewProd  show={this.state.modal} add={this.addProd} parentCallback={this.handleCallback.bind(this)} title='Create new product'>

                    {/* This is modal dynamic contant */}
                    <form action="create-form">
                        <div>
                            <span>Add photo</span>
                            <input
                                className='input'
                                type="text"
                                text='name'
                                placeholder='url'
                            />
                        </div>
                        <div><span>Name</span>
                            <input
                                className='input'
                                type="text" text='name'
                                placeholder='name'
                                value={this.state.inputNewProd}
                                onChange={e => this.setInputNewProd(e.target.value)}
                            />
                        </div>

                        <div><span>Count</span>
                            <input type="number" className='input' text='name' placeholder='count' /></div>

                        <div><span>Size</span>
                            <input type="number" className='input' text='name' placeholder='width' />
                            <input type="number" className='input' text='name' placeholder='height' /></div>

                        <div><span> Weight</span>
                            <input type="number" className='input' text='name' placeholder='weight' /></div>

                    </form>
                </ModalNewProd>
               
</div>


            
            
        )
    }

    
}



export default ListProducts
