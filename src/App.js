import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home/Home";
import Product from "./Components/Pages/Product/Product";
import About from "./Components/Pages/About/About";
import Contact from "./Components/Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Pages/Cart/Cart";
import ProductDetail from "./Components/Pages/ProductDetail/ProductDetail";
import Checkout from "./Components/CheckoutForm/Checkout/Checkout";
import ScrollToTop from './ScrollToTop'

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [cart, setCart] = useState(cartFromLocalStorage);

  const getProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(response => {
        setProducts(response.data);
        setIsLoading(false);
      })

      .catch(err => {
        setIsError(true);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  //

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const getCartTotal = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  };

  ////
  return (
    <BrowserRouter>
      <Navbar getCartTotal={getCartTotal} />
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Home
            products={{ products, setProducts, isError, isLoading }}
            cart={cart}
            setCart={setCart}
          />
        </Route>
        <Route exact path="/product">
          <Product
            products={{ products, setProducts, isError, isLoading }}
            cart={cart}
            setCart={setCart}
          />
        </Route>
        <Route path="/cart">
          <Cart cart={cart} setCart={setCart} />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/product/:productName">
          <ProductDetail data={products} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
