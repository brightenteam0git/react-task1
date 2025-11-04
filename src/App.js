import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Typography} from '@mui/material';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCollection from './components/Featuredcollection';
import Petwellbeing from './components/Petwellbeing';
import PromoSection from './components/Promosection';
import WellnessJournal from './components/WellnessJournal';
import Infobanner from './components/Infobanner';
import Footer from './components/Footer';
import Dog from "./components/Dogmodule";
import Cat from "./components/Cat";
import Grooming from "./components/Grooming";
import Toys from "./components/Toys";
import CartPage from "./components/CartPage";
import Productdetails from "./components/Productdetails";
import ProductList from './components/ProductList';
import { CartProvider } from './context/CartContext';
import Wellness from './components/Wellness';
import Checkout from "./components/Checkout";
import { WatchlistProvider } from "./context/WatchlistContext";
import Watchlist from "./components/Watchlist";
import SearchResults from "./components/SearchResults";
import LoginSignup from "./components/LoginSignup";
import DogModule from './components/Dogmodule';
import ContactUs from './components/ContactUs';
import DisplayProducts from './components/DisplayProducts';
import VideoSection from './components/VideoSection';
import FAQ from './components/FAQ';
import AboutUs from './components/AboutUs';
import BestForYourPet from './components/BestForYourPet';


export default function App() {
  return (
    <>

   
     
      <Routes>
        {/* ✅ Home Page */}
        <Route
          path="/"
          element={
            <>
               <Navbar />
              <Hero />
              <FeaturedCollection />
                 <PromoSection />
              <Petwellbeing/>
               <VideoSection />
              <DisplayProducts />
              <BestForYourPet />
              <WellnessJournal />
               <Infobanner />
               <Footer />
            </>
          }
        />

        {/* ✅ Product Pages */}
        <Route path="/Dog" element={<Dog />} />
        <Route path="/Cat" element={<Cat />} />
        <Route path="/Grooming" element={<Grooming />} />
        <Route path="/Toys" element={<Toys />} />
        <Route path="/product/:id" element={<Productdetails />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cartpage" element={<CartPage />} />
         <Route path="/wellness" element={<Wellness />} />
         <Route path="/checkout" element={<Checkout />} />
         <Route path="/Watchlist" element={<Watchlist />} />
         <Route path="/SearchResults" element={<SearchResults />} />
        <Route path="/LoginSignup" element={<LoginSignup />} />
        <Route path="/DogModule" element={<DogModule />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/DisplayProducts" element={<DisplayProducts />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/product/:slug" element={<Productdetails />} />
         <Route path="/" element={<FeaturedCollection />} />
        <Route path="/dogmodule/:categoryId" element={<DogModule />} />

      </Routes>
    </>
  );
}

