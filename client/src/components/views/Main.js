import React, { useState } from 'react'
import ProductForm from '../ProductForm'
import ProductList from '../ProductList'

const Main = (props) => {

    const [products, setProducts] = useState([])
    const removeFromDom = productId => {
        setProducts(products.filter(person => products._id !== productId))
    }

    return (
        <div>
            <ProductForm products={products} setProducts={setProducts}/>
            <ProductList products={products} setProducts={setProducts} removeFromDom={removeFromDom}/>
        </div>
    )
}

export default Main