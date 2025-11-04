import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import puppy from "../assets/puppy.jpg";
import treat from "../assets/treat.jpg";
import oldage from "../assets/oldage.jpg";
import itchydog from "../assets/itchydog.jpg";
import pawIcon from "../assets/paw-icon.png";
import "./Wellness.css";

const blogPosts = [
  {
    id: 1,
    img: puppy,
    category: "Blog, Care ...",
    title: "Fear, anxiety, and stress... a common problem for domestic canines.",
    excerpt:
      "Like their human owners, many of our canine companions suffer a wide range of fear and stress related disorders. But what is the cause and how do we...",
  },
  {
    id: 2,
    img: treat,
    category: "Care, Health ...",
    title: "Are dog treats okay to feed to my dog, and what should I look for?",
    excerpt:
      "Whilst we love to feed treats to our fur-babies, like most of life.. it’s all about the balance. Read more about Graham & Pip’s story.",
  },
  {
    id: 3,
    img: itchydog,
    category: "Care, Health ...",
    title: "Why has my pup developed itchy skin?",
    excerpt:
      "Skin issues in puppies are common, but understanding the causes is important for treatment. Learn why pups may develop itchy skin here...",
  },
  {
    id: 4,
    img: oldage,
    category: "Geriatric, Health ...",
    title:
      "Nutritional considerations owners should look for to help their dogs move into old age.",
    excerpt:
      "What are some nutritional considerations owners should look for to help their dogs move into old age?",
  },,


   {
    id: 1,
    img: puppy,
    category: "Blog, Care ...",
    title: "Fear, anxiety, and stress... a common problem for domestic canines.",
    excerpt:
      "Like their human owners, many of our canine companions suffer a wide range of fear and stress related disorders. But what is the cause and how do we...",
  },
  {
    id: 2,
    img: treat,
    category: "Care, Health ...",
    title: "Are dog treats okay to feed to my dog, and what should I look for?",
    excerpt:
      "Whilst we love to feed treats to our fur-babies, like most of life.. it’s all about the balance. Read more about Graham & Pip’s story.",
  },
  {
    id: 3,
    img: itchydog,
    category: "Care, Health ...",
    title: "Why has my pup developed itchy skin?",
    excerpt:
      "Skin issues in puppies are common, but understanding the causes is important for treatment. Learn why pups may develop itchy skin here...",
  },
  {
    id: 4,
    img: oldage,
    category: "Geriatric, Health ...",
    title:
      "Nutritional considerations owners should look for to help their dogs move into old age.",
    excerpt:
      "What are some nutritional considerations owners should look for to help their dogs move into old age?",
  },
];

const Wellness = () => {
  return (
     <>
      <Navbar />
    <div className="journal-container">
      <div className="display-header">
        <div className="header-icon-title">
         <img src={pawIcon} alt="paw icon" className="paw-icon" />
      
          <h2>Wellness Journal</h2>
        </div>
        <p>
         Discover tips, guides, and insights to keep your furry friends happy and healthy.<br />From nutrition to daily care, we help you make every day paw-some.
        </p>
      </div>
      <div className="journal-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="journal-card">
            <img src={post.img} alt={post.title} className="journal-image" />
            <p className="journal-category">{post.category}</p>
            <h3 className="journal-heading">{post.title}</h3>
            <p className="journal-excerpt">{post.excerpt}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <span className="active">1</span>
        <span>2</span>
        <span>3</span>
        <span>...</span>
        <span>6</span>
      </div>
    </div>
    <Footer /> 
    </>
  );
};

export default Wellness;
