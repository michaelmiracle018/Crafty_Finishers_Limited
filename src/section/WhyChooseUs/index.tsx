import { Swiper, SwiperSlide } from "swiper/react";
import { whyChooseUs } from "../../data";
import { Autoplay } from "swiper/modules";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us">
      <div className="conatiner">
        <Swiper
          grabCursor={true}
          slidesPerView={1}
          loop={true}
          spaceBetween={15}
          autoplay={true}
          speed={5000}
          modules={[Autoplay]}
          breakpoints={{
            350: {
              slidesPerView: 2,
            },
            768: { slidesPerView: 3 },
            1000: { slidesPerView: 4 },
          }}
          className="swiper"
        >
          {whyChooseUs.map((why, index) => (
            <SwiperSlide className="why__item flex" key={index}>
              <div className="flex__center primary icon">
                <why.icon size={24} color="blue" />
              </div>
              <div className="details">
                <h4 className="title">{why.title}</h4>
                <p className="muted">{why.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WhyChooseUs;
