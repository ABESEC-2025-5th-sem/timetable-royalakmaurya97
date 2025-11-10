import React from 'react'
import './Products.css'

const Products = ({product}) => {
  return (
    <div className='product'>
        <img src={product.image} alt={product.title} />
        <span className='product-category'>{product.category}</span>
        <h2>{product.title}</h2>
        <div className='product-rating'>
          {'⭐'.repeat(Math.floor(product.rating))} 
          <span>({product.rating})</span>
        </div>
        <h3>{product.price}</h3>
        <button className='add-to-cart-btn'>Add to Cart</button>
    </div>
  )
}

export default Products