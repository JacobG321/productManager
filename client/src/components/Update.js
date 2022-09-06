import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";


const Update = (props) => {

    const {id} = useParams()
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                const response = res.data.product[0]
                console.log(res.data.product[0])
                console.log("response test", response.title)
                setTitle(response.title)
                setPrice(response.price)
                setDescription(response.description)
            })
            .catch(err => console.log(err))
    }, [])

    const updateProduct = (e) => {
        e.preventDefault()
        axios.put('http://localhost:8000/api/product/' + id, {
            title, //this is shortcut syntax for title:title
            price,
            description
        })
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={updateProduct}>
                <label htmlFor='title'>Product name</label>
                <input type="text" name="title" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                <label htmlFor='price'>Price</label>
                <input type="text" name="price" value={price} onChange={(e) => {setPrice(e.target.value)}}/>
                <label htmlFor='description'>Description</label>
                <input type="text" name="description" value={description} onChange={(e) => {setDescription(e.target.value)}}/>
                <input type="submit"/>
            </form>

        </div>
    )
}

export default Update