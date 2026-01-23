import "./ProductActions.css";

function ProductActions({
    product,
    selectedSize,
    setSelectedSize,
    selectedColor,
    setSelectedColor,
    onAddToCart,
    adding,
}){
    return(
        <div className="product-actions">
            {/* Size */}
            <div className="option-group">
                <p>Select size:</p>
                {product.sizes.map((size) => (
                    <button
                    key={size}
                    className={selectedSize === size ? "active" : ""}
                    onClick={() => setSelectedSize(size)}
                    >
                        {size}
                    </button>
                    ))}
            </div>

            {/* Color */}
            <div className="option-group">
                <p>Select color:</p>
                {product.colors.map((color) => (
                    <button
                    key={color}
                    className={selectedColor === color ? "active" : ""}
                    onClick={() => setSelectedColor(color)}
                    >
                        {color}
                    </button>
                    ))}
            </div>

            {!product.inStock && <p className="out-of-stock">Out of Stock</p>}

            <button
                disabled={adding || !product.inStock || !selectedSize || !selectedColor}
                onClick={onAddToCart}
                >
                    {adding ? "Adding..." : "Add to Cart"}
            </button>
        </div>
    );
}

export default ProductActions;