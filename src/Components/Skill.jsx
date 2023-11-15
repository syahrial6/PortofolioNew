import { FaReact, FaNodeJs } from "react-icons/fa6";
import { BiLogoJavascript, BiLogoTailwindCss } from "react-icons/bi";
import { SiChakraui, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import FadeLefttoRight from "../assets/Animation/FadeLefttoRight";

const Skill = () => {
  return (
    <div className="font-Poppins">
      <div className="flex items-center justify-center m-auto">
        <Navbar />
      </div>
      <FadeLefttoRight>
      <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-green-100">
        <div>
          <p className="text text-5xl text-utama font-bold font-Poppins text-center pt-32 py-12">
            My Experience
          </p>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 gap-8 px-5">
              <div className="bg-white rounded-2xl">
                <p className="text font-bold text-xl">2019</p>
                <div className="box w-52 h-1 bg-[#0da8e0] rounded-full mb-2 mt-1"></div>
                <p>
                  I&apos;m Studing in Tanjungpura Univercity, Engineering Faculty,
                  Informatics
                </p>
              </div>
              <div className="bg-white rounded-2xl">
                <p className="text font-bold text-xl">
                  08 / 2022 ● Studi Independent
                </p>
                <div className="box w-52 h-1 bg-[#0da8e0] rounded-full  mb-2 mt-1"></div>
                <p>
                  Increase My Knowledge About Front-End Web Developer in
                  Dicoding Indonesia, From This Course I Got Learning About
                  React JS And Soft Skill Management
                </p>
              </div>
              <div className="bg-white rounded-2xl">
                <p className="text font-bold text-xl">
                  01 / 2023 ● Develop Web Apps
                </p>
                <div className="box w-52 h-1 bg-[#0da8e0] rounded-full  mb-2 mt-1"></div>
                <p>
                  Apply What I&apos;ve Got In The Project, My Job Is Develop Web Apps
                  For Student In Al-Fityan Kubu Raya Record About Student
                  Memorizing Al-qur&apos;an
                </p>
              </div>
              <div className="bg-white rounded-2xl">
                <p className="text font-bold text-xl">
                  09 / 2023 ● Develop Web Apps
                </p>
                <div className="box w-52 h-1 bg-[#0da8e0] rounded-full  mb-2 mt-1"></div>
                <p>
                  Develop Web Apps Management Tanjungpura Univercity Stadium, My
                  responsibilities included overseeing UI/UX design,
                  implementing interactive features, and managing the overall
                  project.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center m-auto py-16">
          <FaReact className="hover:text-blue-500 text-4xl lg:text-6xl" />
          <FaNodeJs className="hover:text-green-600 text-4xl lg:text-6xl" />
          <BiLogoJavascript className="hover:text-yellow-400 text-4xl lg:text-6xl" />{" "}
          <BiLogoTailwindCss className="hover:text-blue-500 text-4xl lg:text-6xl" />{" "}
          <SiChakraui className="hover:text-green-300 text-4xl lg:text-6xl" />
          <SiMysql className="hover:text-blue-500 text-4xl lg:text-6xl" />
        </div>
      </div>
      </FadeLefttoRight>
    </div>
  );
};

export default Skill;
