import { Link } from "react-router-dom";

import CartContext from "../../context/cartcontext";

import { CiLight } from "react-icons/ci";

import { MdOutlineDarkMode } from "react-icons/md";

import "./index.css";

function Navbar(){


    return(
        <CartContext.Consumer>
            {
                value=>{
                    const{cartItemsCount,darkMode,changeDarkMode}=value;

                    return(

                        
                                <div className="nav-bar-home">
                                    <div className="logo-and-home">
                                        <img className="nav-bar-home-logo" src="https://i.ibb.co/7NdwPN5G/Screenshot-2025-05-01-130458.png" alt="not-found-image"/>
                                    <Link className="home-link" to="/">Home</Link>
                                    </div>
                                    <div className="dark-and-light-mode-cart">
                                        <button className={darkMode?"dark-button":"light-button"} onClick={()=>changeDarkMode()}>{darkMode?<MdOutlineDarkMode size={30} />:<CiLight size={30} />}</button>
                                        &nbsp;<Link className="cart-link" to="/cart">Cart {cartItemsCount}</Link>
                                    </div>
                                </div>
                        


                    )
                }
            }
        </CartContext.Consumer>


    )
}

export default Navbar;