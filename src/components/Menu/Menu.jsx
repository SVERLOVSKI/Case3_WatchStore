import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Menu.css'

export default function Menu({visibleMenu, onClick }) {
  const activeLinkClass = 'nav-list__link nav-list__link_active';
	const linkClass = 'nav-list__link';

  if (visibleMenu === true) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'visible'
  }

  return (
    <section className={visibleMenu === true ? 'menu active' : 'menu'}>
      <NavLink to="/" className='menu-logo'>INTIME</NavLink>
      <ul className="menu-list">
        <li onClick={onClick} className="menu-list__item"><NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? activeLinkClass : linkClass
          }
        >
          Главная
        </NavLink></li>
        <li onClick={onClick} className="menu-list__item"><NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? activeLinkClass : linkClass
          }
        >
          Контакты
        </NavLink></li>
        <li onClick={onClick} className="menu-list__item"><NavLink
          to="/delivery"
          className={({ isActive }) =>
            isActive ? activeLinkClass : linkClass
          }
        >
          Доставка и оплата
        </NavLink></li>
        <li onClick={onClick} className="menu-list__item"><NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? activeLinkClass : linkClass
          }
        >
          Корзина
        </NavLink></li>
        <li className="menu-list__item" onClick={onClick}>Закрыть</li>
      </ul>
    </section>
  )
}

