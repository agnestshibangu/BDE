import React from 'react';
import Landingpage from "./components/Landingpage";
// import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Banderole from "./components/Banderole";
import Section from "./components/Section";
import Calendar from "./components/Calendar";
import Footer from "./components/Footer";
import Programme from "./components/Programme"

import '../src/Style/app.scss';

function App() {

  return (
    <div className="app">
     
      <Landingpage />
      {/* <Header /> */}
      <Banderole />

      <Section />
      <Programme />
      <Calendar /> 
      <Footer />
    </div>
  );
}

export default App;
