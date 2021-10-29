import React from 'react';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Axios from 'axios'

import Form from './components/Form'
import Products from './components/Products'
import Edit from './pages/Edit'



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
    // console.log('fetchingall running')
    const res = await fetch('http://localhost:5000/products')
    const data = await res.json()
    return data
  }

  //add product
  // const addProduct = async (newProduct) => {
  //   const res = await fetch('http://localhost:5000/products', {
  //     method: 'POST',
  //     body: newProduct
  //   })
  //   // Axios.post('http://localhost:5000/products',newProduct)
  //   // .then(res => console.log(res))
  //   // .catch(err => console.log(err))

  //   // const updatedAllAfterAdding = await res.json()
  //   // setProducts([...products, updatedAllAfterAdding])
  // }

  // console.log('products', products)
  const addProduct = async (newProductInfo) => {
    try {
        const res = await fetch('http://localhost:5000/products', {
            method: 'POST',
            body: JSON.stringify(newProductInfo),
            headers: { 'Content-Type': 'application/json' },
        });

        const updatedAllAfterAdding = await res.json()
        setProducts([...products, updatedAllAfterAdding])


    } catch (err) {
        console.error(err);
    }
};


  return (
    <Router>
      <div>
        <Switch>
          <Route path = '/' exact>
            <Form fetchAll = {fetchAll} addProduct = {addProduct}/>
            <Products products = {products} />
          </Route>
          {/* <Route有2种写法，一个需要component，一个直接不需要；只有需要component的写法才能传递match, location这些。
          这是需要component的写法： */}
          <Route path = "/:id" component = {Edit} />
          {/* 不需要component的写法： */}
          {/* <Route path = '/:id'>
            <Edit />
          </Route> */}
        </Switch>
    </div>
  </Router>
  )
}

export default App;