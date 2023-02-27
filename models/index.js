const sql = require('../config/index');
const bcrypt = require('bcrypt');
const {createJWT} = require('../middleware/AuthenticatedUser')

class user {
    fetchUsers(result){
        sql.query(`SELECT userID, firstName, lastName, userEmail, userPass, userRole FROM users;`, (err,results) => {
            if(err) result(err);
            else result(null, results);
        })
    }

    fetchUser(id, result){
        sql.query(`SELECT userID, firstName, lastName, userEmail, userRole FROM users WHERE userID = ?;`, [id], (err, results) => {
            if(err) result(err, null);
            else result(null, results);
        })
    }

    async createUser(res, data, result){
        data.userPass = await bcrypt.hash(data.userPass, 15);
        let user = {
            emailAdd : data.userEmail,
            userPass : data.userPass
        };
        sql.query(`INSERT INTO users SET ?;`, [data], (err,results) => {
            if(err) result(err, null);
            else {
                const jwt = createJWT(user);
                res.cookie("LegitimateUser", jwt, {
                    maxAge: 3600000,
                    httpOnly: true
                });
                if(err) result(err,null);
                else result(null, results)
            }
        })
    }

    updateUser(data, id, result){
        if(data.userPass !== null || data.userPass !== undefined) data.userPass = bcrypt.hashSync(data.userPass, 15);
        sql.query(`UPDATE users SET ? WHERE userID = ?;`, [data, id], (err, results) => {
            if(err) result(err, null);
            else result(null, results);
        })
    }

    deleteUser(id, result){
        sql.query(`DELETE FROM users WHERE userID = ?;`, [id], (err, results) => {
            if(err) result(err, null);
            else result(null, results);
        })
    }
}

class products {
    fetchProducts(result){
        sql.query(`SELECT prodID, prodName, quantity, catID, imgUrl FROM products;`, (err, results) => {
            if(err) result(err, null);
            else result(null, results);
        });
    }

    fetchProduct(result){
        sql.query(`SELECT prodID, prodName, quantity, catID, imgUrl FROM products WHERE prodID = ?;`, [req.params.id], (err,results) => {
            if(err) result(err, null);
            else result(null, results);
        })
    }

    addProduct(result){
        sql.query(`INSERT INTO products SET ?;`, [req.body], (err, results) => {
            if(err) result(err, null);
            else result(null, results);
        })
    }

    updateProduct(result){
        sql.query(`UPDATE products SET ? WHERE prodID = ?;`, [req.body, req.params.id], (err, results) => {
            if(err) result(err, null);
            else result(null, results);
        })
    }

    deleteProduct(result){
        sql.query(`DELETE FROM products WHERE prodID = ?`, [req.params.id], (err, results) => {
            if(err) result(err, null);
            else result(null, results);
        })
    }
}

module.exports = {user, products};