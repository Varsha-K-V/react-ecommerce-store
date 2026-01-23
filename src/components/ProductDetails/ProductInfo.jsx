import "./ProductInfo.css";

function ProductInfo({product}){
    return(
        <div className="product-info">
            <h1>{product.title}</h1>
            <h3 className="price">₹{product.price}</h3>
            <p className="description">{product.description}</p>
        </div>
    );
}

export default ProductInfo;