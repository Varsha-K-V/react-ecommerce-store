import { Link } from "react-router-dom";
import "../../styles/products.css"

function ProductCard({product}){
    return(
        <div className="product-card">
            <img src={product.image} alt={product.title}/>
            <h3>{product.title}</h3>
            <p>₹{product.price}</p>

            <Link to={`/product/${product.id}`}
            className="primary-btn"
            >
              View Details
            </Link>
        </div>
    );
}
export default ProductCard;