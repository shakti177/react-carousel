import React from "react";
import Slider from "react-slick";
import "./Slider2.css";
import dataDB from "../../Data/Data";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Slider2 = () => {
  const PrevButton2 = ({ onClick }) => (
    <button onClick={onClick} className="custom-prev-button2">
      <FaArrowLeft color="white" />
    </button>
  );

  const NextButton2 = ({ onClick }) => (
    <button onClick={onClick} className="custom-next-button2">
      <FaArrowRight color="white" />
    </button>
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevButton2 />,
    nextArrow: <NextButton2 />,
  };

  return (
    <div className="main">
      <h2 className="headingmain"> Multiple items </h2>
      <Slider {...settings}>
        {dataDB.map((item) => (
          <div className="box">
            <img src={item.img} alt="" />

            <h3
              style={{
                textAlign: "center",
                fontSize: "20px",
              }}
            >
              {item.name}
            </h3>
            <p
              style={{
                textAlign: "center",
                fontSize: "15px",
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slider2;
