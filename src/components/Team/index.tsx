import "./Team.css";
import { FaArrowRight } from "react-icons/fa";
import { teamMembers } from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Team = () => {
  return (
    <section id="team">
      <div className="container">
        <div className="section__header">
          <h3 className="title">Meet Our Expert</h3>
          <h3 className="sub__heading">Building with Excellence</h3>
          <p className="description">
            Meet the experts who bring excellence and innovation to every
            project. Get to know our dedicated team making your vision a
            reality.
          </p>
          <div>
            Let's Talk Now <FaArrowRight />
          </div>
        </div>
        <div>
          <Swiper
            grabCursor={true}
            slidesPerView={1}
            loop={true}
            spaceBetween={15}
            autoplay={true}
            speed={5000}
            modules={[Autoplay]}
            breakpoints={{
              600: { slidesPerView: 2 },
            }}
            className="members__container"
          >
            {teamMembers.map((item, index) => (
              <SwiperSlide className="member" key={index}>
                <div className="image__container">
                  <img src={item.image} alt={item.fullName} />
                </div>
                <div className="details">
                  <h4>{item.fullName}</h4>
                  <p className="muted">{item.title}</p>
                </div>
                <div className="flex__center social__container">
                  {item.socialMedias.map((social, index) => (
                    <a
                      href={social.href}
                      target="_blank"
                      className="flex__center icon"
                      key={index}
                    >
                      <social.icon size={24} color="blue" />
                    </a>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Team;
