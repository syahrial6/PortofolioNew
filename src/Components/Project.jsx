import project1 from "../assets/project1.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import Navbar from "./Navbar";
const Project = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex justify-center items-center m-auto">
      <Navbar />
      <div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="container lg:h-[100vh] bg-gradient-to-r from-purple-100 via-blue-100 to-green-100"
      >
        <div>
          <p className="text text-5xl font-Poppins font-bold text-center text-utama mt-16 py-12">
            My Projects
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{
              scale: 0.9,
              borderRadius: "100%",
            }}
          >
            <div className="mx-6">
              <div className="card card-compact max-w-sm bg-base-100 shadow-xl">
                <figure>
                  <img className="image" src={project1} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">TO DO LIST</h2>
                  <p>
                    Created To Do List For Management Your Activity, These
                    Project Is Train My Knowledge About React JS
                  </p>
                  <div className="card-actions justify-end">
                    <a
                      className="btn bg-utama text-white hover:text-utama"
                      href="https://todolist-ashen-xi.vercel.app/"
                      target="blank"
                    >
                      Detail
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{
              scale: 0.9,
              borderRadius: "100%",
            }}
          >
            <div className="mx-6">
              <div className="card card-compact max-w-sm bg-base-100 shadow-xl">
                <figure>
                  <img className="image" src={project3} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">AFISKU Recording Memorizing</h2>
                  <p>
                    Web Based Application For Recording Student Memorizing
                    Al-quran
                  </p>
                  <div className="card-actions justify-end">
                    <a
                      className="btn bg-utama text-white hover:text-utama"
                      href="https://todolist-ashen-xi.vercel.app/"
                      target="blank"
                    >
                      Detail
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{
              scale: 0.9,
              borderRadius: "100%",
            }}
          >
            <div className="mx-6">
              <div className="card card-compact max-w-sm bg-base-100 shadow-xl">
                <figure>
                  <img className="image" src={project4} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Web Apps Stadion UNTAN
                  </h2>
                  <p>Web Based Application Management UNTAN Stadium</p>
                  <div className="card-actions justify-end">
                    <a
                      className="btn bg-utama text-white hover:text-utama"
                      href="https://todolist-ashen-xi.vercel.app/"
                      target="blank"
                    >
                      Detail
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Project;
