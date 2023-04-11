import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {

    const active = ({ isActive }) => isActive ? "active" : {};

    return (
        <div className='nav__container'>
            <div><NavLink className={active} to="/">
                <i className="fa-solid fa-pizza-slice"></i>
                <p>Pizzería Mamma Mia!</p></NavLink></div>
            <div><NavLink className={active} to="/carrito">
                <i class="fa-solid fa-cart-shopping"></i>
                <p>Carrito</p>
            </NavLink></div>
        </div>
    )
}

export default Nav