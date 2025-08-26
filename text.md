import heroimg from "@/assets/heroimg.png";
import backgroundImg from "@/assets/homeimg.webp";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "@/animations/animation";
import "./Background.css";

const Background = () => {
  return (
    <div id="background">
      <div
        className="hero-container"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="hero-text"
        >
          <motion.h1 variants={slideUpVariants} className="hero-subtitle">
            ABOUT US
          </motion.h1>

          <div className="hero-divider"></div>

          <p className="hero-description">
            Crafty Finishers Limited is a registered shop fitting and interior
            finishing company incorporated on June 18, 2020. Based in Ghana, the
            company specializes in residential and commercial building finishes
            with a focus on quality craftsmanship, modern aesthetics, and timely
            delivery.
          </p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className="hero-buttons"
          >
            <motion.button variants={zoomInVariants} className="btn-primary">
              {/* <Link to="/about-us#about-company"></Link> */}
              READ MORE
            </motion.button>

            <motion.button variants={zoomInVariants} className="btn-outline">
              REACH US
            </motion.button>
          </motion.div>
        </motion.div>

        <div className="hero-image-wrapper">
          <motion.img
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            src={heroimg}
            alt="hero image"
            className="hero-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Background;
