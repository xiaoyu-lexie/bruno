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

const getProduct = async(req, res) => {
  const {id} = req.params
  try {
    const product = await PostProduct.findById(id)
    res.json(product) // 如果没有这一行，/:id网页什么都不显示，且一直转圈圈
  } catch( err) {
    res.json({message: err.maeeage})
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

const updateProduct = async(req, res) => {
  const {id} = req.params;
  const body = req.body;

  await PostProduct.findByIdAndUpdate(id, body, {new:true})
  res.json(body)
}

const deleteProduct = async(req, res) => {
  const {id} = req.params;
  await PostProduct.findByIdAndRemove(id)
}

router.get('/', getProducts)
router.get('/:id', getProduct)

router.post('/', createProduct)

router.patch('/:id', updateProduct)

router.delete('/:id', deleteProduct)

export default router;