import { useCallback } from "react";
import { useCart } from "../context/CartContext";
import CartItems from "../components/cart/CartItems";
import CartSummary from "../components/cart/CartSummary";
import CartBreadcrumbs from "../components/cart/CartBreadcrumbs";
import { Link } from "react-router-dom";
import "../styles/cart.css"

export default function Cart(){
    const {
        cartItems,
        increaseQty,
        decreaseQty,
        removeFromCart,
    } = useCart();

    const handleIncrease = useCallback(
        (index) => increaseQty(index),
        [increaseQty]
    );

    const handleDecrease = useCallback(
        (index) => decreaseQty(index),
        [decreaseQty]
    );

    const handleRemove = useCallback(
        (index) => removeFromCart(index),
        [removeFromCart]
    );

    if (cartItems.length ===0){
        return (
            <div className="empty-cart">
                <h2>Your cart is empty</h2>
                <p>Add items to continue shopping.</p>
                <Link to="/shop">Go to shop</Link>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <CartBreadcrumbs />
             <h2>Your Cart</h2>
             <div className="cart-container">
                <div className="cart-items">
                {cartItems.map((item,index)=>(
                <CartItems
                key={index}
                item={item}
                index={index}
                increaseQty={handleIncrease}
                decreaseQty={handleDecrease}
                removeFromCart={handleRemove}
                />
            ))}
            </div>

            <div className="cart-summary-wrapper">
                <CartSummary cartItems={cartItems}/>
                <Link to="/checkout">
                <button className="checkout-btn" disabled={cartItems.length===0}>
                Proceed to Checkout
                </button>
                </Link>
            </div>
            </div>
        </div>
    );
}
