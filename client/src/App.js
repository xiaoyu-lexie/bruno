import React from 'react';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// import Axios from 'axios'

import Form from './components/Form'
import Products from './components/Products'
import Nav from './components/Nav'
import Edit from './pages/Edit'
import CategoryProducts from './pages/CategoryProducts'



const App = () => {

  // fetch all products
  const [products, setProducts] = useState([])

  // refetch and reoder all products after each new insertion
  const[refetch, setRefetch] = useState(1)

  // const [categoryData, setCategoryData] = useState([])

  const [playProducts, setPlayProducts] = useState([])
  const [eatProducts, setEatProducts] = useState([])
  const [sleepProducts, setSleepProducts] = useState([])



  // category useEffect and use useLayoutEffect to run before than useEffect


  // fetch all useEffect
  useEffect( () => {

    const fetchedData = async() => {
      const productsFomAPI = await fetchAll();
      // console.log('fetchAll useEffect running')
      setProducts(productsFomAPI)
    }

    fetchedData();
  }, [refetch])


  // fetch category useEffect
  // useEffect( () => {

  //   const fetchedCataData = async() => {
  //     const productsFomAPI = await fetchPlayCategory();
  //     // console.log('fetchAll useEffect running')
  //     setCategoryData(productsFomAPI)
  //   }

  //   fetchedCataData();
  // }, [])


  useEffect( () => {

    const fetchedPlayData = async() => {
      const playData = await fetchPlayCategory();
      // console.log('fetchAll useEffect running')
      setPlayProducts(playData)
    }

    fetchedPlayData();
  }, [refetch])



  const fetchPlayCategory = async() => {
    // console.log('fetching a category', category)

    const res = await fetch(`http://localhost:5000/category/play`)
    const data = await res.json()
    // console.log('data', data)
    return data
  }

  useEffect( () => {

    const fetchedEatData = async() => {
      const eatData = await fetchEatCategory();
      // console.log('fetchAll useEffect running')
      setEatProducts(eatData)
    }

    fetchedEatData();
  }, [refetch])



  const fetchEatCategory = async() => {
    // console.log('fetching a category', category)

    const res = await fetch(`http://localhost:5000/category/eat`)
    const data = await res.json()
    // console.log('data', data)
    return data
  }


  useEffect( () => {

    const fetchedSleepData = async() => {
      const sleepData = await fetchSleepCategory();
      // console.log('fetchAll useEffect running')
      setSleepProducts(sleepData)
    }

    fetchedSleepData();
  }, [refetch])


  const fetchSleepCategory = async() => {
    // console.log('fetching a category', category)

    const res = await fetch(`http://localhost:5000/category/sleep`)
    const data = await res.json()
    // console.log('data', data)
    return data
  }






  // fetch all poducts
  const fetchAll = async () => {
    // console.log('fetchingall running')
    const res = await fetch('http://localhost:5000/products')
    const data = await res.json()
    return data
  }


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
      <Nav playProducts= {playProducts} eatProducts= {eatProducts} sleepProducts={sleepProducts}/>

        <Switch>
          <Route path = '/' exact>
            <Form fetchAll = {fetchAll} addProduct = {addProduct}/>

            <Products products = {products} />
          </Route>

          <Route path ='/:category' exact component={CategoryProducts} />




          {/* <Route有2种写法，一个需要component，一个直接不需要；只有需要component的写法才能传递match, location这些。
          这是需要component的写法： */}
          <Route path = "/edit/:id" component = {Edit} />
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