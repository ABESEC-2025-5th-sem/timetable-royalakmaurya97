import React, { useEffect, useState } from 'react'
import Products from './Products'
import Search from './Search'
import './Body.css'

const Body = () => {

  const [products, setProducts] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data)=> {
        setProducts(data);
        setFilterData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Unable to load data", error);
        setLoading(false);
      })
  }, [])

  const searchHandler = (query) => {
    const data = products.filter((product) => product.title.toLowerCase().includes(query.toLowerCase()))
    setFilterData(data);
  }

  return (
    <div className='body'>
        <h1 className='products-heading'>Our Products</h1>
        <p className='products-subheading'>Discover amazing products at great prices</p>
        <Search searchHandler={searchHandler}/>
        {loading ? (
          <div className='loading'>Loading products</div>
        ) : (
          <div className="products-container">
            {filterData.length > 0 ? (
              filterData.map((product) => <Products key={product.id} product={product}/>)
            ) : (
              <div className='no-products'>No products found. Try a different search!</div>
            )}
          </div>
        )}
    </div>
  )
}

export default Body