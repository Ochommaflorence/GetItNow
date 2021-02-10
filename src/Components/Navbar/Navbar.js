import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = ({ getCartTotal }) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

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
          <button className="navbar-button mb-1">
            <NavLink to="cart" id="cart-icon">
              <div className="button-wrap d-flex">
                <span>
                  {" "}
                  <i className="fas fa-shopping-cart ml-3" id="cart-icon"></i>
                </span>
                <span className="ml-2">{getCartTotal()} </span>
              </div>
            </NavLink>
          </button>
          {/* </Button>} */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
