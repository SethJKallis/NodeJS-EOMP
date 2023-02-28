const {user, products} = require('../models/index');
const userModel = new user();
const productsModel = new products;
const {createJWT} = require('../middleware/AuthenticatedUser')

class control {
    //USER CONTROL
    fetchUsers(req,res){
        userModel.fetchUsers((err,results) => {
            if(err) res.send({err});
            else res.send({results})
        })
    }
    fetchUser(req,res){
        const id = req.params.id;
        userModel.fetchUser(id, (err,result) => {
            if(err) res.send({err});
            else res.send({result})
        })
    }
    createUser(req,res){
        const data = req.body;
        let user = {
            emailAdd : data.userEmail,
            userPass : data.userPass
        };
        userModel.createUser(data, (err,result) => {
            if(err) res.send({err});
            else{
                const jwt = createJWT(user);
                res.cookie("LegitimateUser", jwt, {
                    maxAge: 3600000,
                    httpOnly: true
                });
                res.send({result})
            } 
        })
    }
    updateUser(req,res){
        const data = req.body;
        const id = req.params.id;
        userModel.updateUser(data, id, (err,result) => {
            if(err) res.send({err});
            else res.send({result})
        })
    }
    deleteUser(req,res){
        const id = req.params.id;
        userModel.deleteUser(id, (err,result) => {
            if(err) res.send({err});
            else res.send({result})
        })
    }

    //PRODUCTS CONTROL
    fetchProducts(req,res){
        productsModel.fetchProducts((err,results) => {
            if(err) res.send({err});
            else res.send({results})
        })
    }
    fetchProduct(req,res){
        const id = req.params.id;
        productsModel.fetchProduct(id, (err,result) => {
            if(err) res.send({err});
            else res.send({result});
        })
    }
    createProduct(req,res){
        const data = req.body;
        productsModel.createProduct(data, (err,result) => {
            if(err) res.send({err});
            else res.send({result});
        })
    }
    updateProduct(req,res){
        const data = req.body;
        const id = req.params.id;
        productsModel.updateProduct(data, id, (err, result) => {
            if(err) res.send({err});
            else res.send({result});
        })
    }
    deleteProduct(req,res){
        const id = req.params.id;
        productsModel.deleteProduct(id, (err, result) => {
            if(err) res.send({err});
            else res.send({result});
        })
    }
}

module.exports = {control};