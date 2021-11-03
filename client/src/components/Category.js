import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react';

const Category = ({playProducts, eatProducts, sleepProducts}) => {

//   const [category, setCategory] = useState('');

//   const [cataProducts, setCataProducts] = useState([])
//   // const params = useParams();
//   // const category = params.category

// the fetching data steps cannot be used in this component (but lifting up to App.js is a current solution), because after clicking any category, it requires a little time to process the fetching data from API, however, after the clicking category, the page is changing to category page very soon, which doesn't give enough time to fetch category data, and the data passed to CategoryProducts is just a promise that hasn't been resolved. That's why we lift the fetching category data to App.js.

// I also tried to take the fetching category data to CategoryProducts.js file, which still doesn't work. It surely works for the first cliking the category, but then the page will not respond to any more clicks. That happens because there is no state chaning in CategoryProducts.js leading to re-rendering. The click happens in Category.js, which can cause state change, and all of these change cannot pass to CategoryProducts. That's also why we lift the fetching category data to App.js.

//   const clickPlayCategory = async() => { //第二步async(e)
//     await setCategory('play')
//      console.log('category', category)
//    }

//    const clickEatCategory = async () => {
//      await setCategory('eat')
//       console.log('category', category)
//     }

//     const clickSleepCategory = async() => {
//       await setCategory('sleep')
//       console.log('category', category)
//     }

//   useEffect( () => {

//     const fetchedCategotyData = async() => {
//       const productsFomCategoryAPI = await fetchCategory();
//       console.log('USEEFEECT category', category)
//       setCataProducts(productsFomCategoryAPI)
//       // console.log('productsFomCategoryAPI', productsFomCategoryAPI)
//     }

//     fetchedCategotyData();
//   }, [category])

// const fetchCategory = async() => {
//   console.log('fetching category', category)

//   const res = await fetch(`http://localhost:5000/category/${category}`)
//   const data = await res.json()
//   // console.log('data', data)
//   return data
// }

// const playData = fetchPlayCategory();


// const fetchEatCategory = async(specificCategory) => {
//   // console.log('fetching a category', category)

//   const res = await fetch('http://localhost:5000/category/eat')
//   const data = await res.json()
//   // console.log('data', data)
//   return data
// }

// const eatData = fetchEatCategory()






  const allNewTo = {
    pathname: '/',
  }

  const playNewTo = {
    pathname: '/play',
    params1: 'play',
    products: playProducts
  }

  const eatNewTo = {
    pathname: '/eat',
    params1: 'eat',
    products: eatProducts
  }

  const sleepNewTo = {
    pathname: '/sleep',
    params1: 'sleep',
    products: sleepProducts
  }

  return (
    <div className='category'>
      <Link to={allNewTo}>
        <button >
          all
        </button>
      </Link>

      <Link to={playNewTo}>
        <button value='play' >
          play
        </button>
      </Link>

      <Link to={eatNewTo}>
        <button value='eat' >
          eat
        </button>
      </Link>

      <Link to={sleepNewTo} >
        <button value='sleep'>
          sleep
        </button>
      </Link>


      {/* <button value='all' onClick={clickCategory}>all</button>
      <button value='play' onClick={clickCategory}>play</button>
      <button value='eat' onClick={clickCategory}>eat</button>
      <button value='sleep' onClick={clickCategory}>sleep</button> */}
    </div>
  )
}

export default Category