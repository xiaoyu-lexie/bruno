import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  positionOrder: Number,
  promocode: String,
  promoStart: String, //Date
  promoEnd: String, //Date
  category: String,
  tags : [String],
  themeColor: String,
  selectedFile: String
})

const PostProduct = mongoose.model('bruno', postSchema);

export default PostProduct;