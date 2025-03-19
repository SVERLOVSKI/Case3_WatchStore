import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css'
import userLogo from './User.svg'
import cartLogo from './Cart.svg'
import Button from './../Button/Button'

export default function Header({ onClick }) {
    const activeLinkClass = 'nav-list__link nav-list__link_active';
	const linkClass = 'nav-list__link';

    return (
        <header className='header'>
            <div className="header_container">
                <NavLink  to="/" className='logo'>INTIME</NavLink>
                <nav className="header_nav">
                    <ul className="navigation_list">
                        <li className='navigation_list-item'>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? activeLinkClass : linkClass
                                }
                            >
                                Главная
                            </NavLink>
                        </li>
                        <li className='navigation_list-item'>
                            <NavLink
                                to="/contacts"
                                className={({ isActive }) =>
                                    isActive ? activeLinkClass : linkClass
                                }
                            >
                                Контакты
                            </NavLink>
                        </li>
                        <li className='navigation_list-item'>
                            <NavLink
                                to="/delivery"
                                className={({ isActive }) =>
                                    isActive ? activeLinkClass : linkClass
                                }
                            >
                                Доставка и оплата
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="user_bar">
                    <Button onClick={onClick} className='menu_button'>Меню</Button>
                    <a href=""><img className='profile-icon' src={userLogo} alt="" /></a>
                    <NavLink to='/cart'><img className='cart-icon' src={cartLogo} alt="" /></NavLink>
                </div>
            </div>
        </header>
    )
}
