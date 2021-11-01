import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react';

const Category = ({playProducts, eatProducts, sleepProducts}) => {

  // const [category, setCategory] = useState('play');

  // const [products, setProducts] = useState([]) //useState括号里的内容也会影响 category useEffect运行次数，如果这里的括号里是（‘’），每次页面刷新后 category useEffect会运行2次，但如果括号里是空的话，只运行1次
  // const params = useParams();
  // const category = params.category

  // const clickPlayCategory = async() => {
  //   await setCategory('play')
  //    console.log('category', category)
  //  }

  //  const clickEatCategory = async () => {
  //    await setCategory('eat')
  //     console.log('category', category)
  //   }

  //   const clickSleepCategory = async() => {
  //     await setCategory('sleep')
  //     console.log('category', category)
  //   }

//   useEffect( () => {

//     const fetchedCategotyData = async() => {
//       const productsFomCategoryAPI = await fetchCategory();
//       console.log('category useEffect haha running', category)
//       setProducts(productsFomCategoryAPI)
//       // console.log('productsFomCategoryAPI', productsFomCategoryAPI)
//     }

//     fetchedCategotyData();
//   }, [category])

// const fetchPlayCategory = async(specificCategory) => {
//   // console.log('fetching a category', category)

//   const res = await fetch('http://localhost:5000/category/play')
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

      <Link to={sleepNewTo}>
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