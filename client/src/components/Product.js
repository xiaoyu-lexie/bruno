const Product =({product}) => {
  return (
    <div>
      <p>{product.title}</p>
      <p>{product.promoStart}</p>
      <p>{product.promoEnd}</p>
      <img src = {product.selectedFile} alt = ''></img>
    </div>
  )
}

export default Product