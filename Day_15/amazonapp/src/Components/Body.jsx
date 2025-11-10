import React, { useEffect, useState } from 'react'
import Products from './Products'
import Search from './Search'

const Body = () => {

  const [products, setProducts] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data)=> {
        setProducts(data);
        setFilterData(data);
      })
      .catch((error) => console.log("Unable to load data", error))
  }, [])

  const searchHandler = (query) => {
    const data = products.filter((product) => product.title.toLowerCase().includes(query.toLowerCase()))
    setFilterData(data);
  }
  return (
    <div className='body'>
        <Search searchHandler={searchHandler}/>
        <div className="products-container" style={{display:"flex", flexWrap:"wrap", gap:"25px"}}>
            {filterData.map((product) => <Products product={product}/>)}
        </div>
    </div>
  )
}

export default Body