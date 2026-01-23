import "./Footer.css";
import { Link } from "react-router-dom";

function Footer(){
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-section">
                    <div className="footer-logo">
                        Mens<span>Cart</span>
                    </div>
                    <p>Premium men’s fashion for everyday style.</p>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Categories</h4>
                    <ul>
                        <li>Hoodies</li>
                        <li>T-Shirts</li>
                        <li>Shirts</li>
                        <li>Jeans</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>Email: support@menstore.com</p>
                    <p>Phone: +91 98765 43210</p>
                </div>

            </div>
            <div className="footer-bottom">
                © {new Date().getFullYear()} MenStore. All rights reserved.
            </div>
        </footer>
    );
}
export default Footer;