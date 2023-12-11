import React from "react";
import '../Style/caroussel.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MonCarrousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <h2 className="top-leadership-title">Top leadership</h2>
      <Slider {...settings}>
        <div>
          {/* <h3>Slide 1</h3> */}
          <img className="imageca1" />
        </div>
        <div>
          {/* <h3>Slide 2</h3> */}
          <img className="imageca2" />
        </div>
        <div>
          {/* <h3>Slide 3</h3> */}
          <img className="imageca3" />
        </div>
        <div>
          {/* <h3>Slide 4</h3> */}
          <img className="imageca4" />
        </div>
        <div>
          {/* <h3>Slide 5</h3> */}
          <img className="imageca5" />
        </div>
        <div>
          {/* <h3>Slide 6</h3> */}
          <img className="imageca6" />
        </div>
      </Slider>
    </div>
  );
};

export default MonCarrousel;

