import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import { useSearchParams } from "react-router-dom";
import ShopSidebar from "../components/shop/ShopSidebar";
import ShopSearch from "../components/shop/ShopSerarch";
import ProductGrid from "../components/shop/ProductGrid";
import "../styles/shop.css";

function Shop(){
    const [products,setProducts]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState("");
    const [searchTerm,setSearchTerm]=useState("");
    const [selectedCategory,setSelectedCategory]=useState("all");
    const [selectedPrice, setSelectedPrice]=useState("all");

    const [searchParams] = useSearchParams();
    const categoryFromUrl = searchParams.get("category");

    useEffect(()=>{
        async function loadProducts(){
            try{
                const data = await fetchProducts();
                setProducts(data);
            }catch (err){
                setError(err.message);
            }finally{
                setLoading(false)
            }
        }
        loadProducts();
    },[]);

    useEffect(() => {
       if (categoryFromUrl) {
         setSelectedCategory(categoryFromUrl);
       } else {
         setSelectedCategory("all");
       }
}, [categoryFromUrl]);

    if(loading) return <p>Loading products...</p>;
    if(error) return <p>{error}</p>

    const filteredProducts = products.filter(product=>{
        const matchesSearch = product.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

        const matchesCategory = 
          selectedCategory === "all" ||
          product.category === selectedCategory;

        const matchesPrice =
          selectedPrice === "all" ||
          (selectedPrice === "under500" && product.price < 500) ||
          (selectedPrice === "500to1000" &&
            product.price >= 500 &&
            product.price <= 1000) ||
          (selectedPrice === "above1000" && product.price >1000); 

      return matchesSearch && matchesCategory && matchesPrice;
    });

    function clearFilters(){
        setSearchTerm("");
        setSelectedCategory("all");
        setSelectedPrice("all")
    }

    const isFilterActive = 
    searchTerm ||
    selectedCategory !== "all" ||
    selectedPrice !== "all";

    return (
        <div className="shop">

            <div className="shop-search">
                
                    <ShopSearch 
                      searchTerm={searchTerm}
                      setSearchTerm={setSearchTerm}
                    />

                    <button 
                    className="clear-filters-btn" 
                    onClick={clearFilters}
                    >
                        Clear Filters ✕
                    </button>
                    
            </div>
             
            <div className="shop-content">
                <ShopSidebar
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedPrice={selectedPrice}
                setSelectedPrice={setSelectedPrice}
                />
                <ProductGrid products={filteredProducts}/>
            </div>
        </div>

    );
}
export default Shop;