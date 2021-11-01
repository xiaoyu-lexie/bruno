import SearchBar from './SearchBar'
import Category from './Category'


const Nav = ({playProducts, eatProducts, sleepProducts}) => {


  return (
    <nav>
      <SearchBar />
      <Category playProducts= {playProducts} eatProducts={eatProducts} sleepProducts={sleepProducts}/>
    </nav>
  )
}

export default Nav