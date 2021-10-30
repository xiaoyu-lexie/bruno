import express from 'express'

const router = express.Router();
import PostProduct from  '../models/PostProduct.js'


const getCategoryProducts = async(req,res) => {
  const {category} = req.params
  try {
    const products = await PostProduct.find(
      { 'category': { '$regex': `/${category}`, "$options": "i" } }).sort({positionOrder:1, _id: -1});
    res.json(products)
  } catch(err) {
    res.json({message: err.message})
  }



}


router.get('/:category', getCategoryProducts)

export default router;