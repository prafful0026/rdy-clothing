import React from "react"
import "./header-styles.scss"
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom"
import { auth } from "../../firebase/firebase-utils.js";

const Header = ({currentUser}) => {
    return (

        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <div>
                    <Link className="option" to="/">
                        HOME
           </Link>
                    <Link className="option" to="/shop">
                        SHOP
           </Link>
                  {
                      currentUser ?
                      <span className="option" onClick={()=>{auth.signOut()}}>SIGN OUT</span>
                      :
                      <Link className="option" to="/signin">SIGN IN</Link>
                  } 
                    <Link className="option" to="/contact">
                        CONTACT
           </Link>


                </div>

            </div>
        </div>
    )
}

export default Header;