import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section'>
          <h3>About Us</h3>
          <div className='company-info'>
            <p>Your trusted online shopping destination for quality products at great prices.</p>
          </div>
          <div className='social-icons'>
            <a href='#' className='social-icon' aria-label='Facebook'>📘</a>
            <a href='#' className='social-icon' aria-label='Twitter'>🐦</a>
            <a href='#' className='social-icon' aria-label='Instagram'>📷</a>
            <a href='#' className='social-icon' aria-label='LinkedIn'>💼</a>
          </div>
        </div>

        <div className='footer-section'>
          <h3>Customer Service</h3>
          <ul>
            <li><a href='#'>Help Center</a></li>
            <li><a href='#'>Track Order</a></li>
            <li><a href='#'>Returns & Exchanges</a></li>
            <li><a href='#'>Shipping Info</a></li>
            <li><a href='#'>FAQ</a></li>
          </ul>
        </div>

        <div className='footer-section'>
          <h3>Quick Links</h3>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/product'>Products</a></li>
            <li><a href='/about'>About Us</a></li>
            <li><a href='/cart'>Shopping Cart</a></li>
            <li><a href='#'>Contact Us</a></li>
          </ul>
        </div>

        <div className='footer-section'>
          <h3>Contact Info</h3>
          <div className='contact-info'>
            <p><i>📍</i> 123 Shopping Street, NY 10001</p>
            <p><i>📧</i> support@amazonapp.com</p>
            <p><i>📞</i> +1 (555) 123-4567</p>
          </div>
          <div className='newsletter'>
            <h3>Newsletter</h3>
            <form className='newsletter-form' onSubmit={(e) => e.preventDefault()}>
              <input type='email' placeholder='Your email address' required />
              <button type='submit'>Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>&copy; 2024 Amazon App. All rights reserved.</p>
        <p>Made with ❤️ by <a href='#'>Your Team</a></p>
      </div>
    </footer>
  )
}

export default Footer