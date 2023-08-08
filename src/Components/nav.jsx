import React from "react";
import { Link } from "react-router-dom"
import { ShoppingCart } from "phosphor-react"

const Nav = (props) => {
    return (
        <div className="nav">
            <Link to="/">
                <div className="links">
                    Store Home
                </div>
            </Link>
            <Link to="/inventory">
                <div className="links">
                    Store Inventory
                </div>
            </Link>
            <Link to="/prices">
                <div>Store Prices</div>
            </Link>
            <Link to='/cart'>
                <div>
                 <ShoppingCart size={20}/>
                </div>
            </Link>
        </div>
    )
}

export default Nav;