// import Edit from '../pages/Edit'
import {Link} from 'react-router-dom'

const Product =({product}) => {
  const newTo = {
    pathname: `/${product._id}`,
    params1: product
  }

  return (
    <div>
      <a href={`${product.amazonLink}`}>

          <p>{product._id}</p>
          <p>{product.title}</p>
          <p>{product.promoStart}</p>
          <p>{product.promoEnd}</p>
          <img src = {product.selectedFile} alt = ''></img>
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