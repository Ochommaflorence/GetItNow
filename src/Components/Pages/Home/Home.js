import React from "react";
import "./Home.css";
import SkeletonProduct from "../../Skeleton/SkeletonProduct";
import HomeProduct from "./HomeProduct";
import { Carousel } from "react-bootstrap";

const Home = ({
  products: { products, isLoading, isError },
  cart,
  setCart
}) => {
  // Add to cart function
  const addToCart = product => {
    let newCart = [...cart];
    let itemInCart = newCart.find(item => product.id === item.id);
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1
      };
      newCart.push(itemInCart);
    }

    setCart(newCart);
  };

  // Loading products
  if (isLoading) {
    return (
      <>
        <div className="Home-Background-text text-center">
          <h1>New Arrivals</h1>
          <hr></hr>
          <br />
        </div>
        <div className="skeleton-container mt-4">
          {[1, 2, 3].map(n => (
            <SkeletonProduct key={n} theme="light" />
          ))}
        </div>
      </>
    );
  }

  // Error message
  if (isError) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <h4>Oops! There was an error</h4>
      </div>
    );
  }

  // Featured products
  const featuredProducts = products.map(product => {
    return (
      <div key={product.id}>
        <HomeProduct product={product} addToCart={addToCart} />
      </div>
    );
  });
  const slicedProduct = featuredProducts.slice(1, 4);
  ///

  // functions for the slider-images
  return (
    <div className="mt-5">
      {/* image slider start */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block"
            src={"/images/slider/slider5.jpg"}
            alt="First slide"
            style={{ height: "95vh", width: "100%" }}
            id="slider-carousel"
          />
          <Carousel.Caption>
            <div className="carousel-content">
              <h3>Women's Jeans Collection</h3>
              <p>New stylish shirts, pants & Accessories</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            src={"/images/slider/slider6.jpg"}
            alt="Third slide"
            style={{ height: "95vh", width: "100%" }}
            id="slider-carousel"
          />

          <Carousel.Caption>
            <div className="carousel-content">
              <h3>NEW ARRIVAL UP TO 30% OFF</h3>
              <p>New stylish shirts, pants & Accessories</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            src={"/images/pic7.jpg"}
            alt="Third slide"
            style={{ height: "95vh", width: "100%" }}
            id="slider-carousel"
          />

          <Carousel.Caption>
            <div className="carousel-content">
              <h3>HUGE SALE UP TO 45%</h3>
              <p>New stylish shirts, pants & Accessories</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* image slider end */}

      {/* products from the cart starts */}
      <div className="container-fluid text-center mt-5 Home-product-header">
        <h1>New Arrivals</h1>
        <hr />
        <div className="productList">{slicedProduct}</div>
      </div>
      {/* products from the  cart ends */}

      <article className="Home-content mt-5 text-center">
        <div className="container">
          <h2>Latest Blogs </h2>
          <hr></hr>
          <div className="row mt-5">
            <div className="col-lg-4 col-md-3 col-sm-6 col-md-12 mb-5">
              <img
                src={"/images/pic6.jpg"}
                className="img-fluid"
                alt="model"
                id="My_Image1"
              />
            </div>

            <div className="col-lg-4 col-md-3 col-sm-6 col-md-12 mb-5">
              <img
                src={"/images/pic7.jpg"}
                className="img-fluid"
                alt="model"
                id="My_Image2"
              />
            </div>
            <div className="col-lg-4 col-md-3 col-sm-6 col-md-12 mb-5">
              <img
                src={"/images/ring-3.jpg"}
                className="img-fluid"
                alt="model"
                id="My_Image3"
              />
            </div>
            <div className="Home-blog-link text-center">
              <a
                href="https://www.apetogentleman.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-center"
              >
                @Here are the trends i see coming this year
              </a>
            </div>
          </div>
        </div>
      </article>

      <article className="Home-Newsletter_Content text-center mt-5">
        <div className="row Home-Newsletter-wrapper">
          <div className="col-md-6">
            <h2> Newsletter </h2>
            <h3>
              Subscribe to our newsletter and get 20% off your first purchase
            </h3>
          </div>
          <div className="col-md-6">
            <input type="text" placeholder="Enter your email" name="email" />
            <button>Subcribe</button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Home;
