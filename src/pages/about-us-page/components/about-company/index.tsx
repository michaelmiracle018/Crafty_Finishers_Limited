import { Link, useRouter } from "@tanstack/react-router";
import "./AboutComapny.css";
import { PiPhone } from "react-icons/pi";

const AboutCompany = () => {
  const router = useRouter();
  console.log(router.state, "KKK");

  // useEffect(() => {
  //   const hash = window.location.hash;
  //   if (hash) {
  //     const el = document.querySelector(hash);
  //     if (el) el.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [router.state.location.key]);

  return (
    <div id="about-company">
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="content-column">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="title">About Company</span>
                  <h2>Crafty Finishers Limited</h2>
                </div>
                <div className="text">
                  Crafty Finishers Limited is a registered shop fitting and
                  interior finishing company incorporated on June 18, 2020.
                  Based in Ghana, the company specializes in residential and
                  commercial building finishes with a focus on quality
                  craftsmanship, modern aesthetics, and timely delivery.
                </div>
                <div className="text">
                  With years of collective experience in the construction and
                  interior finishing space, we pride ourselves on delivering
                  functional, elegant, and cost-effective solutions in areas
                  such as drywall partitions, acoustic ceilings, skimming,
                  painting, and installation of automatic doors. Whether working
                  on corporate spaces, hospitals, retail developments, or
                  residential homes, we bring the same level of dedication,
                  precision, and attention to detail that ensures client
                  satisfaction every time.
                </div>

                <div className="text">
                  <h1 style={{ marginBottom: "10px" }}>🎯 Our Vision</h1>
                  To become the preferred choice for ceiling and partition
                  services in Ghana, recognized for our commitment to quality
                  finishes, timely delivery, and cost-effective solutions.
                </div>
                <div className="text">
                  <h1 style={{ marginBottom: "10px" }}>🌟 Our Mission</h1>
                  To provide top-of-the-range finishes in homes and offices by
                  delivering innovative and dependable ceiling and partitioning
                  services tailored to meet the unique needs of each client.
                </div>
                <Link
                  to="."
                  className="flex__center btn primary"
                  style={{ width: "200px" }}
                >
                  Reach Us
                  <PiPhone />
                </Link>
              </div>
            </div>

            {/* <!-- Image Column --> */}
            <div className="image-column">
              <div className="inner-column wow fadeInLeft">
                <figure className="image-1">
                  <a href="#" className="lightbox-image" data-fancybox="images">
                    <img
                      src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg"
                      alt=""
                    />
                  </a>
                </figure>
                <figure className="image-2">
                  <a href="#" className="lightbox-image" data-fancybox="images">
                    <img
                      src="https://i.ibb.co/JvN0NVB/image-2-about.jpg"
                      alt=""
                    />
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutCompany;
