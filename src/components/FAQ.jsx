import React, { useState, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaPlay } from "react-icons/fa";
import "./FAQ.css";
import FAQdog from "../assets/FAQdog.png"; // 🐶 Replace with your dog image path

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const sectionRefs = useRef([]);
  const faqContentRef = useRef(null); // 🔹 Ref for scrollable right section

  const handleToggle = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  // 🔹 Scroll inside the right content only (not full page)
  const scrollToSection = (index) => {
    const target = sectionRefs.current[index];
    const container = faqContentRef.current;

    if (target && container) {
      const offsetTop =
        target.offsetTop - container.offsetTop - 20; // adjust offset for padding
      container.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const faqs = [
    {
      category: "Our Food",
      questions: [
        {
          q: "Why should I feed fresh?",
          a: "It’s true that most existing pet food options contain the right balance vitamins and nutrients for a dog to survive — but we believe there’s a big difference between surviving and thriving.",
        },
        {
          q: "How are The Farmer’s Dog meals made?",
          a: "Meals are freshly prepared with human-grade ingredients in a USDA kitchen.",
        },
        {
          q: "What are the quality of ingredients?",
          a: "We use only fresh, whole ingredients — no preservatives or fillers.",
        },
        {
          q: "How are your recipes formulated?",
          a: "Each recipe is developed with board-certified veterinary nutritionists.",
        },
        {
          q: "Do I need to refrigerate the food?",
          a: "Yes, all meals are delivered fresh and should be kept refrigerated.",
        },
      ],
    },
    {
      category: "Creating Your Plan",
      questions: [
        {
          q: "How do I create my plan?",
          a: "Answer a few questions about your pet to get a personalized meal plan.",
        },
        {
          q: "Can I change my plan later?",
          a: "Yes! You can update your meal schedule or portions anytime.",
        },
      ],
    },
    {
      category: "Packaging and Shipping",
      questions: [
        {
          q: "How is the food packaged?",
          a: "Meals are vacuum-sealed to stay fresh and shipped in insulated boxes.",
        },
      ],
    },
    {
      category: "Your Subscription",
      questions: [
        {
          q: "Can I pause my subscription?",
          a: "Absolutely, you can pause or cancel anytime from your account dashboard.",
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />

      {/* ===== Hero Section ===== */}
      <div className="FAQ-hero">
        <div className="FAQ-overlay">
          <h1>FAQ</h1>
          <p>
            <span className="home-link">Home Page</span> • FAQ
          </p>
        </div>
      </div>

      {/* ===== FAQ Page ===== */}
      <div className="faq-page">
        {/* Sidebar */}
        <div className="faq-sidebar">
          <h1>
            Frequently <br /> Asked Questions
          </h1>
          <div className="underline"></div>
          <ul>
            {faqs.map((section, index) => (
              <li key={index} onClick={() => scrollToSection(index)}>
                {section.category}
              </li>
            ))}
          </ul>
          <img src={FAQdog} alt="Dog" className="faq-dog" />
        </div>

        {/* Scrollable Right Section */}
        <div className="faq-content" ref={faqContentRef}>
          {faqs.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              ref={(el) => (sectionRefs.current[sectionIndex] = el)}
              className="faq-section"
            >
              <h2>{section.category}</h2>
              {section.questions.map((item, qIndex) => {
                const index = `${sectionIndex}-${qIndex}`;
                const isActive = activeQuestion === index;
                return (
                  <div
                    key={index}
                    className={`faq-item ${isActive ? "active" : ""}`}
                    onClick={() => handleToggle(index)}
                  >
                    <div className="faq-question">
                      <span
                        className={`faq-icon ${
                          isActive ? "active-icon" : ""
                        }`}
                      >
                        <FaPlay />
                      </span>
                      {item.q}
                    </div>
                    {isActive && <p className="faq-answer">{item.a}</p>}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FAQ;
