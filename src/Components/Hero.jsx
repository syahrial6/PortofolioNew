import hero from "../assets/foto.png";
import { FaHandsClapping } from "react-icons/fa6";

import KontakMe from "./KontakMe";
import Navbar from "./Navbar";
import FadeLefttoRight from "../assets/Animation/FadeLefttoRight";
import FadeRighttoLeft from "../assets/Animation/FadeRighttoLeft";

const Hero = () => {
  return (
    <div className="flex justify-center items-center m-auto font-Poppins">
      <Navbar />

      <div className="hero min-h-screen flex flex-col-reverse lg:flex-row justify-center items-center bg-gradient-to-r from-purple-100 via-blue-100 to-green-100">
        <FadeRighttoLeft>
          <div className="container ml-10">
            <div className="box w-52 h-1 bg-[#0da8e0] rounded-full mb-4"></div>
            <p className="text-4xl font-Poppins font-bold flex items-center">
              Hello, I&apos;m <FaHandsClapping color="#e6a800" />
            </p>
            <p className="text-5xl font-Poppins font-bold mt-5">
              Muhammad <span className="text-utama">Syahrial</span>
            </p>
            <p className="text-2xl font-Poppins font-bold mt-5">
              Front-End Web Developer
            </p>
            <KontakMe />
          </div>
        </FadeRighttoLeft>

        <FadeLefttoRight>
          <div className=" flex items-center justify-center m-auto">
            <img
              src={hero}
              className="max-w-md lg:w-96 w-72  mb-12 mt-24 lg:mr-16"
            />
          </div>
        </FadeLefttoRight>
      </div>
    </div>
  );
};

export default Hero;
