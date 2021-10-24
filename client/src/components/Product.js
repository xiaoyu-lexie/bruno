const Product =({product}) => {
  return (
    <div>
    <a href={`${product.amazonLink}`}>
        <p>{product.title}</p>
        <p>{product.promoStart}</p>
        <p>{product.promoEnd}</p>
        <img src = {product.selectedFile} alt = ''></img>
    </a>
    </div>
  )
}

export default Product