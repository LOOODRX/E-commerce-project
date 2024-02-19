import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import Logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import dropdown from '../Assets/nav_drop-down.png';


const Navbar = () => {

  const [menu,setMenu] = useState("shop")
  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef();
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible')
    e.target.classList.toggle('open')
  }

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={Logo} alt="" />
        <p>Book Store</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>SHOP</Link>{menu === "shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration: 'none'}} to='/men'>MEN</Link>{menu === "men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration: 'none'}} to='/women'>WOMEN</Link>{menu === "women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='/kids'>KIDS</Link>{menu === "kids"?<hr/>:<></>}</li>
      </ul>

      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
      :<Link to = '/login'><button className="login"> login </button></Link>}
        
        <Link to = '/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count"> {getTotalCartItems()} </div>
      </div>
    </div>
  )
}

export default Navbar
