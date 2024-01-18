import React, { useState } from 'react';
import '../Style/caroussel.scss';
import data from '../data';

export default function ModalContent() {
  const [people, setPeople] = useState(data);
  const circle = 'circle';

  const [activeSlideId, setActiveSlideId] = useState(1);
  const [activeSlideIllustration, setActiveSlideIllustration] = useState(1);
  const [activeSlideBio, setActiveSlideBio] = useState(1);


  const handleSlideClick = (slideNumber, illustration, bio) => {
    setActiveSlideId(slideNumber);
    setActiveSlideIllustration(illustration);
    setActiveSlideBio(bio);
  };


  return (
    <div>

      <div class="void" id="void">
              <div class="crop">
              <div class="overlay"></div>

              <ul id="card-list" style={{'--count': 6}}>
                  <li><div class="card"><a href=""><span class="model-name">Gretel-ACTGAN</span><span>Model for generating highly dimensional, mostly numeric, tabular data</span></a></div></li>
                  <li><div class="card"><a href=""><span class="model-name">Gretel-ACTGAN</span><span>Model for generating highly dimensional, mostly numeric, tabular data</span></a></div></li>
                  <li><div class="card"><a href=""><span class="model-name">Gretel-ACTGAN</span><span>Model for generating highly dimensional, mostly numeric, tabular data</span></a></div></li>
                  <li><div class="card"><a href=""><span class="model-name">Gretel-ACTGAN</span><span>Model for generating highly dimensional, mostly numeric, tabular data</span></a></div></li>
                  <li><div class="card"><a href=""><span class="model-name">Gretel-ACTGAN</span><span>Model for generating highly dimensional, mostly numeric, tabular data</span></a></div></li>
                          <li><div class="card"><a href=""><span class="model-name">Gretel-ACTGAN</span><span>Model for generating highly dimensional, mostly numeric, tabular data</span></a></div></li>
              </ul>
              
              <div class="last-circle"></div>
              <div class="second-circle"></div>
              </div>
              <div class="mask"></div>
              <div class="center-circle"></div>
      </div>
      
    
    </div>
  )
}
