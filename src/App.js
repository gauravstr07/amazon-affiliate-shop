import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";
import products from "./data/products.json";
import AdComponent from "./utils/AdComponent";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [inputPage, setInputPage] = useState("");

  const productsPerPage = 6;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleHeaderClick = () => {
    setCurrentPage(1);
    setInputPage("");
  };

  const handlePageInputChange = (e) => {
    setInputPage(e.target.value);
  };

  const handleGoToPage = () => {
    const page = Number(inputPage);
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    } else {
      alert(`Please enter a valid page number (1 to ${totalPages})`);
    }
    setInputPage(""); // optional
  };

  return (
    <div>
      <header className="app-header" onClick={handleHeaderClick} style={{ cursor: "pointer" }}>
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
        <AdComponent />
      </div>

      <div className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          ◀ Previous
        </button>

        <span>Page {currentPage} of {totalPages}</span>

        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next ▶
        </button>

        <div className="goto-container">
          <input
            type="number"
            min="1"
            max={totalPages}
            value={inputPage}
            onChange={handlePageInputChange}
            placeholder="Go to page"
            className="goto-input"
          />
          <button onClick={handleGoToPage} className="goto-button">
            Go
          </button>
        </div>
      </div>

      <footer className="app-footer">
        <p>© {new Date().getFullYear()} TechDeals • Powered by Amazon Affiliate</p>
      </footer>
    </div>
  );
}

export default App;
