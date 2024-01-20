import React, { useState, useEffect } from 'react';

// import React from "react";
import '../Style/landingpage.scss';

export default function Landingpage() {

    const [scrolled, setScrolled] = useState(false);
    const [scrolledback, setScrolledback] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const threshold = 50;
        if (window.scrollY > threshold && !scrolled) {
          setScrolled(true);
        } else if (window.scrollY <= threshold && scrolled) {
          setScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        // Nettoyage : Retirez l'écouteur d'événements lorsque le composant est démonté
        window.removeEventListener('scroll', handleScroll);
      };
    }, [scrolled]); // Incluez 'scrolled' dans le tableau de dépendances pour éviter les avertissements ESLint
  
    document.addEventListener("DOMContentLoaded", function() {
        const scrollDiv = document.querySelector('.overlay-paragraph');
        const scrollDiv2 = document.querySelector('.overlay-title');
        let lastScrollTop = 0;
      
        window.addEventListener('scroll', function() {
          const st = window.pageYOffset || document.documentElement.scrollTop;
          const screenWidth = window.innerWidth;
      
          if (st > lastScrollTop) {
            // Scrolling down
            scrollDiv.style.transform = `translateY(-50%) translateX(${screenWidth}px)`;
            scrollDiv2.style.transform = `translateY(-50%) translateX(${screenWidth}px)`;
          } else {
            // Scrolling up
            scrollDiv.style.transform = 'translateY(-50%) translateX(10px)';
            scrollDiv2.style.transform = 'translateY(-50%) translateX(10px)';
          }
      
          lastScrollTop = st;
        });
      });
      

    return (
        <div>
            
            <div className="landingpage-container">
            </div>
            <div className={scrolled ? 'scrolled overlay-dark' : 'overlay-dark'}/>
            <div className='line' />
            <div className="text-block">
                <h2 className="overlay-title">Comité Constitué des Camarades Codeurs</h2>
                <p className="overlay-paragraph">ou “C4”, parce que notre liste, c’est de la bombe 🤪</p>
           
            </div>


        </div>
    
    )
}