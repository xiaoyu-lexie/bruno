import express from 'express';
import bodyParse from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postsRoute from './routes/products.js'
const app = express();

app.use(bodyParse.json({ limit: "30mb", extended: true }))
app.use(bodyParse.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())


app.use('/products', postsRoute);


const CONNECTION_URL = 'mongodb+srv://xiaoyu:javascript123@cluster0.xot7l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
  .then (()=> app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message))