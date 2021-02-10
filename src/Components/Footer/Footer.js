import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const copyRightYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer_top text-left mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-12 col-12 mb-3">
              <div className="footer_content">
                <h3 className="mt-3">ABOUT STORE</h3>
                <p className="footer_full_text">
                  We are more than just a brand. We aim to inspire confidence in
                  our customers when it comes to how they dress and present
                  themselves to the world, endeavoring to build a community of
                  #EveryBodyinlt.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-12 col-12 mb-3">
              <div className="footer_content">
                <h3 className="mt-3">CONTACT INFORMATION</h3>
                <p>
                  <i className="fa fa-phone"></i>{" "}
                  <a href="tel: +234 903 896 8345" className="pr-2">
                    +234 903 896 8345
                  </a>
                  <a href="tel: +234 164 402 87">+234 164 402 87</a>
                </p>
                <p>
                  <i className="fa fa-map"></i> Jesan House,{" "}
                  <span> lekki Epe Expressway, Oko Addo, Ajah Lagos</span>
                </p>
                <p>
                  <i className="fa fa-envelope"></i>{" "}
                  <a href="mailto: elvischizzy09@gmail.com">
                    elvischizzy09@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-12 col-12 mb-3">
              <div className="footer_content">
                <h3 className="mt-3">CUSTOMER CARE</h3>
                <ul className="footer-list-text">
                  <NavLink to="/contact">CONTACT</NavLink>
                  <li>
                    {" "}
                    <a href="about#faq">FAQS</a>
                  </li>
                </ul>
                <p className="social-links mt-3">
                  <a href="#!">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#!">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#!">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#!">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* footer-bottom */}
          <div className="text-center pt-4 pb-2 text-white footer_bottom">
            <div className="container">
              <p>Copyright &copy; {copyRightYear} All Right Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
