import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import Products from '../components/Products'

const CategoryProducts = ({match, location}) => {

  return (
    <Products products = {location.products} />
    // <h1>ha</h1>
  )
}

export default CategoryProducts