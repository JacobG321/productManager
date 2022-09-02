const ProductController = require("../controller/product.controller")

const routes = (app) => {

    app.post('/api/product', ProductController.create)
    
    // get all
    app.get('/api/product', ProductController.getAll)

    // get one
    app.get('/api/product/:id', ProductController.getOne)

    //Update
    app.put('/api/product/:id', ProductController.update)

    //Destroy
    app.delete('/api/product/:id',ProductController.delete)

}


module.exports = routes