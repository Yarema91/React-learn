const Product = ({product, toggle, removeProd}) => {
    return (
        <div key={product.id} className='item-prod'>
            <div 
            // className={product.complete ? 'item-text strike' : 'item-text'}
            // onClick={() => ToggleName(product.id)}
            >
                {product.imageUrl},
                name: {product.name},
                count: {product.count} 
                <button className="item-delete" onClick={()=> removeProd(product.id)}>delete</button>
            </div>
           
        </div>
    )
}
export default Product
