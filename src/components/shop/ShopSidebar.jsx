const categories = [
  { label: "All", value: "all" },
  { label: "Hoodies", value: "hoodies" },
  { label: "T-Shirts", value: "tshirts" },
  { label: "Shirts", value: "shirts" },
  { label: "Jeans", value: "jeans" },
  { label: "Jackets", value: "jackets" }
];

const priceRanges = [
  { label: "All", value: "all" },
  { label: "Under ₹500", value: "under500" },
  { label: "₹500 – ₹1000", value: "500to1000" },
  { label: "Above ₹1000", value: "above1000" }
];


function ShopSidebar({
    selectedCategory,
    setSelectedCategory,
    selectedPrice,
    setSelectedPrice
}){
    return(
        <aside className="shop-sidebar">
            <h3>Categories</h3>
            
            <ul className="category-list">
                {categories.map(cat =>(
                    <li
                    key={cat.value}
                    className={selectedCategory === cat.value ? "active" : ""}
                    onClick={()=>setSelectedCategory(cat.value)}
                    >
                        {cat.label}
                    </li>
                ))}
            </ul>


            <h3>Price</h3>
            
            <ul className="price-list">
                {priceRanges.map(price=>(
                    <li
                    key={price.value}
                    className={selectedPrice===price.value ? "active" : ""} 
                    onClick={()=>setSelectedPrice(price.value)}
                    >
                        {price.label}
                    </li>
                ))}
            </ul>

        </aside>
    );
}
export default ShopSidebar;