import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./Dogmodule.module.css";
import productData from "../data/productData";
import pawIcon from "../assets/paw-icon.png";

export default function DogModule() {
   const location = useLocation();
  const query = new URLSearchParams(location.search);
  
const categoryFromNavbar = query.get("category"); // "dogfood", "catfood", etc.
const queryGroup = query.get("group"); // If someone manually visits /Dogmodule?group=Dog
const querySub = query.get("sub");

let initialGroup;

// ✅ Decide which main group to show
if (categoryFromNavbar) {
  if (categoryFromNavbar === "dogfood") initialGroup = "Dog";
  else if (categoryFromNavbar === "catfood") initialGroup = "Cat";
  else if (categoryFromNavbar === "grooming") initialGroup = "Grooming";
  else if (categoryFromNavbar === "toys") initialGroup = "Toys";
} else if (queryGroup) {
  initialGroup = queryGroup;
} else {
  initialGroup = "Dog"; // default fallback
}

// ✅ Determine subcategory
const subKeys = Object.keys(productData[initialGroup]);
const initialSub = subKeys.includes(querySub) ? querySub : subKeys[0];

const [mainGroup, setMainGroup] = useState(initialGroup);
const [subCategory, setSubCategory] = useState(initialSub);
const [showSidebar, setShowSidebar] = useState(true);

 const products = productData[mainGroup][subCategory];

 useEffect(() => {
  const query = new URLSearchParams(location.search);
  const category = query.get("category");
  const groupParam = query.get("group");
  const subParam = query.get("sub");

  let newGroup = mainGroup;

  if (category === "dogfood") newGroup = "Dog";
  else if (category === "catfood") newGroup = "Cat";
  else if (category === "grooming") newGroup = "Grooming";
  else if (category === "toys") newGroup = "Toys";
  else if (groupParam) newGroup = groupParam;

  const subKeys = Object.keys(productData[newGroup]);
  const newSub = subKeys.includes(subParam) ? subParam : subKeys[0];

  setMainGroup(newGroup);
  setSubCategory(newSub);

  // Optional: scroll to top when switching groups
  window.scrollTo({ top: 0, behavior: "smooth" });
}, [location.search]);

  const groupIcons = {
    Dog: "/icons/dog1.png",
    Cat: "/icons/cat1.png",
    Grooming: "/icons/grooming1.png",
    Toys: "/icons/toy1.png",
  };

  return (
    <>
      <Navbar />
      <div className={styles.dogPage}>
        {/* Sidebar */}
       {/* Sidebar */}
<aside className={styles.sidebar}>
  {/* ✅ MOBILE VIEW (unchanged) */}
  <div className={styles.mobileTopBar}>
    {Object.keys(productData).map((group) => (
      <div
        key={group}
        className={`${styles.categoryTab} ${
          mainGroup === group ? styles.activeTab : ""
        }`}
        onClick={() => {
          if (mainGroup === group) {
            setMainGroup("");
          } else {
            setMainGroup(group);
            setSubCategory(Object.keys(productData[group])[0]);
          }
        }}
      >
        <img
          src={groupIcons[group]}
          alt={`${group} icon`}
          className={styles.tabIcon}
        />
        <p>{group}</p>
      </div>
    ))}
  </div>

  {/* ✅ MOBILE Subcategories (same as before) */}
  {mainGroup && (
    <ul className={styles.mobileSubMenu}>
      {Object.keys(productData[mainGroup]).map((sub) => (
        <li
          key={sub}
          className={subCategory === sub ? styles.activeSub : ""}
          onClick={() => setSubCategory(sub)}
        >
          {sub}
        </li>
      ))}
    </ul>
  )}

  {/* ✅ DESKTOP VIEW (always show all categories + subcategories) */}
  <div className={styles.desktopSidebar}>
    {Object.keys(productData).map((group) => (
      <div key={group} className={styles.categoryBlock}>
        <h3>{group}</h3>
        <ul>
          {Object.keys(productData[group]).map((sub) => (
            <li
              key={sub}
              className={subCategory === sub ? styles.active : ""}
              onClick={() => {
                setMainGroup(group);
                setSubCategory(sub);
              }}
            >
              {sub}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</aside>




       

        {/* Main Content */}
        <main className={styles.dogMain}>
          <div className="paw-icon-container">
            <img src={pawIcon} alt="paw" className="paw-icon" />
          </div>
          <h1 className={styles.heading}>
            {mainGroup} –{" "}
            <span className={styles.subCategoryLine}>
              {subCategory.split("-")[0]} <br />
              {subCategory.split("-")[1]}
            </span>
          </h1>
          <p>These foods are suitable for {subCategory}.</p>

          <div className={styles.products}>
            {products.map((p) => (
              <Link to={`/product/${p.id}`} key={p.id} className={styles.productCard}>
                <img src={p.img} alt={p.title} />
                <h2>{p.title}</h2>
                <p className={styles.desc}>{p.desc}</p>
                {p.subdesc && (
                  <>
                    <hr className={styles.divider} />
                    <p className={styles.subdesc}>{p.subdesc}</p>
                  </>
                )}
              </Link>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
