import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router'

export default function Footer() {
  return (
      <footer className='footer'>
          <div className="footer_container">
              <NavLink to="/" className='footer_logo'>INTIME</NavLink>
              <nav className="footer_nav">
                  <ul className="footer_navigation_list">
                      <li className='navigation_list-item'>
                          <NavLink to="/" className='footer_navigation_list-item-link'>
                              Главная
                          </NavLink>
                      </li>
                      <li className='navigation_list-item'>
                          <NavLink to="/contacts" className='footer_navigation_list-item-link'>
                              Контакты
                          </NavLink>
                      </li>
                      <li className='navigation_list-item'>
                          <NavLink to="/delivery" className='footer_navigation_list-item-link'>
                              Доставка и оплата
                          </NavLink>
                      </li>
                  </ul>
              </nav>
          </div>
      </footer>
  )
}
