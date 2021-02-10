import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = ({data}) => {
    const { productName } = useParams();

    const product = data.find((p) => p.title === productName);
    let productData;

    if (product) {
    productData = (
      <section className="mt-5">
    <div className="row">
          <div className="col-md-6 Nexted-router-image"> 
            <img src={product.image} alt={product.title} className="img-thumbnail ml-5" />
          </div>
          
           <div className="col-md-6 Nexted-router-text">
           <h3> {product.title} </h3>
          <p className="mr-5">{product.description}</p>
          <button>ADD TO CART</button>
          </div>
          
        
       <hr />
        </div>
    
      </section>
    );
  } else {
    productData =(
      <div className="text-center mt-5">
         <h4> Go back to <NavLink to="/product"> product page </NavLink> </h4>
      </div>
    );
  }

//
    return (
        <div>
           {productData} 
        </div>
    )
}

export default ProductDetail
