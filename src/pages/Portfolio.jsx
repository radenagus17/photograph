import React, { useContext } from "react";
// import images
import Image1 from "../assets/img/portfolio/1.png";
import Image2 from "../assets/img/portfolio/2.png";
import Image3 from "../assets/img/portfolio/3.png";
import Image4 from "../assets/img/portfolio/4.png";
// import linkg
import { Link } from "react-router-dom";
// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section initial={{ opacity: 0, y: "100%" }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: "100%" }} transition={transition1} className="section">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            transition={transition1}
            className="flex flex-col items-center lg:items-start"
          >
            <h1 className="h1">Portfolio</h1>
            <p className="mb-12 max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <b>Eligendi fuga incidunt</b> ea obcaecati nisi facilis! Et, deleniti libero? Ab ea rerum sed natus incidunt enim praesentium, ducimus nostrum nesciunt eveniet.
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque amet illum commodi vitae eum saepe.
            </p>
            <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
              Hire me
            </Link>
          </motion.div>
          {/* images grid */}
          <div className="grid grid-cols-2 lg:gap-2" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            {/* image */}
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500" src={Image1} alt="" />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500" src={Image2} alt="" />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500" src={Image3} alt="" />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500" src={Image4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
