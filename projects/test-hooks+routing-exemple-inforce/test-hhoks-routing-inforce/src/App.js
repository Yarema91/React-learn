// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import ListProducts from './ListProducts';
import Product from './Product';

const defaulProducts = [
  { id: 1, imageUrl: 'link', name: 'Iphone 7plus ', count: 3, coments: [] },
  { id: 2, imageUrl: 'link', name: 'Apple watch ', count: 4, comments: [] },
  { id: 3, imageUrl: 'link', name: 'Apple 12 ', count: 1, comments: [] }
]

function App() {
  // const [products, setProducts] = useState(products)

  const [state, setState] = useState(
    {
      SortOrder: 1, 
      products: defaulProducts, 
      newproductform: {name: 'car', weight: 4}
    });

  const addProd = ( productInput) => { 
    // {name, count, url}
    if (productInput) {
      const newProd = {
        id: Math.random().toString(36).substr(2, 9),
        imageUrl: productInput.imageUrl,
        name: productInput.name,
        count: productInput.count,
        // size: 
        // { width: width, height: height },
        // weight: weight,
        comments: []
      }
      setState({SortOrder: 1, products: [...state.products, newProd]})
    }
  }

  const removeProd = (id) => {
    setState({SortOrder: 1, products: [...state.products.filter(product => product.id !== id)]})
  }


  //sortByName
  const sortByName = (name) => {
    
    const sorted = [...state.products]

      .sort(function(a, b) {
        if(a.name.toLowerCase() < b.name.toLowerCase()) return -state.SortOrder;
        if(a.name.toLowerCase() > b.name.toLowerCase()) return state.SortOrder;
        return 0;
      })
    
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

   setState({products: sorted, SortOrder: -state.SortOrder });
  }

 //sortByCount
  const sortByCount = (count) => {

    // console.log('count');
    const sortedCount = [...state.products]
    .sort(function(a, b) {
      if(a.count < b.count) return -state.SortOrder;
      if(a.count > b.count) return state.SortOrder;
      // return b.count - a.count;
      return 0;
    });
    setState({products: sortedCount, SortOrder: -state.SortOrder});
  }


  // const handleToggle = (id) => {
  //   setProducts([...products.map(product => product.id === id ? {...product, complete: !product.complete } : {...product})])
  // }

  return (
    <div className="App">
      <h2>New product</h2>
      <ListProducts addProd={addProd} />
      <hr />
      <h1>List prodocts: {state.products.length}</h1>
          <p>
            <button className='btn_sortByName' onClick={sortByName}>Sort by Name</button>
            <button className='btn_sortByCount' onClick={sortByCount}>Sort by Count</button>
          </p>
      {state.products.map((product) => {
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
