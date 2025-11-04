import React from "react";
import { useWatchlist } from "../context/WatchlistContext";
import { useCart } from "../context/CartContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import "./Watchlist.css";

export default function Watchlist() {
  const { watchlist, removeFromWatchlist } = useWatchlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    const cartItem = {
      id: item.id,
      title: item.title,
      img: item.img,
      price: item.price || 48.95, // fallback price if not available
      quantity: 1,
    };

    addToCart(cartItem); // ✅ add to cart context
    alert(`${item.title} has been added to your cart!`);
  };

  return (
    <>
      <Navbar />

      {/* ===== Hero Section ===== */}
      <div className="wishlist-hero">
        <div className="wishlist-overlay">
         <h1> Watchlist</h1>
          <p>
            <span className="home-link">Home Page</span> • Watchlist
          </p>
        </div>
      </div>


     
      {/* ===== Watchlist Section ===== */}
      <div className="watchlist-container">
        {watchlist.length === 0 ? (
          <div className="empty-watchlist">
            <p>No items in your watchlist yet.</p>
            <button
              className="continue-btn"
              onClick={() => navigate("/Dog")}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <table className="watchlist-table">
              <thead>
                <tr>
                  <th>PRODUCT</th>
                  <th>PRICE</th>
                  <th>STATUS</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {watchlist.map((item) => (
                  <tr key={item.id} className="watchlist-row">
                    <td className="product-info">
                      <img src={item.img} alt={item.title} />
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.subdesc}</p>
                      </div>
                    </td>
                    <td className="product-price">$48.95</td>
                    <td className="product-stock">✅ In Stock</td>
                    <td className="product-actions">
                      <button
                        className="add-cart-btn"
                         onClick={() => handleAddToCart(item)}
                      >
                        ADD TO CART
                      </button>
                      <button
                        className="remove-btn"
                        onClick={() => removeFromWatchlist(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Continue Shopping */}
            <div className="continue-section">
              <button
                className="continue-btn"
                onClick={() => navigate("/Dog")}
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}
