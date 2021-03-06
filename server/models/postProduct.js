import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  amazonLink: String,
  positionOrder: Number,
  orderId: Number,
  promocode: String,
  promoStart: String, //Date
  promoEnd: String, //Date
  category: String,
  tags : [String],
  themeColor: String,
  image: String
})

const PostProduct = mongoose.model('bruno', postSchema);

export default PostProduct;