import React from 'react'
import Logo from '../../Imagen/Logo.png'

 export const Header = () => {
  return (
       <header>
        <a href='#'>
            <div className='logo'>
              <img src={Logo} alt='logo' width= "150"/>
            </div>
        </a>
        <ul>
          <li>
            <a href='#'>PORTAL</a>
          </li>
          <li>
            <a href='#'>PRODUCTOS</a>
          </li>
        </ul>
        <div className='cart'>
        <box-icon name="cart"></box-icon>
        <span className='total'>0</span>
        </div>
       </header>
  )
}

