import "./Services.css";
import { services } from "../../data";

const Services = () => {
  return (
    <section id="services">
      <div className="overlay__div">
        <div className="container">
          <div className="grid">
            <div className="section__header">
              <h3 className="sub__heading">Plan Your Dream Project with Us</h3>
              <p className="muted description">
                Ready to bring your vision to life? Our expert team offers
                personalized consultations to guide you through every step—from
                design to budget and beyond. Let’s lay the groundwork for your
                next big project. Schedule your consultation today!
              </p>
              <div className="btn primary btn__service">Call Us</div>
            </div>
            {/* <div className="object__contain">
              <img src={sketch} alt="Sketch" />
            </div> */}
          </div>
          {/* Grid end */}
          <div className="services grid">
            {services.map((service, index) => {
              return (
                <div className="service" key={index}>
                  <div className="top flex">
                    <div className="flex__center icon">
                      <service.icon size={24} color="blue" />
                    </div>
                    <h4 className="title">{service.title}</h4>
                  </div>
                  <div className="middle">
                    <p className="description">{service.description}</p>
                  </div>
                  <div className="bottom flex">
                    <div className="btn">Reach Out</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
