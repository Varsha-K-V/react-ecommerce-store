import { createContext, useEffect, useState, useContext } from "react";
import toast from "react-hot-toast";
export const CartContext = createContext ();


export function CartProvider({children}){
    const [cartItems,setCartItems] = useState(()=>{
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

     // Sync cart with localStorage
     useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify(cartItems));
     },[cartItems]);

     function addToCart(product,selectedSize,selectedColor){
        setCartItems(prevItems=>{
            const existingItem = prevItems.find(
                item=>
                    item.id === product.id &&
                    item.size === selectedSize &&
                    item.color === selectedColor
            );

            if(existingItem){
                return prevItems.map(item=>
                    item === existingItem
                    ? {...item, quantity : item.quantity + 1}
                    :item
                );
            }
            return [
                ...prevItems,
                {
                    ...product,
                    size : selectedSize,
                    color : selectedColor,
                    quantity : 1

                }
            ];
        });
     }

     function removeFromCart(index){
        setCartItems(prevItems =>
            prevItems.filter((_,i)=>i !==index)
        );
        toast.success("Item removed from cart");
     }

     function increaseQty(index) {
        setCartItems(prevItems =>
            prevItems.map((item, i) =>
               i === index
                ? { ...item, quantity: item.quantity + 1 }
                : item
         )
       );
     }

     function decreaseQty(index) {
        setCartItems(prevItems =>
            prevItems
            .map((item, i) =>
              i === index
              ? { ...item, quantity: item.quantity - 1 }
             : item
        )
        .filter(item => item.quantity > 0)
      );
    }

    function clearCart(){
        setCartItems([]);
        localStorage.removeItem("cart");
    }

     return (
        <CartContext.Provider
        value={{
            cartItems,
            addToCart,
            removeFromCart,
            increaseQty,
            decreaseQty,
            clearCart
        }}
        >
            {children}
        </CartContext.Provider>
     );

}

export const useCart = () => useContext(CartContext);