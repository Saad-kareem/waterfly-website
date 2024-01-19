import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./HeadFoot/navbar.css";
import "./contact.css";
import "./components/card.css";
import "./components/home.css";
import "./About.css";
import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Navbar from "./HeadFoot/Navbar";
import Cart from "./components/Cart";
import Footer from "./HeadFoot/Footer";
import Error from "./components/Error";
import Policy from "./components/Policy";
import { Scrollbars } from 'react-custom-scrollbars-2';

function App() {
  return (
    <>
   
      <Router>
      
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/privacyPolicy" element={<Policy />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
       
      </Router>
    </>
  );
}

export default App;
