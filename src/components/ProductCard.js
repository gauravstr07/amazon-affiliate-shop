import React from "react";

const fallbackImage = "https://projectfba.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/07/no-image-logo.jpg.webp";

const ProductCard = ({ title, imageUrl, productUrl }) => {
  const handleImageError = (e) => {
    e.target.src = fallbackImage;
  };

  return (
    <div className="product-card">
      <img
        src={imageUrl}
        alt={title}
        className="product-image"
        onError={handleImageError}
      />
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <a
          href={productUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="buy-button"
        >
          Buy on Amazon
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
