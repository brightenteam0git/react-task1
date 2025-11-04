import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./AboutUs.css";
import dog1 from "../assets/dog1.jpg";
import dog2 from "../assets/dog2.jpg";
import doctor from "../assets/doctor.jpg";
import pawIcon from "../assets/paw-icon.png";
import aboutImg from "../assets/about-img.jpg"; 
import responsibleIcon from "../assets/responsible.png"; 
import empatheticIcon from "../assets/empathetic.png";
import communityIcon from "../assets/community.png";
import inclusiveIcon from "../assets/inclusive.png";

const AboutUs = () => {
  const sections = [
    {
      title: "We Listen",
      text: "to every bark, meow, chirp & word that pets & their people say, to understand what they really need.",
      img: dog1,
    },
    {
      title: "We Challenge",
      text: "biases, myths & old ways that stand in the way of pets getting the right care.",
      img: dog2,
    },
    {
      title: "We Innovate",
      text: "with scientific rigor to create products that solve real problems.",
      img: doctor,
    },
  ];

  return (
   <>
    <Navbar />
    <section className="about-hero">
        <div className="about-overlay">
          <h1>About Us</h1>
          <p>
            <span className="home-link">Home Page</span> • About Us
          </p>
        </div>
      </section>

    <div className="about-section">
      {sections.map((section, index) => (
        <div
          className={`about-row ${index % 2 === 0 ? "normal" : "reverse"}`}
          key={index}
        >
          <div className="about-text">
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </div>

          <div className="about-divider">
            <div className="wavy-line"></div>
          </div>

          <div className="about-image">
            <img src={section.img} alt={section.title} />
          </div>
        </div>
      ))}
    </div>


      {/* ---------- Our Values Section ---------- */}
      <section className="values-section">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <img src={responsibleIcon} alt="Responsible" />
            <h3>RESPONSIBLE</h3>
            <p>
              We value your trust and stand ready to take full and absolute responsibility for our actions.
            </p>
          </div>

          <div className="value-card">
            <img src={empatheticIcon} alt="Empathetic" />
            <h3>EMPATHETIC</h3>
            <p>
              Understanding the bond between pets and their people, we create solutions that enrich and fulfill their lives.
            </p>
          </div>

          <div className="value-card">
            <img src={communityIcon} alt="Community Driven" />
            <h3>COMMUNITY-DRIVEN</h3>
            <p>
              We actively engage with communities we serve,championing initiatives to support strays and make a positive impact.
            </p>
          </div>

          <div className="value-card">
            <img src={inclusiveIcon} alt="Inclusive" />
            <h3>INCLUSIVE</h3>
            <p>
              We welcome all passionate people to become our Partner in Pethood to create a better world for pets and community animals.
            </p>
          </div>
        </div>
      </section>

      
    {/* ---------- From One Pet Parent To Others Section ---------- */}
      <section className="pet-parent-section">
        <div className="pet-parent-left">
          <div className="pet-parent-img">
            <img src={aboutImg} alt="Pet Parent" />
          </div>
        </div>

        <div className="pet-parent-right">
          <h2>From One Pet Parent To Others</h2>
          <p>
            At Wiggles, we're pet parents just like you, driven by a passion for innovation.
            We're dedicated to crafting safe and effective solutions that cater to the evolving
            needs and concerns of pet parents across India. Our goal is to curate a comprehensive
            range of products and services, striving to become your ultimate destination for all
            your pet's needs.
          </p>
        </div>
      </section>

    
    <Footer />
    </>
  );
};

export default AboutUs;
