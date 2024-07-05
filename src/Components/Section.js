import React from "react";
import image from "../assets/trip_bg.png";

const Section = () => {
  return (
    <div className="font-font1 flex flex-col items-center justify-center ">
      {/* <h2 className='text-3xl text-black font-semibold'>On CoinEx, Trade With Safety and Convenience</h2>
      <p className=' text-grey text-xl font-semibold'>Trusted by 5 million global users</p> */}
<div className="w-screen bg-light h-[50vh]">

</div>

      <div className="w-screen">
        <div className="h-[40vh] w-screen ml-[27%] mt-12 relative"
         style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat:`no-repeat`,
          backgroundSize: `800px 200px`,
         padding:'auto'
        }}
        >
          <div className="text-center justify-center  flex flex-col items-center absolute top-16 left-36 ">
          <h2 className="text-3xl text-black font-semibold py-4">Explore the Crypto World with CoinEx</h2>
            <button className=" rounded-[30px] px-8 h-12 bg-dark text-center text-lg m-0 text-white ">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
