import React, {useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {

    const {products, setProducts} = props;

    useEffect(()=>{
        axios.get("http://localhost:8000/api/product")
        .then((res)=>{
        // console.log("useffect console",res.data.products);
            // had to go a step deeper, res.data is an object, needed to access products in that object
            setProducts(res.data.products);
	})
        .catch((err)=>{
            console.log(err);
        })
        // [] watches for any changes in the dependancy, this one is products
    }, [products.length-1])

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(() => {
                console.log(productId)
                setProducts(products.filter(product => product._id != productId))
            })
            .catch(err => console.log(err))
    }

    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th colSpan="2">Products</th>
                    </tr>
                    <tr>
                        <td>Product name</td>
                        <td>Price</td>
                        <td>Description</td>
                        <td>View/Edit/Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index)=>{
                        return  <tr key={index}>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td>
                                    <Link to={{pathname:`/products/${product._id}`}} >View </Link>
                                    <Link to={"/products/edit/" + product._id}>Edit </Link>
                                    <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductList