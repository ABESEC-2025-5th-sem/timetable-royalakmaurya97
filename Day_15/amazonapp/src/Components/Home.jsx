import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <section className='hero-section'>
        <h1 className='hero-title'>Welcome to Amazon App</h1>
        <p className='hero-subtitle'>Discover Amazing Products at Unbeatable Prices</p>
        <Link to="/product" className='hero-cta'>Shop Now</Link>
      </section>

      <section className='features-section'>
        <h2 className='features-title'>Why Shop With Us?</h2>
        <div className='features-grid'>
          <div className='feature-card'>
            <div className='feature-icon'>🚚</div>
            <h3>Fast Delivery</h3>
            <p>Get your orders delivered quickly and safely to your doorstep</p>
          </div>
          <div className='feature-card'>
            <div className='feature-icon'>💎</div>
            <h3>Quality Products</h3>
            <p>Handpicked quality products from trusted brands</p>
          </div>
          <div className='feature-card'>
            <div className='feature-icon'>💳</div>
            <h3>Secure Payment</h3>
            <p>Multiple payment options with secure checkout</p>
          </div>
          <div className='feature-card'>
            <div className='feature-icon'>🎁</div>
            <h3>Great Deals</h3>
            <p>Amazing discounts and offers on all categories</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home