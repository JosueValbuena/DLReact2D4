import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import MyContext from '../context/MyContext';

const Nav = () => {

    const {resultado} = useContext(MyContext)

    const active = ({ isActive }) => isActive ? "active" : {};

    return (
        <div className='nav__container'>
            <div><NavLink className={active} to="/">
                <i className="fa-solid fa-pizza-slice"></i>
                <p>Pizzería Mamma Mia!</p></NavLink></div>
            <div><NavLink className={active} to="/carrito">
                <i className="fa-solid fa-cart-shopping"></i>
                <p>Carrito: $</p>
                {resultado}
            </NavLink></div>
        </div>
    )
}

export default Nav