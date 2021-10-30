import React from 'react';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// import Axios from 'axios'

import Form from './components/Form'
import Products from './components/Products'
import Nav from './components/Nav'
import Edit from './pages/Edit'



const App = () => {

  // fetch all products
  const [products, setProducts] = useState([])

  // refetch and reoder all products after each new insertion
  const[refetch, setRefetch] = useState(1)

  const [category, setCategory] = useState() //useState括号里的内容也会影响 category useEffect运行次数，如果这里的括号里是（‘’），每次页面刷新后 category useEffect会运行2次，但如果括号里是空的话，只运行1次

  // category useEffect
  useEffect( () => {
    // console.log('category useEffect running', category)
    const fetchedCategotyData = async() => {
      const productsFomCategoryAPI = await fetchCategory();
      setProducts(productsFomCategoryAPI)
      console.log('productsFomCategoryAPI', productsFomCategoryAPI)
    }

    fetchedCategotyData();
  }, [category])

  // fetch all useEffect
  useEffect( () => {
    // console.log('useEffect running')
    const fetchedData = async() => {
      const productsFomAPI = await fetchAll();
      setProducts(productsFomAPI)
    }

    fetchedData();
  }, [refetch])






  const fetchCategory = async(specificCategory) => {
    // console.log('fetching a category', category)

    const res = await fetch(`http://localhost:5000/category/${category}`)
    const data = await res.json()
    console.log('data', data)
    return data
  }

  const invokeFetchCategory = (specificCategory) => {
    setCategory(specificCategory)
  }

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
        await fetch('http://localhost:5000/products', {
            method: 'POST',
            body: JSON.stringify(newProductInfo),
            headers: { 'Content-Type': 'application/json' },
        });

        setRefetch(refetch+1)


        // const updatedAllAfterAdding = await res.json()
        // setProducts([...products, updatedAllAfterAdding])

    } catch (err) {
        console.error(err);
    }
};




  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path = '/' exact>
            <Form fetchAll = {fetchAll} addProduct = {addProduct}/>
            <Nav fetchCategory={invokeFetchCategory} />
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