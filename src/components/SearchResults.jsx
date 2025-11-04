import React from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import productData from "../data/productData";
import "./SearchResults.css";

export default function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q")?.toLowerCase() || "";

  // Flatten all products into one array
  const allProducts = Object.values(productData)
    .flatMap((category) => Object.values(category).flat());

  // Filter based on search query
  const results = allProducts.filter((p) =>
    p.title.toLowerCase().includes(query)
  );

  return (
    <>
      <Navbar />
      <div className="search-results-container">
      <div style={{ padding: "2rem" }}>
        <h2>Search Results for “{query}”</h2>
        {results.length === 0 ? (
          <p className="no-results">No products found.</p>
           
        ) : (
           <div className="results-grid">
      {results.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`}>
          <div className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.desc}</p>
          </div>
        </Link>
            ))}
          </div>
        )}
      </div>
      </div>
      <Footer />
    </>
  );
}
