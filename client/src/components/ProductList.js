import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {

    const {products, setProducts} = props;
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/product")
        .then((res)=>{
        console.log(res.data.products);
            // had to go a step deeper, res.data is an object, needed to access products in that object
            setProducts(res.data.products);
	})
        .catch((err)=>{
            console.log(err);
        })
    }, [])
    return (
        <div>
            <h1>Product List</h1>
            {
                products.map((product, index)=>{
                return <p key={index}><Link to={`/products/${product._id}`}>{product.title}</Link>, Price: ${product.price}, Description: {product.description}</p>
                })
            }

        </div>
    )
}

export default ProductList