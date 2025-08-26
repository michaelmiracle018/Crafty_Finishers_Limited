import "./Hero.css";
import Achievement from "../Achievement";

const Hero = () => {
  return (
    <section id="hero" className="">
      <div className="overlay__div">
        <div className="container">
          <div className="column left">
            <div className="hero__content">
              <h1 className="heading">Quality you can trust</h1>
              <p className="description">
                We are dedicated to delivering top-quality construction services
                with a focus on innovation, sustainability, and client
                satisfaction. With over 25 years of experience, we bring
                expertise and precision to every project, helping shape the
                future through excellence in design and craftsmanship.
              </p>
            </div>
            <Achievement />
            <div className="flex__center buttons__wrapper">
              <div className="btn">Projects</div>
              {/* <div className="btn flex__center primary">
                Get a quote <FaArrowTurnDown />
              </div> */}
            </div>
          </div>
          {/* <div className="column hero_image-container object__contain">
            <img src={crane} alt="" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
