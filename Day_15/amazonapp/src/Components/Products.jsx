import React from 'react'

const Products = ({product}) => {
  return (
    <div className='product'>
        <img src={product.image} alt='' />
        <h2>{product.title}</h2>
        <h3>{product.price}</h3>
    </div>
  )
}

export default Products