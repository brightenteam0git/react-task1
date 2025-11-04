import React from "react";
import styles from "./BestForYourPet.module.css";

import vetImg from "../assets/vet-cat.jpg";        // 🐾 replace with your image
import foodImg from "../assets/pet-food.jpg";      // 🐾 replace with your image
import careImg from "../assets/hand-paw.jpg";      // 🐾 replace with your image

const BestForYourPet = () => {
  const features = [
    {
      img: vetImg,
      title: "Curated by Vets",
      desc: "Vets know what’s best for pets. Our resident vets have the final say, be it products, services or tips & advice, everything you find here is vet approved."
    },
    {
      img: foodImg,
      title: "Clean & Transparent",
      desc: "Right from clean ingredients in products to transparent processes and ethical practices. We only follow what’s right for your pets and for you."
    },
    {
      img: careImg,
      title: "Holistic Care",
      desc: "Nurturing physical, emotional & social health of animals, we look at pet-care as an integrated system. We are here to be your #PartnersInPethood."
    }
  ];

  return (
    <section className={styles.bestSection}>
      <h2 className={styles.heading}>Simply The Best For Your Pet</h2>

      <div className={styles.features}>
        {features.map((f, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.imageWrapper}>
              <img src={f.img} alt={f.title} />
            </div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestForYourPet;
