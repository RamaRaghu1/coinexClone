import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../assets/banner1.png";
import img2 from "../assets/banner2.png";
import img3 from "../assets/banner3.png";
import img4 from "../assets/banner4.png";
import img5 from "../assets/banner5.png";
import img6 from "../assets/banner6.png";
import img7 from "../assets/banner7.png";
import img8 from "../assets/banner8.png";
import img9 from "../assets/banner9.png";

const SliderComp = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  const images = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 4,
      img: img4,
    },
    {
      id: 5,
      img: img5,
    },
    {
      id: 6,
      img: img6,
    },
    {
      id: 7,
      img: img7,
    },
    {
      id: 8,
      img: img8,
    },
    {
      id: 9,
      img: img9,
    },
  ];

  return (
    <div className="mx-32 ">
      <Carousel
      showDots={false}
      responsive={responsive}
      autoPlaySpeed={1000}
      customTransition="all .5"
      transitionDuration={5000}
      autoPlay={true}
    className=""
      >
     
        {images.map((item) => {
         return (
           
            <img src={item.img} className=" w-[400px] h-[152px] rounded-lg"/>
          
         )
        })}
      </Carousel>
    </div>
  );
};

export default SliderComp;
