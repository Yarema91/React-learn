import React, { useState } from 'react';
import FormProduct from './FormProduct';
import ProductItem from './ProductItem';
import Modal from './Components/Modal';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Card } from '@material-ui/core';
// import { Button, TextField, DialogTitle, Dialog, DialogContent, DialogActions, DialogContentText} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
    },
}));

const defaulProducts = [
    { id: 1, imageUrl: 'https://source.unsplash.com/1600x900/?iphone', name: 'Iphone 7plus ', count: 6, width: 300, height: 400, weight: 200, coments: [] },
    { id: 2, imageUrl: 'https://source.unsplash.com/1600x900/?Macbook', name: 'Macbook ', count: 4, width: 88, height: 40, weight: 120, comments: [] },
    { id: 3, imageUrl: 'https://source.unsplash.com/1600x900/?applewatch', name: 'Apple Watch ', count: 1, width: 450, height: 230, weight: 220, comments: [] }
]

const ListProducts = () => {

    const classes = useStyles();

    const [state, setState] = useState(
        {
            SortOrder: 1,
            products: defaulProducts,
            sortKey: 'name',
            newproductform: { name: 'car', weight: 4 }
        });


    //default sort
    let sortedProd;
    if (state.sortKey === 'name') {
        sortedProd = state.products
            .sort(function (a, b) {
                if (a.name.toLowerCase() < b.name.toLowerCase()) return -state.SortOrder || 1;
                if (a.name.toLowerCase() > b.name.toLowerCase()) return state.SortOrder;
                return 0;
            })
    }
    else {
        sortedProd = [...state.products]
            .sort(function (a, b) {
                if (a.count < b.count) return -state.SortOrder;
                if (a.count > b.count) return state.SortOrder;
                return 0;
            });
    }

    //add product
    const addProd = (productInput) => {

        if (productInput) {
            const newProd = {
                id: Math.random().toString(36).substr(2, 9),
                imageUrl: productInput.imageUrl,
                name: productInput.name,
                count: productInput.count,
                width: productInput.width,
                height: productInput.height,
                weight: productInput.weight,
                comments: []
            }
            setState({ ...state, products: [...state.products, newProd] })
        }
    }

    //delete product
    const removeProd = ( event, id, name) => {
        event.preventDefault();
        console.log(event, id, name);
        if (window.confirm(`Do you really remove this product?`)) { //${state.product.name}

            setState({ ...state, products: [...state.products.filter(product => product.id !== id)] })
        }
    }


    //sortByName
    const sortByName = (name) => {

        const sorted = [...state.products]
        console.log('sort');
        setState({ products: sorted, SortOrder: -state.SortOrder, sortKey: 'name' });
    }

    //sortByCount
    const sortByCount = (count) => {

        // console.log('count');
        const sortedCount = [...state.products]
            .sort(function (a, b) {
                if (a.count < b.count) return -state.SortOrder;
                if (a.count > b.count) return state.SortOrder;
                // return b.count - a.count;
                return 0;
            });
        setState({ products: sortedCount, SortOrder: -state.SortOrder, sortKey: 'count' });
    }

    return (
        <div>
            {/* <h2>New product</h2>
            <FormProduct addProd={addProd}/>
            <hr /> */}

            <h1>List prodocts: {sortedProd.length}</h1>
            <div>
                <Modal title='Create product' > 
                   <FormProduct addProd={addProd} />
                </Modal>

                <p>{state.SortOrder}{state.sortKey} </p>
                <button className='btn_sortByName' onClick={sortByName}>Sort by Name</button>
                <button className='btn_sortByCount' onClick={sortByCount}>Sort by Count</button>
                <p></p>
            </div>
            {/* container spacing={2} justify='center' */}
            <Container className={classes.cardGrid} maxWidht='md'>
                <Grid container spacing={4} >
                { sortedProd.map((product) => (
                    <Grid item  xs='12' sm='6' md='4'>
                        <Card onClick={ () => {console.log('details')}}>
                        <ProductItem
                        product={product}
                        key={[product.id]}
                        // toggle={handleToggle}
                        removeProd={removeProd}
                    />
                        </Card>
                    </Grid>
                )
            )}
                </Grid>
            </Container>
            {/* {sortedProd.map((product) => {

        
return (
    <ProductItem
        product={product}
        key={[product.id]}
        // toggle={handleToggle}
        removeProd={removeProd}
    />
)
})} */}


           
        </div>
    )
}

export default ListProducts




// class Person {
//     constructor() {
//       this.firstName = "Mike";
//       this.lastName = "Patel";
  
//       this.getName = () => {
//         return this.firstName + " " + this.lastName;
//       };
//     }
//   }
