const Product = require("../models/product.model")

const ProductController = {

    // Create
    // bad request for create error
    create:(req,res) =>{
        Product.create(req.body)
        .then((product)=>{
            res.status(201).json({product:product})
        })
        .catch((err)=>{
            res.status(400).json({message:"There has been an error", error:err})
        })
    },

    // Read, the first item passed through .json is the key in the api
    getAll:(req,res) =>{
        Product.find({})
        .then((product)=>{
            res.status(200).json({products:product})
        })
        .catch((err)=>{
            res.status(500).json({message:"There has been an error", error:err})
        })
    },
    getOne:(req,res)=>{
        Product.find({_id:req.params.id})
        .then((product)=>{
            // logic here does not work but this is how you do it
            // if(productExists) {
            //     return Promise.reject("product does not exist")
            // }
            res.status(200).json({product:product})
        })
        .catch((err)=>{
            res.status(500).json({message:"There has been an error",error:err})
        })
    },


    // Update, run validators runs the validations on update
    update:(req,res)=>{
        Product.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
        .then((product)=>{
            res.status(200).json({updatedproduct:product})
        })
        .catch((err)=>{
            res.status(400).json({message:"Something has gone wrong",error:err})
        })
    },

    // Delete
    delete:(req,res)=>{
        Product.findOneAndDelete(req.params.id)
        .then((product)=>{
            res.status(200).json({deletedproduct:product})
        })
        .catch((err)=>{
            res.status(500).json({message:"There has been an error",error:err})
        })
    }


}

module.exports=ProductController