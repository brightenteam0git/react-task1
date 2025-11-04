import React from "react";
import { useCart } from "../context/CartContext";
import { useWatchlist } from "../context/WatchlistContext";
import { FaHeart, FaShoppingCart, FaEye } from "react-icons/fa";
import pawIcon from "../assets/paw-icon.png";
import { useNavigate } from "react-router-dom";
import "./DisplayProducts.css";

export default function DisplayProducts() {
  const { addToCart } = useCart();
  const { addToWatchlist } = useWatchlist();
  const navigate = useNavigate();

  const handleAddToCart = (e, product) => {
    e.stopPropagation(); // prevent navigating
    const item = {
      id: product.id,
      title: product.name,
      img: product.image,
      price: product.price,
      quantity: 1,
    };
    addToCart(item);
  };

  const handleAddToWatchlist = (e, product) => {
    e.stopPropagation(); // prevent navigating
    addToWatchlist({
      id: product.id,
      title: product.name,
      img: product.image,
      price: product.price,
    });
  };

  const handleViewMore = (e, id) => {
    e.stopPropagation(); // prevent navigating parent
    navigate(`/product/${id}`);
  };

  const products = [
    {
      id: 1,
      name: "Adult Dog Small Breed-KANGAROO",
      brand: "Gourmet Fido",
      image: "/icons/dogpro.jpg",
      price: 48.95,
      soldOut: false,
      link:"/product/ADULT DOG-SMALL BREEDS",
    },
    {
      id: 2,
      name: "Natural Cat Food",
      brand: "Food Bites",
      image: "/icons/catpro.jpg",
      price: 48.95,
      soldOut: false,
      link: "/product/natural-cat-food",
    },
    {
      id: 3,
      name: "Grooming Kit for Dog",
      brand: "Kibble Treat",
      image: "/icons/groom.jpg",
      price: 48.95,
      soldOut: false,
      link:  "/product/grooming-kit-for-dog",
    },
    {
      id: 4,
      name: " Toy Set Cst",
      brand: "YumTumz",
      image: "/icons/toy.jpg",
      price:  48.95,
      soldOut: false,
      link: "/product/toy-set-for-dog",
    },
  ];

  return (
    <section className="display-products">
      <div className="display-top">
        <div className="top-icon-title">
          <img src={pawIcon} alt="paw icon" className="paw-icon" />
          <h2>Featured Products</h2>
        </div>
        <p>
          Everything you need for your pet, all in one place. Quality products
          <br /> tailored for your furry friend's health and happiness.
        </p>
      </div>

      <div className="product-grid">
        {products.map((item) => (
          <div key={item.id} className="product-wrapper">
            <div
              className={`product-card ${item.soldOut ? "sold-out" : ""}`}
              onClick={() => !item.soldOut && navigate(item.link)}
            >
              {item.soldOut && <div className="sold-tag">Sold out</div>}
              <div className="image-container">
                <img src={item.image} alt={item.name} />

                <div className="hover-buttons">
                  <button
                    title="Add to Watchlist"
                    onClick={(e) => handleAddToWatchlist(e, item)}
                  >
                    <FaHeart />
                  </button>

                  <button
                    title="View More"
                    onClick={(e) => handleViewMore(e, item.id)}
                  >
                    <FaEye />
                  </button>

                  <button
                    title="Add to Cart"
                    onClick={(e) => handleAddToCart(e, item)}
                  >
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            </div>

            {/* product info OUTSIDE the card */}
            <div className="info-box">
              <h3 className="product-name">{item.name}</h3>
              <p className="brand">{item.brand}</p>
              <div className="divider"></div>
              <p className="price">Rs. {item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
