import "./ProductGallery.css";

function ProductGallery({ image, title }) {
  const imageSrc = Array.isArray(image) ? image[0] : image;

  return (
    <div className="product-image">
      <img src={imageSrc} alt={title} />
    </div>
  );
}

export default ProductGallery;
