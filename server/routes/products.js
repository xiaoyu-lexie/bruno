import express from 'express'
// import multer  from 'multer'
import cloudinary from '../cloudinary/index.js'
// import axios from 'axios';
// import FormData from 'form-data';
import pkg from 'remove.bg';
const { RemoveBgResult, RemoveBgError, removeBackgroundFromImageBase64 } = pkg;
// const upload = multer({ storage: storage })

const router = express.Router();
import PostProduct from  '../models/PostProduct.js'

const getProducts = async(req, res) => {
  // await PostProduct.deleteMany({});
  try {
    const products = await PostProduct.find().sort({orderId:1});
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
  // console.log('v2',cloudinary.v2.uploader)
  const post = req.body;
  // const image = req.file;
  // console.log('req body', post)

  var fileStr = req.body.image;
  // console.log('fileStr', fileStr)
  try {
    // const uploadResponse = await cloudinary.v2.uploader.upload(fileStr, {
    //   folder: 'BEFORE'
    // });
    // const beforeUrl = uploadResponse.url;

    // const formData = new FormData();
    // formData.append('size', 'auto');
    // formData.append('image_url', beforeUrl)


    const count = await PostProduct.count()
    const positionOrder = parseInt(post.positionOrder)

    if ( positionOrder> count) {
      const insertOrderId = positionOrder*1000
      post.orderId = insertOrderId
      // console.log('post', post)
    } else if (positionOrder > 1){


      const before = await PostProduct.find().sort({orderId: 1}).skip(positionOrder - 2).limit(1).lean();
      console.log('before', before)
      const beforeOrderId = before[0].orderId
      const after = await PostProduct.find().sort({orderId: 1}).skip(positionOrder - 1).limit(1).lean();
      const afterOrderId = after[0].orderId
      const insertOrderId = (beforeOrderId + afterOrderId) / 2
      post.orderId = insertOrderId

    } else {
      const after = await PostProduct.find().sort({orderId: 1}).limit(1).lean();
      const afterOrderId = after[0].orderId
      const insertOrderId = afterOrderId/ 2
      post.orderId = insertOrderId
    }




    const result = await removeBackgroundFromImageBase64({
      base64img: fileStr,
      apiKey: "AyZ9v1YZdp1tmcmFpEgb6tyv",
      size: "regular",
      type: "auto"
    })

    const base64img = 'data:image/png;base64,' + result.base64img;

    const removeBackground = await cloudinary.v2.uploader.upload(base64img, {
      folder: 'AFTER'
    });

    const afterUrl = removeBackground.url

    post.image = afterUrl



    const newPost = new PostProduct(post);

    await newPost.save();
    res.status(201).json(newPost)

//问题： 这么多个await 下面就用一个catch吗？
  } catch (err) {
      res.status(500).json({ err: 'Something went wrong' });
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