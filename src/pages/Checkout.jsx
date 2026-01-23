import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout(){
    const { cartItems, clearCart } = useCart(); 
    const navigate = useNavigate();

    const totalAmount = cartItems.reduce(
        (sum,item)=>sum+item.price*item.quantity,
        0
    );

    return (
        <div className="checkout-page">
            <h2>Checkout</h2>

            {cartItems.length === 0 ? (
                <p>Your Cart is empty.</p>
            ) : (
                <>
                <h3>Order Summary</h3>

                {cartItems.map((item,index)=>(
                    <div key={index}>
                        <p>
                            {item.title} * {item.quantity}
                        </p>
                    </div>
                ))}

                <h3>Total: ₹{totalAmount}</h3>
                <button 
                  onClick={()=>{
                    clearCart();
                    navigate("/");
                  }}
                  >
                    Place Order
                </button>
                </>
            )}

        </div>
    );
}
export default Checkout;