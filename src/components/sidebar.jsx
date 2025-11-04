import React, { useState } from "react";
import styles from "./Dog.module.css"; 
import productData from "../data/productData";

export default function Sidebar({ onSelect }) {
  const [mainGroup, setMainGroup] = useState("Dog");
  const [subCategory, setSubCategory] = useState("Small Breeds");

  const groupIcons = {
    Dog: "/icons/dog.png",
    CAT: "/icons/cat.png",
    GROOMING: "/icons/grooming.png",
    TOYS: "/icons/toys.png",
  };

  return (
    <aside className={styles.sidebar}>
      {Object.keys(productData).map((group) => (
        <div key={group}>
          <img
            src={groupIcons[group]}
            alt={`${group} icon`}
            className={styles.sectionIcon}
          />
          <h3
            onClick={() => {
              setMainGroup(group);
              setSubCategory(Object.keys(productData[group])[0]);
              onSelect(group, Object.keys(productData[group])[0]);
            }}
          >
            {group}
          </h3>
          <ul>
            {Object.keys(productData[group]).map((sub) => (
              <li
                key={sub}
                className={
                  mainGroup === group && subCategory === sub
                    ? styles.active
                    : ""
                }
                onClick={() => {
                  setMainGroup(group);
                  setSubCategory(sub);
                  onSelect(group, sub);
                }}
              >
                {sub}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
