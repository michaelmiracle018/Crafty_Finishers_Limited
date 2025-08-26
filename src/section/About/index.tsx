import { about } from "../../assets";
import { keypoints } from "../../data";
import "./About.css";
const About = () => {
  return (
    <section id="about">
      <div className="overlay__div">
        <div className="container">
          <div className="about__image">
            <img src={about} alt="" />
          </div>
          <div className="section__header">
            <h3 className="title">About Us</h3>
            <h1 className="sub__heading">
              Building Your Vision, Crafting Your Future
            </h1>
            <p className="description">
              At Confix, we turn your ideas into reality with expert
              craftsmanship and innovative solutions. From concept to
              completion, we’re dedicated to creating spaces that inspire and
              stand the test of time. Let’s build a future you can be proud of.
            </p>
            <div className="keypoints__container">
              {keypoints.map((keypoint, index) => (
                <div className="keypoint flex" key={index}>
                  <div className="flex__center primary icon">
                    <keypoint.icon size={24} color="blue" />
                  </div>
                  <h4 className="title">{keypoint.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
