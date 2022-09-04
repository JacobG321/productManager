import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, Link, useNavigate} from "react-router-dom";


const SingleProduct = (props) => {

    const [product, setProduct] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then( res => {
                const response = res.data.product[0]
                console.log(res.data.product[0])
                setProduct(response)
            })
            .catch( err => console.log(err))
    }, [])

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(()=> navigate('/'))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1><Link to={`/`}>Home</Link></h1>
            <p>Product name: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
        </div>
    )
}

export default SingleProduct