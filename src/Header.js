import React from 'react'
import "./Header.css"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

import { useStateValue } from "./StateProvider";
import { Link } from 'react-router-dom';
const Header = () => {
  const [{basket},dispatch] = useStateValue();
  return (
    <div className="header">
  <Link to="/" style={{ textDecoration:"none" }}>
            <div className="header_logo">
                <StorefrontIcon className="header_logoimage" fontSize="large"/>
                <h2 className="header_logotitle">eShop</h2>
            </div>
          </Link>

<div className="header_search">
<input type="text" className="header_searchinput"></input>
<SearchIcon className="header_searchicon"/>
</div>
<div className="header nav">
  <div className="nav_item">
<span className="nav_itemlineone">Hello Guest</span>
<span className="nav_itemlinetwo">Sign In</span>
  </div>
  <div className="nav_item">
  
<span className="nav_itemlineone">Your</span>
<span className="nav_itemlinetwo">Shop</span>
    </div>
    <Link to="/checkout" style={{textDecoration: "none"}}>
    <div className="nav_itembasket">
    
    <ShoppingBasketIcon/>
    
    <span className="nav_itemlinetwo nav_basktecount">{basket.length}</span>
        </div>
    </Link>
 
</div>




    </div>


  )
}

export default Header