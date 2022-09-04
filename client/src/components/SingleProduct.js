import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, Link} from "react-router-dom";


const SingleProduct = (props) => {

    const [product, setProduct] = useState({})
    const {id} = useParams()

    // const {products} = props
    // const removeFromDom = productId => {
    //     setProduct(products.filter(product => products._id !== productId))
    // }

    // const deleteProduct = (productId) => {
    //     axios.delete('http://localhost:8000/api/product/' + productId)
    //         .then(res => {
    //             removeFromDom(productId)
    //         })
    //         .catch(err => console.log(err))
    // }
    

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then( res => {
                const response = res.data.product[0]
                console.log(res.data.product[0])
                setProduct(response)
            })
            .catch( err => console.log(err))
    }, [])

    return (
        <div>
            <h1><Link to={`/`}>Home</Link></h1>
            <p>Product name: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            {/* <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button> */}
        </div>
    )
}

export default SingleProduct