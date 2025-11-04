import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import heroimg1 from "../assets/heroimg.png";
import heroimg2 from "../assets/heroimg2.png";
import heroimg3 from "../assets/heroimg3.png";
import "./Hero.css";

const heroSlides = [
  {
    image: heroimg1,
    title: "Crafted For Their Needs",
    subtitle: "Better Litter. Better Value",
    tagline: "Complete and Balanced Meals",
  },
  {
    image: heroimg2,
    title: "Nourish Their Happiness",
    subtitle: "Healthy Food. Healthy Pets",
    tagline: "Wholesome meals they’ll love",
  },
  {
    image: heroimg3,
    title: "Love Starts With Nutrition",
    subtitle: "Natural Ingredients. Honest Care",
    tagline: "Feed their best life",
  },
];

const Hero = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrent(index);
  };

  const handleShopNow = () => {
    navigate("/dogmodule");
  };

  const { image, title, subtitle, tagline } = heroSlides[current];

  return (
    <section id="hero">
    <section className="hero">
      <div className="hero-image">
        <img src={image} alt={title} />
      </div>

      <div className="hero-content">
        <h4>{subtitle}</h4>
        <h1>{title}</h1>
        <p>{tagline}</p>
        <button className="hero-btn" onClick={handleShopNow}>
          SHOP NOW
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="slider-dots">
        {heroSlides.map((_, index) => (
          <span
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </section>
    </section>
  );
};

export default Hero;
