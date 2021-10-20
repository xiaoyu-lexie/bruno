import Product from './Product'

const Products = ({products}) => {
  const productsComponents = products.map((product) => {
     return <Product key = {product._id} product = {product} />
  })
  return (
    <>
      {productsComponents}
    </>
  )
}

export default Products;