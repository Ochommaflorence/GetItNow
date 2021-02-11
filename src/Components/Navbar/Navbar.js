import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = ({ getCartTotal }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink
            to="/"
            className="navbar-logo pb-3"
            onClick={closeMobileMenu}
          >
            GetItNow
          </NavLink>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
                exact={true}
                activeClassName="is-active"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/product"
                className="nav-links"
                onClick={closeMobileMenu}
                activeClassName="is-active"
              >
                Product
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-links"
                onClick={closeMobileMenu}
                activeClassName="is-active"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
                activeClassName="is-active"
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* {button && <Button buttonStyle='btn--outline'> */}

          <NavLink to="cart" className="notification text-white">
            <div className="button-wrap d-flex">
              <i className="fas fa-shopping-cart ml-3" id="cart-icon"></i>
              <span className="badge">{getCartTotal()}</span>
            </div>
          </NavLink>

          {/* </Button>} */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
