// import Edit from '../pages/Edit'
import {Link} from 'react-router-dom'

const Product =({product}) => {
  const newTo = {
    pathname: `/${product._id}`,
    params1: product
  }

  const styles = {
    backgroundColor: product.themeColor
  }

  return (
    <div className = 'product'>
      <a href={`${product.amazonLink}`}>
        <div className='each' style={styles}>

          <div className='text'>
            <p>{product.title}</p>
            <p>{product.category}</p>
            <p>{product.promocode}</p>
            <p>{product.promoStart}</p>
            <p>{product.promoEnd}</p>
          </div>

          <div className='image'>
            <img src = {product.image} alt = ''></img>
          </div>
        </div>
      </a>


      <button>
        <Link to= {newTo}>
          Edit
        </Link>
      </button>

    </div>
  )
}

export default Product