import ProductCard from "../products/ProductCard";

function ProductGrid({products}){
   if (!products || products.length === 0) {
    return (
        <div className="empty-state">
            <h2>No products found 😕</h2>
            <p>
                 Try adjusting your search or filters to find what you’re looking for.
            </p>
        </div>
    )
   }

    return (
        <div className="product-grid">
            {products.map(product=>(
                <ProductCard
                key={product.id}
                product={product}
                />
            ))}
        </div>
    );
}
export default ProductGrid;