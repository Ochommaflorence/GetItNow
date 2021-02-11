import React, { useState, useEffect } from "react";
import "./Product.css";
import ProductItem from "../ProductItem/ProductItem";
import { useRouteMatch } from "react-router-dom";
import Category from "./Category";
import SkeletonProduct from "../../Skeleton/SkeletonProduct";

function Product({
  products: { products, isLoading, isError },
  cart,
  setCart
}) {
  const [search, setSearch] = useState("");
  const [newProducts, setNewProducts] = useState([]);
  const [grid, setGrid] = useState(false);
  const [categoryItem, setCategoryItem] = useState("");
  const { url } = useRouteMatch();

  useEffect(() => {
    setNewProducts(products);
  }, [products]);

  // Loading products
  if (isLoading) {
    return (
      <>
        <div style={{ marginTop: "150px" }}></div>
        <div className="loader-title text-center mt-5 mb-3">
          <h3>Our Products</h3>
          <div className="d-flex justify-content-center">
            <div className="underline"> </div>
          </div>
        </div>
        <div className="skeleton-container mt-4">
          {[1, 2, 3, 4, 5, 6].map(n => (
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

  // filter the product by category
  let allCategory = products.map(ourMenuBtn => ourMenuBtn.category);
  let uniqueCategory = ["all", ...new Set(allCategory)];

  const filterProduct = category => {
    if (category === "all") {
      setNewProducts(products);
      return;
    }

    const filteredProducts = products.filter(item => {
      return item.category === category;
    });

    setNewProducts(filteredProducts);
  };

  // Filter the product array based on searchTerm
  newProducts.filter(function(myProduct) {
    return (
      myProduct.title.toLowerCase().includes(search.toLowerCase()) ||
      myProduct.price.toString().includes(search) ||
      myProduct.category.toLowerCase().includes(search.toLowerCase())
    );
  });

  function searchHandle(e) {
    setSearch(e.target.value);
  }

  // select category function mobile
  const handleChange = e => {
    filterProduct(e.target.value);
    setCategoryItem(e.target.value);
  };

  //main show case
  return (
    <>
      <div style={{ marginTop: "130px" }}></div>
      <div className="d-flex justify-content-around align-items-baseline">
        <div className="text-center mt-5 product-search-button">
          <form>
            <small> Search: </small>
            <input
              type="text"
              placeholder="search"
              value={search}
              onChange={searchHandle}
            />
          </form>
        </div>

        <div onClick={() => setGrid(!grid)} className="product-grid">
          {grid ? (
            <i className="fa fa-list mt-5"></i>
          ) : (
            <i className="fas fa-th mt-5" aria-hidden="true"></i>
          )}
        </div>

        {/* filter category mobile */}
        <div className="mobile-category">
          <small>Category</small>
          <select value={categoryItem} onChange={handleChange}>
            {uniqueCategory.map((category, index) => (
              <option value={category} key={index}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* filter category desktop */}
        <div className="filter_wrapper">
          {uniqueCategory.map((category, index) => (
            <Category
              key={index}
              category={category}
              filterProduct={filterProduct}
            />
          ))}
        </div>
      </div>

      <div className="container-fluid">
        <div className={grid ? "productList list" : "productList"}>
          {newProducts.map(product => (
            <ProductItem
              product={product}
              key={product.id}
              addToCart={addToCart}
              url={url}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;
