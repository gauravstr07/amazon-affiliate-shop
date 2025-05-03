
import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import "./App.css"; // Import the global styles
import products from "./data/products.json";

function App() {
  
  
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div>
    <header className="app-header">
      <h1>🛍️ Trending Tech Deals</h1>
      <p>Find top-rated gadgets and gear on Amazon with great discounts</p>
    </header>

    <div className="app-container">
      {currentProducts.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          imageUrl={product.imageUrl}
          productUrl={product.amazonLink}
        />
      ))}
    </div>

    <div className="pagination">
      <button onClick={handlePrev} disabled={currentPage === 1}>
        ◀ Previous
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Next ▶
      </button>
    </div>

    <footer className="app-footer">
      <p>© {new Date().getFullYear()} TechDeals • Powered by Amazon Affiliate</p>
    </footer>
  </div>
  );
}

export default App;
