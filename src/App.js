import React from 'react';
import Landingpage from "./components/Landingpage";
// import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Banderole from "./components/Banderole";
import Section from "./components/Section";
import Calendar from "./components/Calendar";
import Footer from "./components/Footer";
import Programme from "./components/Programme";
import { Helmet } from 'react-helmet';
import logoImage from './images/leaders/logo.webp';

import '../src/Style/app.scss';

function App () {

  const jsonData = {
    siteName: "votre futur BDE"
  };

  return (
    <div className="app">
       <Helmet>
        <title>{jsonData.siteName}</title>
        <link rel="icon" href={logoImage} ></link>
      </Helmet>
     
      <Landingpage />
      <Banderole />

      <Section />
      <Programme />
      <Calendar /> 
      <Footer />
    </div>
  );
}

export default App;
