import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import "./Checkout.css";

export default function Checkout() {
  const { items: cartItems } = useCart() || { items: [] };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    payment: "Credit Card",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [discountError, setDiscountError] = useState("");

  // Handle form input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate
  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    return newErrors;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(true);
    }
  };

  // Discount logic
  const applyDiscount = () => {
    const code = discountCode.trim().toUpperCase();
    if (code === "PET10") {
      setDiscountPercent(10);
      setDiscountError("");
    } else if (code === "PET20") {
      setDiscountPercent(20);
      setDiscountError("");
    } else if (code === "WELCOME5") {
      setDiscountPercent(5);
      setDiscountError("");
    } else {
      setDiscountPercent(0);
      setDiscountError("Invalid discount code");
    }
  };

  // Totals
  const totalPrice = (cartItems || []).reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discountAmount = (totalPrice * discountPercent) / 100;
  const finalTotal = totalPrice - discountAmount;

  return (
    <>
      <Navbar />

      <div className={`checkout ${submitted ? "submitted" : ""}`}>
        {!submitted ? (
          <div className="checkout-container">
            <div className="checkout-form-section">
              <h1>Checkout</h1>

              <form onSubmit={handleSubmit} className="checkout-form">
                <div className="form-group">
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <p className="error">{errors.name}</p>}
                </div>

                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>

                <div className="form-group">
                  <label>Address:</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  ></textarea>
                  {errors.address && <p className="error">{errors.address}</p>}
                </div>

                <div className="form-group">
                  <label>Payment Method:</label>
                  <select
                    name="payment"
                    value={formData.payment}
                    onChange={handleChange}
                  >
                    <option>Credit Card</option>
                    <option>Debit Card</option>
                    <option>Cash on Delivery</option>
                    <option>UPI</option>
                  </select>
                </div>

                <div className="form-group discount-section">
                  <label>Discount Code:</label>
                  <div className="discount-input">
                    <input
                      type="text"
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value)}
                      placeholder="Enter code (e.g., PET10)"
                    />
                    <button
                      type="button"
                      onClick={applyDiscount}
                      className="apply-btn"
                    >
                      Apply
                    </button>
                  </div>
                  {discountError && <p className="error">{discountError}</p>}
                  {discountPercent > 0 && (
                    <p className="success">
                      ✅ {discountPercent}% discount applied!
                    </p>
                  )}
                </div>

                <div className="price-summary">
                  <p>
                    <strong>Subtotal:</strong> ₹{totalPrice.toFixed(2)}
                  </p>
                  <p>
                    <strong>Discount:</strong> ₹{discountAmount.toFixed(2)} (
                    {discountPercent}%)
                  </p>
                  <h3>
                    <strong>Final Total:</strong> ₹{finalTotal.toFixed(2)}
                  </h3>
                </div>

                <button type="submit" className="checkout-btn">
                  Place Order
                </button>
              </form>
            </div>
          </div>
        ) : (
          // ORDER SUMMARY CARD
          <div className="summary-overlay">
            <div className="order-summary">
              {/* Centered Thank You */}
              <div className="thankyou-header">
                <h1>🎉 Thank You for the Visit!</h1>
                <p>We hope you visit again soon ❤️</p>
              </div>

              {/* Two-column layout */}
              <div className="summary-columns">
                {/* Left — Order Summary */}
               <div className="summary-left">
  <h2>🛍️ Order Summary</h2>
  <div className="summary-info">
  <div className="item-card">  
    <div className="info-item">
      <strong>Name:</strong> {formData.name}
    </div>
    <div className="info-item">
      <strong>Email:</strong> {formData.email}
    </div>
    <div className="info-item">
      <strong>Address:</strong> {formData.address}
    </div>
    <div className="info-item">
      <strong>Payment:</strong> {formData.payment}
    </div>
  </div>
</div>
</div>

                {/* Right — Purchased Items */}
                <div className="summary-right">
                   <h3>🛍️ Purchased Iteams</h3>
                  <div className="item-list">
                    {(cartItems || []).length > 0 ? (
                      cartItems.map((item, index) => (
                        <div className="item-card" key={index}>
                          <img src={item.img || item.image} alt={item.title} />
                          <div className="item-info">
                           <p className="item-name"><strong>{item.title}</strong></p>
            {item.size && <p className="item-size">Size: {item.size}</p>}
            <p className="item-qty">Qty: {item.quantity}</p>
            <p className="item-price">₹{(item.price * item.quantity).toFixed(2)}</p>
          
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>No items in cart.</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Centered Total */}
              <div className="summary-total">
                <h2>Final Total: ₹{finalTotal.toFixed(2)}</h2>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
