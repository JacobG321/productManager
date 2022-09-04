import React, { useState } from 'react'
import axios from 'axios';
const ProductForm = (props) => {
    const {products, setProducts} = props
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // make sure you change axios post
        axios.post('http://localhost:8000/api/product', { 
            title,
            price,
            description
        })
            .then(res=>{
                console.log(res);
                console.log(res.data);
                setProducts([...products, res.data])
            })
            .catch(err=>{console.log(err)})
        // why doesnt setTitle('') work?
        e.target.reset()
    }
    
    return (
        <form onSubmit={onSubmitHandler}>

                <label htmlFor='title'>Title</label>
                <input type="text" name='title' onChange = {(e)=>setTitle(e.target.value)}/>

                <label htmlFor='price'>Price</label>
                <input type="number" name="price" onChange = {(e)=>setPrice(e.target.value)}/>

                <label htmlFor='description'>Description</label>
                <input type="text" name="description" onChange = {(e)=>setDescription(e.target.value)}/>

                <input type="submit"/>
        </form>
    )
}
export default ProductForm;