import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUser,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import "./ContactUsOn.css";

const ContactUsOn: React.FC = () => {
  return (
    <section id="contact-us-on" className="container">
      <div className="contact-section">
        {/* Location */}
        <div className="contact-card">
          <div className="contact-icon">
            <FaMapMarkerAlt />
          </div>
          <div className="contact-info">
            <h3>Location</h3>
            <p>Weija, Choice 39939 street</p>
            <p>
              <strong>GPS Address:</strong> GE-032-9838
            </p>
          </div>
        </div>

        {/* Call Us */}
        <div className="contact-card">
          <div className="contact-icon">
            <FaPhoneAlt />
          </div>
          <div className="contact-info">
            <h3>Call Us</h3>
            <p>
              <strong>Office:</strong>{" "}
              <a href="tel:+233248047240">+2337883737738</a>
            </p>
            <p>
              <strong>Mobile:</strong>{" "}
              <a href="tel:0200629574">020 099388388</a>
            </p>
            <p>
              <strong>WhatsApp:</strong>{" "}
              <a href="https://wa.me/233248047240">+83993993999</a>
            </p>
          </div>
        </div>

        {/* Social */}
        <div className="contact-card">
          <div className="contact-icon">
            <FaUser />
          </div>
          <div className="contact-info">
            <h3>Social Connection</h3>
            <div className="social-icons">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaYoutube />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="contact-card">
          <div className="contact-icon">
            <FaEnvelope />
          </div>
          <div className="contact-info">
            <h3>Email</h3>
            <p>
              <a href="mailto:info@dalionroyal.com">info@lorem.com</a>
            </p>
            <p>
              <a href="mailto:dalionroyal@gmail.com">lorem@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsOn;
