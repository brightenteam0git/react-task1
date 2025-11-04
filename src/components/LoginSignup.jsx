import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./LoginSignup.css";
import bgImage from "../assets/login1.png";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"; // ✅ For animation

const LoginGlass = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <>
      <Navbar />

      <div
        className="glass-container"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <AnimatePresence mode="wait">
          {!isSignup ? (
            <motion.div
              key="login"
              className="glass-card"
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 80 }}
              transition={{ duration: 0.5 }}
            >
              <h2>Log In</h2>

              <form>
                <div className="input-group">
                  <input type="email" required placeholder=" "  />
                  <label>Email</label>
                </div>

                <div className="input-group">
                  <input type="password" required placeholder=" "  />
                  <label>Password</label>
                </div>

                <button type="submit" className="login-btn">
                  LOGIN
                </button>

                <div className="extra-links">
                  <a href="#">Forgot Password?</a>
                  <button
                    type="button"
                    className="switch-btn"
                    onClick={toggleForm}
                  >
                    Sign Up
                  </button>
                </div>

               
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="signup"
              className="glass-card"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.5 }}
            >
              <h2>Create Account</h2>

              <form>
                <div className="input-group">
                  <input type="text" required />
                  <label>Full Name</label>
                </div>

                <div className="input-group">
                  <input type="email" required />
                  <label>Email</label>
                </div>

                <div className="input-group">
                  <input type="password" required />
                  <label>Password</label>
                </div>

                <div className="input-group">
                  <input type="password" required />
                  <label>Confirm Password</label>
                </div>

                <button type="submit" className="login-btn">
                  SIGN UP
                </button>

                <div className="extra-links">
                  <span>Already have an account?</span>
                  <button
                    type="button"
                    className="switch-btn"
                    onClick={toggleForm}
                  >
                    Login
                  </button>
                </div>

                
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </>
  );
};

export default LoginGlass;
