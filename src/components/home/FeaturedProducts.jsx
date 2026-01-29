import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../../services/api"
import "./FeaturedProducts.css";

function FeaturedProducts(){
    const[products,setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getFeaturedProducts = async () => {
            try {
                const allProducts = await fetchProducts();
                // Filter featured products locally
                const featured = allProducts.filter(product => product.featured === true);
                setProducts(featured);
            } catch (error) {
                console.error("Error fetching featured products:", error);
            }
        };

        getFeaturedProducts();
    }, []);

    return (
        <section className="featured">
            <h2>Featured Products</h2>

            <div className="featured-grid">
                {products.slice(0,4).map((product)=>(
                    <div
                    key={product.id}
                    className="featured-card"
                    onClick={()=>navigate(`/product/${product.id}`)}
                    >
                      <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>₹{product.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default FeaturedProducts;