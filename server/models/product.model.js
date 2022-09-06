const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "You need a product title"],
        minLength:[3,"Your title must be at least 3 characters"],
        maxLength:[10, "Your title must be less than 11 characters"]
    },
    price:{
        type:Number,
        required:[true, "Product must have a price"]
    },
    description:{
        type:String,
        required:[true, "Product must have description"],
        minLength:[3,"Your description must be at least 3 characters"],
        maxLength:[49, "Your description must be less than 50 characters"]
    }
}, {timestamps:true}
)

// enum:{} only takes the specific values listed, "{VALUE}" is used to access the information the user put in

const Product = mongoose.model('Product',productSchema)

module.exports = Product