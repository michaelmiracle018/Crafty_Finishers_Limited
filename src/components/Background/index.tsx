import { motion } from "framer-motion";
import heroimg from "@/assets/heroimg.png";
import background from "@/assets/homeimg.webp";

import { slideUpVariants, zoomInVariants } from "@/animations/animation";
import "./Background.css";

interface HeroProps {
  backgroundImg?: string;
  displayBottomImage?: boolean;
  title: string;
  description: string;
  image?: string;
  buttons?: {
    label: string;
    variant?: "primary" | "outline";
    onClick?: () => void;
  }[];
}

export default function Background({
  backgroundImg = background,
  displayBottomImage,
  title,
  description,
  image = heroimg,
  buttons = [],
}: HeroProps) {
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
            {title}
          </motion.h1>

          <div className="hero-divider"></div>

          <p className="hero-description">{description}</p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className="hero-buttons"
          >
            {buttons.map((btn, index) => (
              <motion.button
                key={index}
                variants={zoomInVariants}
                className={
                  btn.variant === "outline" ? "btn-outline" : "btn-primary"
                }
                onClick={btn.onClick}
              >
                {btn.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
        {displayBottomImage && (
          <div className="hero-image-wrapper">
            <motion.img
              initial="hidden"
              whileInView="visible"
              variants={zoomInVariants}
              src={image}
              alt=""
              className="hero-image"
            />
          </div>
        )}
      </div>
    </div>
  );
}
