import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {

    const {removeFromDom, products, setProducts} = props;


    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
                
            })
            .catch(err => console.log(err))
    }
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
                return <p key={index}><Link to={`/products/${product._id}`} state={products}>{product.title}</Link>: Price: ${product.price}, Description: {product.description} <Link to={"/products/edit/" + product._id}>Edit</Link><button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button></p>
                })
            }

        </div>
    )
}

export default ProductList