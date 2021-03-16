const express = require('express');
const router = express.Router();
const ProductModel = require('../model/product')


/* Create Product */
router.post('/', async(req, res, next) =>{
  const { productName, productCategory } = req.body
  if (!productName && !productCategory) {
    res.json(400, {message: 'Missing Arguements'})
  }
  await ProductModel.create({productName, productCategory})
  res.json(200, {message: 'Product added successfully.'})
});

/* GET Product listing. */
router.get('/', async(req, res, next)=>{
  const getAllProduct = await ProductModel.find({}).sort({'_id': -1}).lean().exec()
  res.json(200, {data: getAllProduct})
});


module.exports = router;
