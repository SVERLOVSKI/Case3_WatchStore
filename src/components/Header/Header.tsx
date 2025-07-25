import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css'
import cartLogo from './Cart.svg'
import Button from '../Button/Button'

interface HeaderProps {
    onClick: () => void
}

const Header:React.FC<HeaderProps> = ({ onClick }) => {

    return (
        <header className='header'>
            <div className="header_container">
                <NavLink  to="/" className='logo'>INTIME</NavLink>
                <nav className="header_nav">
                    <ul className="navigation_list">
                        <li className='navigation_list-item'>
                            <NavLink to="/" className='navigation_list-item-link'>
                                Главная
                            </NavLink>
                        </li>
                        <li className='navigation_list-item'>
                            <NavLink to="/contacts" className='navigation_list-item-link'>
                                Контакты
                            </NavLink>
                        </li>
                        <li className='navigation_list-item'>
                            <NavLink to="/delivery" className='navigation_list-item-link'>
                                Доставка и оплата
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="user_bar">
                    <Button onClick={onClick} className='menu_button'>Меню</Button>
                    <NavLink to='/cart'><img className='cart-icon' src={cartLogo} alt="" /></NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header