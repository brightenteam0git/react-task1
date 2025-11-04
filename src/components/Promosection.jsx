import React from "react";
import { useNavigate } from "react-router-dom";
import "./Promosection.css";
import dogImg from "../assets/dog.png"; // make sure the path is correct

const PromoSection = () => {
  const navigate = useNavigate(); // ✅ initialize useNavigate

  const handleShopNow = () => {
    navigate("/dogmodule"); // ✅ redirect to DogModule.jsx
  };

  return (
    <section className="promo">
      <div className="promo-content">
        <h2>
          Limited Time Offer: Get 10% Off <br /> on Your First Order!
        </h2>
        <p>
          Let’s get real, you don’t have to be a Veterinary Nutritionist to know
          good food. But it’s nice to have one on staff. Don’t feed your pets
          fast food. Nurture them with our slow-cooked recipes for healthier,
          happier pets.
        </p>
        <button className="promo-btn" onClick={handleShopNow}>
          Grab The Offer Now
        </button>
      </div>
      <div className="promo-image">
        <img src={dogImg} alt="Puppy" />
      </div>
    </section>
  );
};

export default PromoSection;
