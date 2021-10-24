import React from 'react';
import {useState, useEffect} from 'react';

import Form from './components/Form'
import Products from './components/Products'



const App = () => {

  // fetch all products
  const [products, setProducts] = useState([])

  useEffect( () => {
    console.log('useEffect running')
    const fetchedData = async() => {
      const productsFomAPI = await fetchAll();
      setProducts(productsFomAPI)
    }
    fetchedData();

  }, [])

  // fetch all poducts
  const fetchAll = async () => {
    console.log('fetchingall running')
    const res = await fetch('http://localhost:5000/products')
    const data = await res.json()
    return data
  }

  //add product
  const addProduct = async(newProduct) => {
    const res = await fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newProduct)
    })

    const updatedAllAfterAdding = await res.json()
    setProducts([...products, updatedAllAfterAdding])
  }


  return (
    <div>
     <Form fetchAll = {fetchAll} addProduct = {addProduct}/>
     <Products products = {products} />
     {/* add edit and delete page */}
  </div>
  )
}

export default App;