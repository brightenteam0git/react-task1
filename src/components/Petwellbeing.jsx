import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Petwellbeing.css";
import dogImg from "../assets/dog-cat.png";   


export default function PetWellbeing() {
   const navigate = useNavigate();   // ✅ hook initialize

  const handleMoreClick = () => {
    navigate("/wellness");  // ✅ redirect to wellness page
  };
  return (
    <section className="pet-wellbeing">
      {/* Left: Overlapping circles with images */}
      <div className="pet-images">
        <div className="circle circle-top">
          <img src={dogImg} alt="Dog" className="pet-graphic" />
        </div>

      </div>

      {/* Right: Text content */}
      <div className="pet-text">
        <h2 className="pet-heading">Your pet’s wellbeing</h2>
        <p className="pet-subheading">
          We focus on your pet’s life and optimum energy
        </p>

        <div className="pet-section">
          <h3 className="pet-title">Healthier outcomes</h3>
          <p className="pet-description">
            A truly balanced blend of essential nutrients from quality ingredients
            allows the body to balance naturally, often producing amazing results
            for sufferers of allergies, intolerances, sensitivities or ill thrift.
          </p>
        </div>

        <div className="pet-section">
          <h3 className="pet-title">Balanced Nutrients</h3>
          <p className="pet-description">
            This perfect balance of nutrients eliminates metabolic stress,
             and so improves the health, disease resistance and longevity of your special companion.
          </p>
        </div>

        <div className="pet-section">
          <h3 className="pet-title">Inhanced Immunity</h3>
          <p className="pet-description">
            A diet rich in natural antioxidants, vitamins, and minerals strengthens your pet’s immune system,
             helping them fight infections, recover faster from illness, and maintain vibrant health through every stage of life
          </p>
        </div>
        
          <Button 
          variant="outlined" 
          className="wellbeing-btn"
          onClick={handleMoreClick}   // ✅ click event
        >
          MORE ABOUT WELLBEING
        </Button>
      </div>
    </section>
  );
}
