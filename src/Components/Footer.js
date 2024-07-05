import React from "react";
import logo from "../assets/logo-black.png";
import {
  FaFacebook,
  FaReddit,
  FaTwitter,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="h-[70vh] bg-light-grey">
      <div className="w-[80vw] mx-auto flex p-8">
        <div className="w-[40%] h-full  flex flex-col justify-between">
          <div className="h-96">
            <img src={logo} className=" h-14" />
            <p className="text-xl text-grey">Making Crypto Trading Easier</p>
          </div>
          <div className="flex gap-4">
            <FaFacebook className="" size={30} fill="blue" />
            <FaReddit size={30} fill="#ED622B" />
            <FaTwitter size={30} />
            <FaInstagramSquare size={30} fill="#FE0878" />
            <FaLinkedin size={30} fill="#4FAAF7" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
