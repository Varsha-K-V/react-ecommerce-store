import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import "../../styles/layout.css"

function Header(){
    const [menuOpen,setMenuOpen] = useState(false);

    const {user,logout} = useAuth();
    const navigate = useNavigate();
    const { cartItems } = useCart();

    const cartCount = cartItems.reduce(
        (sum,item)=> sum+ item.quantity,0
    );

    function toggleMenu(){
        setMenuOpen(prev =>!prev);
    }

    function handleLogout(){
        logout();
        navigate("/login");
    }

    return(
        <header className="header">
            <div className="logo">
                Mens<span>Cart</span>
            </div>

            <button className="menu-btn" onClick={toggleMenu}>
                ☰
            </button>

             <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
                <NavLink
                to="/"
                className={({isActive})=>
                isActive ? "nav-link active" : "nav-link"}
                onClick={()=>setMenuOpen(false)}
                >
                    Home
                </NavLink>

                <NavLink
                to="/shop"
                className={({isActive})=>
                isActive ? "nav-link active" : "nav-link"}
                onClick={()=>setMenuOpen(false)}
                >
                    Shop
                </NavLink>

                <NavLink
                to="/cart"
                className={({isActive})=>
                isActive ? "nav-link active" : "nav-link"}
                onClick={()=>setMenuOpen(false)}
                >
                    Cart
                    <span className="cart-count">🛒 {cartCount}</span>
                </NavLink>

             </nav>

            {user ?(
                <div className="user-info">
                    <span className="username">
                        Hi,{user.name} 👋
                    </span>

                    <button onClick={handleLogout} className="auth-btn logout">
                        Logout
                    </button>
                </div>
            ):(
                <Link to="/login" className="auth-btn">Login</Link>
            )}
        </header>
    );
}
export default Header;