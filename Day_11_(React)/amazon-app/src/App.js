import './App.css';


const Header = () => {
  return (

    <div className="header">
      <img className="header-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png?20250504041148" alt="header-logo"/>
      <h2>Amazon Webpage</h2>

      <ul className="nav-list">
        <li>Home</li>
        <li>Cart</li>
        <li>About</li>
      </ul>

    </div>
  )
}

const Search = () => {

  return (

    <div className='search'>
      <input type='text' name='search' id='search'/>
      <button type='button'>Search</button>
    </div>
  )
}

const Product = () => {
  return (
    <div className='product'>
    <img className='prod-img' src='https://m.media-amazon.com/images/I/61GfiZngyIL._SL1500_.jpg' alt='Product-img'/>
    <h4>Crystal Moon Lamp</h4>
    <h5>199$</h5>
    </div>
  )
}


const Body = () => {
  return (
    <div className='body-container'>
      <Search/>
      <div className='product-container'>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>

    </div>
  )
}

const Footer = () => {

  <div className='footer'>
    <p></p>
  </div>
}

const App = () => {

  return (
    <div className='app'>
      <Header/>
      <Body/>
      <Product/>
      <Footer/>

    </div>
  )
}


export default App;