import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaShoppingCart,
  FaHeart,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import dogImg from "../assets/dogeat.png";
import catImg from "../assets/cateat.png";
import groomImg from "../assets/grooming.jpg";
import toyImg from "../assets/toys.png";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // 🔹 Handle sidebar open/close body scroll
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }
  }, [menuOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
      setMenuOpen(false);
    }
  };

  const handleCategoryClick = (category) => {
    navigate(`/Dogmodule?category=${category}`);
    setMenuOpen(false);
  };

  const toggleSidebar = () => {
    setMenuOpen((prev) => !prev);
  };

 return (
  <>
    {/* === DESKTOP NAVBAR === */}
    <nav className="navbar desktop-navbar">
      <div className="nav-left">
        {/* Hamburger always visible */}
        <FaBars className="menu-icon" onClick={toggleSidebar} />

        {/* Logo */}
        <Link to="/" className="logo_name">
          <img src={logo} alt="Logo" className="logo-img" />
          <div className="logo-text">
            <span>LifeWise</span>
            <small>PET NUTRITION</small>
          </div>
        </Link>
      </div>

      {/* Search */}
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-btn">
          <FaSearch />
        </button>
      </form>

     {/* Icons */}
<div className="nav-right">
  <Link to="/watchlist" className="nav-item">
    <FaHeart className="icon" />
    <span>WISHLIST</span>
  </Link>
  <Link to="/CartPage" className="nav-item">
    <FaShoppingCart className="icon" />
    <span>CART</span>
  </Link>
  <Link to="/LoginSignup" className="nav-item">
    <FaUser className="icon" />
    <span>LOGIN</span>
  </Link>
</div>

    </nav>

    {/* === MOBILE NAVBAR === */}
    <nav className="mobile-navbar">
      {/* Top Row: logo + icons */}
      <div className="mobile-top">
        <Link to="/" className="logo_name">
          <img src={logo} alt="Logo" className="logo-img" />
          <div className="logo-text">
            <span>LifeWise</span>
            <small>PET NUTRITION</small>
          </div>
        </Link>

        <div className="mobile-icons">
          <Link to="/watchlist"><FaHeart className="icon" /></Link>
          <Link to="/CartPage"><FaShoppingCart className="icon" /></Link>
          <Link to="/LoginSignup"><FaUser className="icon" /></Link>
        </div>
      </div>

      {/* Second Row: hamburger + search */}
      <form className="mobile-search-row" onSubmit={handleSearch}>
        <FaBars className="menu-icon" onClick={toggleSidebar} />
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    </nav>

    {/* === SIDEBAR MENU === */}
    <div className={`sidebar-menu ${menuOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <h2>Hello Hooman!</h2>
        <FaTimes className="close-icon" onClick={toggleSidebar} />
      </div>

      <Link to="/LoginSignup" className="login-link">
        LOGIN
      </Link>

      <div className="sidebar-categories">
        <div className="category-item" onClick={() => handleCategoryClick("dogfood")}>
          <img src={dogImg} alt="Dog" />
          <div>
            <h3>DOG FOOD</h3>
            <p>Everything your pooch needs</p>
          </div>
        </div>

        <div className="category-item" onClick={() => handleCategoryClick("catfood")}>
          <img src={catImg} alt="Cat" />
          <div>
            <h3>CAT FOOD</h3>
            <p>Everything your kitty loves</p>
          </div>
        </div>

        <div className="category-item" onClick={() => handleCategoryClick("grooming")}>
          <img src={groomImg} alt="Grooming" />
          <div>
            <h3>GROOMING KIT</h3>
            <p>For a clean & happy pet</p>
          </div>
        </div>

        <div className="category-item" onClick={() => handleCategoryClick("toys")}>
          <img src={toyImg} alt="Toys" />
          <div>
            <h3>PET TOYS</h3>
            <p>Playtime for your buddy</p>
          </div>
        </div>
      </div>
    </div>

    {/* Overlay */}
    {menuOpen && <div className="overlay active" onClick={toggleSidebar}></div>}
  </>
);

}
