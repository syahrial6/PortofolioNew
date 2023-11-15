import { useRef } from "react";
import { useInView } from "framer-motion";
import Navbar from "./Navbar";
import hero from "../assets/foto.png";
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex justify-center items-center m-auto bg-gradient-to-r lg:h-[100vh] h-full from-purple-100 via-blue-100 to-green-100">
      <Navbar />
      <div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="container mt-32 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 "
      >
        <img
          className="max-w-sm lg:w-1/2 w-72  mb-12 flex items-center justify-center m-auto"
          src={hero}
        ></img>
        <div>
          <div>
            <p className="text text-center text-4xl font-Poppins font-bold text-utama">
              About Me
            </p>
          </div>
          <div className="container">
            <p className="p-10 text-xl font-Poppins text-justify lg:text-center">
              Hello, I&apos;m Syahrial committed to continuously expanding my
              knowledge about frond end web developer while also learning about
              new technologies. I am profecient developing web with react JS.
              Very happy to be able to work with you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
