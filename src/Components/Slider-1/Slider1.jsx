import React from "react";
import "./Slider1.css";
import dataDB from "../../Data/Data.js";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Slider1 = () => {
  const PrevButton = ({ onClick }) => (
    <button onClick={onClick} className="custom-prev-button">
      <FaArrowLeft color="white" />
    </button>
  );
  
  const NextButton = ({ onClick }) => (
    <button onClick={onClick} className="custom-next-button">
      <FaArrowRight color="white" />
    </button>
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
  };

  return (
    <div>
      <div className="mainContainer">
        <div className="container">
          <div className="heading">
            <h1>
              <span>Automobile </span>services
            </h1>
          </div>
          {/* <div className="sliderContainer"> */}
          <Slider {...settings}>
            {dataDB.map((item) => (
              <div className="slider-box">
                <div className="img-container">
                  <img src={item.img} alt="" />
                </div>
                <h2
                  style={{
                    textAlign: "center",
                    fontWeight: 600,
                    fontSize: "20px",
                  }}
                >
                  {item.name}
                </h2>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "13px",
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </Slider>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Slider1;
