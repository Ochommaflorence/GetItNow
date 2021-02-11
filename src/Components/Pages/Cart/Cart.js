import React from "react";
import "./cart.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";

export default function Cart({ cart, setCart }) {
  const getTotalSum = () => {
    return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeFromCart = productToRemove => {
    setCart(cart.filter(product => product !== productToRemove));
    toast.warn("Item removed from the cart !", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1500
    });
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find(item => item.id === product.id).quantity = amount;
    setCart(newCart);
  };

  return (
    <>
      <div className="title_h text-center mt-4 mb-3">
        <h1>Your Cart</h1>
        <div className="d-flex justify-content-center">
          <div className="underline"> </div>
        </div>
      </div>

      {cart.length !== 0 && (
        <div className="container-fluid Cart_table mt-5 text-center table-responsive-md">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>
                  <h6>Image</h6>
                </th>
                <th>
                  <h6>Product </h6>
                </th>
                <th>
                  <h6>Price</h6>
                </th>
                <th>
                  <h6>Quantity</h6>
                </th>
                <th>
                  <h6>Remove</h6>
                </th>
              </tr>
            </thead>

            {cart.map(product => {
              const { image, title, price, quantity, id } = product;
              return (
                <tbody key={id}>
                  <tr className="mb-2 cart_Item">
                    <td>
                      <img
                        src={image}
                        alt={title}
                        className="img-fluid"
                        style={{ width: "60px", height: "60px" }}
                      />
                    </td>

                    <td>
                      <p className="cart-table-title">{title}</p>
                    </td>

                    <td>
                      <p>&#x24;{price}</p>
                    </td>

                    <td>
                      <input
                        type="number"
                        value={quantity}
                        onChange={e =>
                          setQuantity(product, Number(e.target.value))
                        }
                        style={{ width: "50px" }}
                      />
                    </td>

                    <td>
                      <div onClick={() => removeFromCart(product)}>
                        <i className="fas fa-trash-alt" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      )}

      <div className="d-flex justify-content-center container-fluid mt-5 text-center cart_item">
        <div>
          {cart.length > 0 && (
            <div className="clear_cart text-center" onClick={clearCart}>
              Clear Cart
            </div>
          )}
          {cart.length !== 0 && (
            <div className="total_cost pt-2 mb-3 mt-2">
              Total Cost: ${getTotalSum()}
            </div>
          )}
          {/* checkout btn */}
          {cart.length !== 0 && (
            <button>
              {" "}
              <NavLink to="/checkout" className="text-white">
                {" "}
                Checkout{" "}
              </NavLink>{" "}
            </button>
          )}
          <br /> <br />
        </div>
      </div>

      {/* start and continue shopping btn */}
      {cart.length === 0 && (
        <div className="text-center">
          <img src={"/images/empty-cart.png"} alt="cart" />
          <h5
            style={{ color: "#ccc", fontWeight: "bolder", fontSize: "24px" }}
            className="mb-4"
          >
            Your cart is empty!
          </h5>
          <h6 style={{ fontWeight: "500", fontSize: "18px" }} className="mb-4">
            Browse our categories and discover our best deals!
          </h6>
        </div>
      )}
      <div className="shopping_btn_wrap text-center">
        <button className="btn btn-danger">
          {" "}
          <NavLink to="/product" className="text-white">
            {" "}
            {cart.length !== 0 ? "Continue shopping" : "Start shopping"}
          </NavLink>{" "}
        </button>
      </div>
    </>
  );
}
