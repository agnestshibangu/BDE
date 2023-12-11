import React from "react";
import '../Style/landingpage.scss';
// import myImage from './path/to/your/soviet-communist-logo.jpg';

export default function Landingpage() {
    return (
        <div>
            
            <div className="landingpage-container">
            </div>
            <div className="overlay-dark"/>
            <div className="text-block">
                <h2 className="overlay-title">campagne 2023</h2>
                <p className="overlay-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique.</p>
            </div>
            
            <a class="scroll-block" href="#top-header" >
                <div class="chevron"></div>
                <div class="chevron"></div>
                <div class="chevron"></div>
            </a>

            {/* <div class="scroll-block">
                <div class="chevron"></div>
                <div class="chevron"></div>
                <div class="chevron"></div>
                <a class="scroll-down-text" href="#top-header" >Scroll down</a>
            </div> */}


        </div>
    
    )
}