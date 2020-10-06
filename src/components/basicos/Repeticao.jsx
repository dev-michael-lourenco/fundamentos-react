import React from 'react'


import products from '../../data/products'

export default props=>{
    function getProductsListItem(){
        return products.map(product=>{
            return <li key={product.id}>
                {product.id} - R$ {product.name} - {product.price}
            </li>
        })
    }
    return(
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProductsListItem()}
            </ul>
        </div>
        
    )
}