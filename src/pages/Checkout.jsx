import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/checkout.css"

function Checkout() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  function handlePlaceOrder() {
    clearCart();
    setOrderPlaced(true);

    setTimeout(() => {
      navigate("/");
    }, 2000);
  }

  return (
    <div className="checkout-page">
      <div className="checkout-card">
        <h2>Checkout</h2>

        {orderPlaced ? (
          <div className="order-success">
            <h3>✅ Order Placed Successfully!</h3>
            <p>Thank you for shopping with us.</p>
          </div>
        ) : cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <>
            <h3 className="summary-title">Order Summary</h3>

            <div className="order-items">
              {cartItems.map((item, index) => (
                <div className="order-item" key={index}>
                  <span>{item.title}</span>
                  <span>x {item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="checkout-total">
              <span>Total</span>
              <span>₹{totalAmount}</span>
            </div>

            <button className="place-order-btn" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Checkout;
