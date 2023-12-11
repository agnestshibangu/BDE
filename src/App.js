import React from "react";
import Carousel from "./components/Carousel"; // Fix the typo here
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";
import Landingpage from "./components/Landingpage";
import '../src/Style/app.scss';
import Navbar from "./components/Navbar";



function App() {
  return (
    <div className="app">
      <Landingpage />
      <Header />
      <Navbar />
      <Carousel />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
