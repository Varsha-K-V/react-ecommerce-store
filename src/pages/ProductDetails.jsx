import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../services/api";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";


import "../styles/productDetails.css";

import ProductGallery from "../components/ProductDetails/ProductGallery";
import ProductInfo from "../components/ProductDetails/ProductInfo";
import ProductActions from "../components/ProductDetails/ProductActions";
import RelatedProducts from "../components/ProductDetails/RelatedProducts";
import Breadcrumbs from "../components/ProductDetails/Breadcrumbs";

function ProductDetails(){
    const {id}=useParams();
    const { addToCart } = useCart();

   
    const [product,setProduct] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState("");

    const [selectedSize,setSelectedSize]=useState("");
    const [selectedColor,setSelectedColor]=useState("");
    const [adding, setAdding] = useState(false);
    

    

    useEffect(()=>{
        async function loadProduct(){
            try{
                const data = await fetchProductById(id);
                if (!data) throw new Error("Product not found");
                setProduct(data);
            }catch (err){
                setError(err.message);
            }finally{
                setLoading(false);
            }
        }
        loadProduct();
    },[id]);

    if(loading) return <p>Loading product...</p>
    if(error) return <p>{error}</p>;
    if(!product) return null;

    const handleAddToCart = () => {
       setAdding(true);
       addToCart(product, selectedSize, selectedColor);
       toast.success("Product added to cart successfully");

       setSelectedSize("");
       setSelectedColor("");

       setTimeout(() => setAdding(false), 500);
    };


    return (
        <div className="product-details-page">
            <Breadcrumbs
              category={product.category}
              title={product.title}
            />

            <div className="product-details">
                <ProductGallery 
                 image={product.image}
                 title={product.title}
                 />

                 <div className="product-right">
                    <ProductInfo product={product} />

                    <ProductActions
                     product={product}
                     selectedSize={selectedSize}
                     setSelectedSize={setSelectedSize}
                     selectedColor={selectedColor}
                     setSelectedColor={setSelectedColor}
                     onAddToCart={handleAddToCart}
                     adding={adding}
                    />
                 </div>
            </div>

            <RelatedProducts
            category={product.category}
            currentProductId={product.id}
            />
        </div>
    );
}
export default ProductDetails;
