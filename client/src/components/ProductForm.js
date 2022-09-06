import React, { useState } from 'react'
import axios from 'axios';
const ProductForm = (props) => {
    const {products, setProducts} = props
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState([])

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', { 
            title,
            price,
            description
        })
            .then(res=>{
                console.log(res.data);
                setProducts([...products, res.data])
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors
                const errorArray = []
                for (const key of Object.keys(errorResponse)) {
                    errorArray.push(errorResponse[key].message)
                }
                setErrors(errorArray)
            })
        e.target.reset()
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
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