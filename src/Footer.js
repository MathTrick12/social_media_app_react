import React from 'react'
import './Footer.css';
const Footer = () => {
  const today = new Date()
  return (
    <footer className='footer'>
        <p>Copyright &copy; {today.getFullYear()} All rights reserved.</p>
        </footer>
  )
}

export default Footer