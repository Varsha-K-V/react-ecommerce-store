import "./CartItems.css";
import toast from "react-hot-toast";

export default function CartItems({
    item,
    index,
    increaseQty,
    decreaseQty,
    removeFromCart,
}) {
    return (
        <div className="cart-item">
            <img src={item.image} alt={item.title}/>

            <div className="cart-item-info">
                <h4>{item.title}</h4>
                <p className="variants">
                     Size: <b>{item.size}</b> | Color: <b>{item.color}</b>
                </p>
                <p className="price">₹{item.price}</p>

                <div className="qty-controls">
                    <button onClick={()=>decreaseQty(index)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick ={()=>increaseQty(index)}>+</button>
                </div>


                <button className="remove-btn" onClick={()=> removeFromCart(index)}>Remove</button>
            </div>
        </div>
    );
}