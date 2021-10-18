const express = require('express');

const router = express.Router();

const Product = require("../model/product.model")

const authenticate = require('../middleware/authenticate')
const authorize = require('../middleware/authorize')

router.post("", async function(req, res) {
    const product = await Product.create(req.body);

    return res.status(200).send(product);
})

router.get("", authenticate, authorize(["seller", "admin"]), async function(req, res) {
    const products = await Product.find().lean().exec();
    const user = req.user;

    delete user.password
    return res.send({products, user})
})

router.patch("/update/:id",authenticate,authorize(["seller", "admin"]), async function(req, res) {
    const products = await Product.findByIdAndUpdate(req.params.id,req.body, {new:true}).lean().exec();
    const user = req.user;

    delete user.password
    return res.send({products, user})
})

router.delete("/delete/:id", authenticate,authorize(["seller", "admin"]), async function(req, res) {
    const products = await Product.findByIdAndDelete(req.params.id).lean().exec();
    const user = req.user;

    delete user.password
    return res.send({products, user})
})

module.exports = router;