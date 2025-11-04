import React, { useState ,useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import productData from "../data/productData";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Productdetails.css";
import { useWatchlist } from "../context/WatchlistContext";
import { FaRegBookmark, FaShoppingCart } from "react-icons/fa";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img4 from "../images/4.png";
import img5 from "../images/5.png";
import img6 from "../images/6.png";
import img7 from "../images/7.png";
import img8 from "../images/8.png";
import img9 from "../images/9.png";
import img10 from "../images/10.png";
import img11 from "../images/11.png";


export default function Productdetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { addToWatchlist } = useWatchlist();

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("18kg");
   const [price, setPrice] = useState(0);

  // flatten all products
  const allProducts = Object.values(productData)
    .flatMap(group => Object.values(group).flat());

  const product = allProducts.find(p => String(p.id) === id);

  const [mainImg, setMainImg] = useState(product.img);

  useEffect(() => {
    if (product && product.sizePrices) {
      setPrice(product.sizePrices[size]);
    } else {
      setPrice(product.price || 48.95);
    }
  }, [size, product]);

  if (!product) {
    return (
      <>
        <Navbar />
        <p style={{ padding: "40px", textAlign: "center" }}>Product not found</p>
        <Footer />
      </>
    );
  }

 const handleAddToCart = () => {
  const price = product.sizePrices ? product.sizePrices[size] : product.price;
  addToCart({ ...product, price, size }, quantity);
};

const scrollLeft = () => {
  document.getElementById("scroll-container").scrollBy({
    left: -300,
    behavior: "smooth"
  });
};

const scrollRight = () => {
  document.getElementById("scroll-container").scrollBy({
    left: 300,
    behavior: "smooth"
  });
};


  return (
    <>
      <Navbar />




      <div className="product-detail">
        {/* Left - Image */}
        <div className="product-left">
         <img src={mainImg} alt={product.title} className="product-image" />

       
       <div className="scrolling-bar">
  <button className="scroll-btn left" onClick={() => scrollLeft()}>&lt;</button>
  
  <div className="scroll-container" id="scroll-container">
<img src={img2} alt="flavor 2" onClick={() => setMainImg(img2)} />
<img src={img3} alt="flavor 3" onClick={() => setMainImg(img3)} />
<img src={img4} alt="flavor 4" onClick={() => setMainImg(img4)} />
<img src={img5} alt="flavor 5" onClick={() => setMainImg(img5)} />
<img src={img6} alt="flavor 6" onClick={() => setMainImg(img6)} />
<img src={img7} alt="flavor 7" onClick={() => setMainImg(img7)} />
<img src={img8} alt="flavor 8" onClick={() => setMainImg(img8)} />
<img src={img9} alt="flavor 9" onClick={() => setMainImg(img9)} />
<img src={img10} alt="flavor 10" onClick={() => setMainImg(img10)} />
<img src={img11} alt="flavor 11" onClick={() => setMainImg(img11)} />



  </div>
  
  <button className="scroll-btn right" onClick={() => scrollRight()}>&gt;</button>
</div>

        {/* Bottom - Long Description */}
      <div className="product-description-block">
        <p>
          A scientifically balanced, holistic and hypoallergenic food that is suitable for all dogs,
          but is especially useful for animals with sensitive stomachs or those suffering from
          Irritable Bowel Syndrome. This food contains a balanced supply of herbs plus yeast extract
          for optimal intestinal and general health. Also contains <em>Yucca schidigera</em> extract,
          and is free of gluten, GMO’s and dairy products.
        </p>
        <p><strong>Metabolizable Energy 3840 kcal/kg.</strong></p>
      </div>

       <div className="product-extra">

  <h2>Feeding Rate</h2>
  <table className="feeding-table">
    <thead>
      <tr>
        <th>WEIGHT (kg)</th>
        <th>AMOUNT (g/day)</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>5 - 10</td><td>80 - 110g</td></tr>
      <tr><td>10 - 20</td><td>110 - 140g</td></tr>
      <tr><td>20 - 30</td><td>140 - 180g</td></tr>
      <tr><td>30 - 40</td><td>180 - 220g</td></tr>
      <tr><td>40 - 50</td><td>220 - 280g</td></tr>
    </tbody>
  </table>
</div>
      </div>

        {/* Right - Info */}
        <div className="product-right">
            <div className="product-right-content">
          <h1 className="product-title">{product.title}</h1>
          <h3 className="product-subtitle">{product.desc}</h3>
          <p className="product-short">{product.subdesc}</p>

          {/* Size Selector */}
          <div className="product-option">
              <label>Size</label>
              <select value={size} onChange={(e) => setSize(e.target.value)}>
                {Object.keys(product.sizePrices || {}).map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

          {/* Quantity Selector */}
          <div className="product-option">
            <label>Qty</label>
            <div className="qty-control">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

           {/* Subscription Options */}
          <div className="purchase-options">
            <label>
              <input type="radio" name="purchase" defaultChecked />
              One-time Purchase
            </label>
            <label>
              <input type="radio" name="purchase" />
              Autoship & Save 5%: $46.50
            </label>
          </div>

          {/* Price */}
          <div className="product-price">
  ${product.sizePrices ? product.sizePrices[size].toFixed(2) : product.price}
</div>

           <button
  className="add-to-watchlist"
  onClick={() => addToWatchlist(product)}
>
  <FaRegBookmark className="watchlist-icon" />
  ADD TO WATCHLIST
</button>

          {/* Add to Cart */}
          <button className="add-to-cart" onClick={handleAddToCart}>
            <FaShoppingCart className="watchlist-icon" />
            ADD TO CART
          </button>
     
         

    

        {/* Payment Options */}
<div className="payment-options">
  <p>
    or 4 interest-free payments as low as <strong>$12.24</strong> with
  </p>
  <div className="afterpay">
    <img
      src="/images/afterpay.png"
      alt="Afterpay"
    />
    <span className="info-icon">ℹ</span>
  </div>
  <button className="paypal-btn">
    <span>PayPal</span>
  </button>
</div>
  </div>
 </div>
 </div>      
      <Footer />
    </>
  );
}
