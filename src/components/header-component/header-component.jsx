import React from "react"
import "./header-styles.scss"
import { ReactComponent as Logo } from "../../assets/logo.svg";
import {Link} from "react-router-dom"

const Header = () =>{
    return(
        
<div className="header">
    <Link className="logo-container" to="/">
        <Logo className="logo" />
    </Link>
   <div className="options">
       <div>
           <Link className="option" to="/shop">
               SHOP
           </Link>
           <Link className="option"to="/contact">
               CONTACT
           </Link>
       </div>

   </div>
</div>  
    )
}

export default Header;