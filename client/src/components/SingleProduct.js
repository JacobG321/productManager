import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, Link} from "react-router-dom";


const SingleProduct = (props) => {

    const [product, setProduct] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then( res => {
                console.log(res.data.product[0])
                setProduct(res.data.product[0])
            })
            .catch( err => console.log(err))
    }, [])

    return (
        <div>
            <h1><Link to={`/`}>Home</Link></h1>
            <p>Product name: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}

export default SingleProduct