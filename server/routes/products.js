import express from 'express'

const router = express.Router();
import PostProduct from  '../models/PostProduct.js'

const getProducts = async(req, res) => {
  try {
    const products = await PostProduct.find();
    res.status(200).json(products)
  } catch(err) {
    res.status(404).json( { message: err.message })
  }
}

const createProduct = async(req, res) => {
  const post = req.body;

  const newPost = new PostProduct(post);

  try {
    await newPost.save();

    res.status(201).json(newPost)
  } catch (err) {
    res.status(409).json({ message: err.message })
  }
}

router.get('/', getProducts)

router.post('/', createProduct)

export default router;