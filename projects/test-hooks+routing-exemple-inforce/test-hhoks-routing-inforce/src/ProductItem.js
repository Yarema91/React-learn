import React from "react"
import DeleteAlert from './Components/DeleteAlert'


const ProductItem = ({product, removeProd}) => {
    return (
        <div key={product.id} className='item-prod'>
            <div 
            // className={product.complete ? 'item-text strike' : 'item-text'}
            // onClick={() => ToggleName(product.id)}
            >
                <img src={product.imageUrl} alt="image " className='img-item'></img>
                <form action="form">
                name: {product.name},
                count: {product.count},
                size: ({product.width} x {product.height})sm,
                weight: {product.weight}g
                {/* <button className="item-details" onClick={() => {}}>delails</button> */}
                <button className="item-delete" onClick={(e)=> removeProd(e, product.id)}>delete</button>
                {/* <DeleteAlert/> */}
          
                </form>
            </div>
           
        </div>
    )
}
export default ProductItem
