import React from "react";
import { useNavigate } from "react-router-dom";
import pawIcon from "../assets/paw-icon.png";
import dogeat from "../assets/dogeat.png";
import cateat from "../assets/cateat.png";
import tomgrooming from "../assets/tomgrooming.png";
import toys from "../assets/toys.png";
import "./Featuredcollection.css";
import productData from "../data/productData";

const categories = [
  { id: "Dog", name: "ADULT DOGS-SMALL BREEDS", btnText: "SEE DOG FOOD", image: dogeat, bgColor: "#FDEEE2" },
  { id: "Cat", name: "NUTRAL CAT FOOD", btnText: "SEE CAT FOOD", image: cateat, bgColor: "#FDF4D7" },
  { id: "Grooming", name: "GROOMING KIT FOR DOGS", btnText: "SEE GROOMING KIT", image: tomgrooming, bgColor: "#EDF8DB" },
  { id: "Toys", name: "TOY SET FOR DOGS", btnText: "SEE PET TOYS", image: toys, bgColor: "#EAE0F6" },
];

export default function FeaturedCollection() {
  const navigate = useNavigate();

  const handleNavigate = (cat) => {
    // Navigate to DogModule with exact group and subcategory keys
    navigate(`/dogmodule?group=${cat.id}&sub=${cat.name}`);
  };

  return (
    <section className="featured-collection">
      <div className="display-header">
        <div className="header-icon-title">
          <img src={pawIcon} alt="paw icon" className="paw-icon" />
          <h2>Top Categories</h2>
        </div>
        <p>
          Everything you need for your pet, all in one place. Quality products
          <br /> tailored for your furry friend's health and happiness.
        </p>
      </div>

      {/* Category Cards */}
      <div className="products-grid top-categories">
        {categories.map((cat) => (
          <div className="product-wrapper" key={cat.id}>
            <div className="featureproduct-card" style={{ backgroundColor: cat.bgColor }}>
              <img src={cat.image} alt={cat.name} className="product-image" />
            </div>
            <button className="category-btn" onClick={() => handleNavigate(cat)}>
              {cat.btnText}
              <span className="icon">▶</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
