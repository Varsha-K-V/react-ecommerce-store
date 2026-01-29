import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../../services/api";
import "./RelatedProducts.css";

function RelatedProducts({category, currentProductId}){
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        async function loadRelated(){
            try{
                const allProducts = await fetchProducts();

                const related = allProducts.filter(
                    (product) =>
                        product.category === category &&
                        product.id !== currentProductId
                );

                setProducts(related);
            }catch(error){
                console.error("Failed to load related products", error);
                setProducts([]);
            }
        }
        loadRelated();
    },[category,currentProductId]);

    if(!products.length) return null;

    const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
    window.scrollTo(0, 0); 
    };

    return (
        <div className="related-products">
            <h2>Related Products</h2>

            <div className="related-grid">
                {products.slice(0, 4).map(product => (
                    <div key={product.id} className="related-card">
                        <img src={product.image} alt={product.title} />
                        <p>{product.title}</p>
                        <span>₹{product.price}</span>
                        <button
                          className="view-details-btn"
                          onClick={() => handleViewDetails(product.id)}
                        >
                            View Details
                        </button>
                        </div>
                        ))}
            </div>
        </div>
    );
}
export default RelatedProducts;