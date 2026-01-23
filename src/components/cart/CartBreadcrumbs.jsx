import { Link } from "react-router-dom";
import "./CartBreadcrumbs.css";

export default function CartBreadcrumbs() {
    return (
        <nav className="cart-breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>

            <Link to="/shop">Shop</Link>
            <span>/</span>
            
            <span className="current">Cart</span>
        </nav>
        );
    }