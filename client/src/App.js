import React from 'react';
import {useState} from 'react';

import Form from './components/Form'
import Products from './components/Products'



const App = () => {

  // fetch all products
  const [products, setProducts] = useState([])

  const fetchAll = async () => {
    const res = await fetch('http://localhost:5000/products')
    const data = await res.json()
    console.log('fetchall is run')
    setProducts(data)
  }

  return (
    <div>
     <Form fetchAll = {fetchAll}/>
     <Products products = {products} />
  </div>
  )
}

export default App;