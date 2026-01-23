import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FeaturedProducts.css";

function FeaturedProducts(){
    const[products,setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch("http://localhost:5000/products?featured=true")
        .then((res)=>res.json())
        .then((data)=>setProducts(data));
    },[])

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