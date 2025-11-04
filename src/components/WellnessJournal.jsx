import React from "react";
import pawIcon from "../assets/paw-icon.png";
import "./WellnessJournal.css";


export default function WellnessJournal() {
  return (
    <section className="wellness-section">
      

      <div className="wellness-content">
        <div className="display-header">
       <div className="header-icon-title">
        <img src={pawIcon} alt="paw icon" className="paw-icon" />
     
         <h2>Wellness Journal</h2>
       </div>
      

        <div className="wellness-articles">
          {/* Article 1 */}
          <div className="journal-card">
            <p className="journal-category">BLOG, CARE ...</p>
            <h3 className="journal-heading">
              Fear, anxiety, and stress... a common problem for domestic canines.
            </h3>
            <p className="journal-desc">
              Like their human owners, many of our canine companions suffer a wide
              range of fear and stress related disorders. But what is the cause and
              how do we help our furry friends?
            </p>
         </div>
          {/* Article 2 */}
          <div className="journal-card">
            <p className="journal-category">CARE, HEALTH ...</p>
            <h3 className="journal-heading">
              Are dog treats okay to feed to my dog, and what should I look for?
            </h3>
            <p className="journal-desc">
              Whilst we love to feed treats to our fur-babies, like most of life...
              it’s all about the balance. Read about Graham & Pip’s story here.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
