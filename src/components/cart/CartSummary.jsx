import { useMemo } from "react";
import "./CartSummary.css";

export default function CartSummary({cartItems}){
    const total = useMemo(()=>{
        return cartItems.reduce(
            (sum,item)=>sum+item.price * item.quantity,
            0
        );
    },[cartItems]);

    return (
        <div className="cart-summary">
            <h3>Order Summary</h3>

            <p>
               Items: <b>{cartItems.length}</b>
           </p>
           <p className="total">
              Total: <b>₹{total}</b>
           </p>
            
        </div>
    );
}