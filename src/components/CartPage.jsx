import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import "./CartPage.css";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart } = useCart();

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const navigate = useNavigate();
  return (
    <>
    <Navbar />
    <div className="cart-hero">
        <div className="cart-overlay">
         <h1> Your cart</h1>
          <p>
            <span className="home-link">Home Page</span> • Your Cart
          </p>
        </div>
      </div>
    <div className="cart-container">
     

      {items.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/shop" className="continue-btn">Continue Shopping</Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {items.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt={item.title} className="cart-item-img" />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>Size: {item.size}</p>
                  <p>${typeof item.price === 'number' ? item.price.toFixed(2) : 'N/A'}</p>


                  <div className="qty-controls">
                    <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>

                <button 
                  className="remove-btn" 
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Total: ${total.toFixed(2)}</h2>
          <div className="cart-buttons">
  <button
    className="continue-btn"
    onClick={() => navigate("/Dog")}
  >
    Continue Shopping
  </button>

  <button
    className="cart-btn"
    onClick={() => navigate("/Checkout")}
  >
    Checkout
  </button>
</div>
          </div>
        </>
      )}
    </div>
    <Footer />
     </>
  );
}
