import React from 'react';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HomeProduct({ product, addToCart }) {
    const { title, image, price, id } = product;

    const handleAddToCart = () => {
        addToCart(product);
        toast.warn("Item Added to the cart !", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
      };
    
    return (
        <div key={id} className="card shadow text-center mb-1 product_container">
        <div className="d-flex justify-content-center card-img pt-3 img_wrap">
            <img src={image} alt={title} />
        </div>
        <div className="card-content">
          <h3>{title}</h3>
  
          <h4>${price}</h4>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn addToCartBtn" onClick={handleAddToCart} id="Card_Buttons">
            Add to Cart 
          </button>
        </div>
      </div>
    )
}

export default HomeProduct
