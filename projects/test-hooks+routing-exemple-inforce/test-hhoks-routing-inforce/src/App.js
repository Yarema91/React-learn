import React,{ useState } from 'react';
import './App.css';
import ListProducts from './ListProducts';
import Product from './Product';

const defaulProducts = [
  { id: 1, imageUrl: 'https://source.unsplash.com/1600x900/?iphone', name: 'Iphone 7plus ', count: 6, width: 300, height: 400, weight: 200, coments: [] },
  { id: 2, imageUrl: 'https://source.unsplash.com/1600x900/?Macbook', name: 'Macbook ', count: 4, width: 88, height: 40, weight: 120, comments: [] },
  { id: 3, imageUrl: 'https://source.unsplash.com/1600x900/?applewatch', name: 'Apple Watch ', count: 1, width: 450, height: 230, weight: 220, comments: [] }
]

function App() {
  // const [products, setProducts] = useState(products)
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
        // return b.count - a.count;
        return 0;
      });
  }

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


  const removeProd = (id, name) => {
    if (window.confirm(`Do you really remove this product?`)) { //${state.product.name}
      setState({ ...state, products: [...state.products.filter(product => product.id !== id)] })

    }

  }


  //sortByName
  const sortByName = (name) => {

    const sorted = [...state.products]

    // let direction = 'ascending';  //SortOrder
    // if (
    //   sortConfig &&
    //   sortConfig.key === key &&
    //   sortConfig.direction === 'ascending'
    // ) {
    //   direction = 'descending';
    // }

    // key= sortKey

    // .sort(function(a, b) {
    //   if(a.name.toLowerCase() < b.name.toLowerCase()) return -state.SortOrder || 1;
    //   if(a.name.toLowerCase() > b.name.toLowerCase()) return state.SortOrder;
    //   return 0;
    // })

    //  .sort((a, b) => a.name.localeCompare(b.name)); //work

    //  .sort((a, b) => a.name.toLowerCase() !== b.name.toLowerCase() ? a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1 : 0); //work
    console.log('sort');

    // // work it
    //     .sort(function(a, b){   
    //       let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
    //       if (nameA < nameB) //sort string ascending
    //        return -1;
    //       if (nameA > nameB)
    //        return 1;
    //       return 0; //default return value (no sorting)
    //      });

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


  // const handleToggle = (id) => {
  //   setProducts([...products.map(product => product.id === id ? {...product, complete: !product.complete } : {...product})])
  // }

  return (
    <div className="App">
      <h2>New product</h2>
      <ListProducts addProd={addProd} />
      <hr />
      <h1>List prodocts: {sortedProd.length}</h1>
      <div>
        <p>{state.SortOrder}{state.sortKey} </p>
        <button className='btn_sortByName' onClick={sortByName}>Sort by Name</button>
        <button className='btn_sortByCount' onClick={sortByCount}>Sort by Count</button>
        <p></p>
      </div>

      {sortedProd.map((product) => {
        return (
          <Product
            product={product}
            key={[product.id]}
            // toggle={handleToggle}
            removeProd={removeProd}
          />
        )
      })}
    </div>
  );
}

export default App;
