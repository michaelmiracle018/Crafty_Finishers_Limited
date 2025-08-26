import "./Navbar.css";
import Logo from "../components/Logo";
import { navigations } from "../data";
import SocialHandles from "../components/SocialHandles";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import useNavbar from "../hooks/useNavbar";
import { Link } from "@tanstack/react-router";
import { PiPhone } from "react-icons/pi";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { showNavbar } = useNavbar();

  return (
    <>
      <Sidebar
        openSidebar={openSidebar}
        onClose={() => setOpenSidebar(false)}
      />

      <nav className={`navbar flex__center ${showNavbar ? "drop" : ""}`}>
        <Logo />
        <div className="navbar__links">
          {navigations.map((nav, index) => (
            <Link
              to={nav.to}
              hash={nav.hash}
              hashScrollIntoView={{ behavior: "smooth", block: "start" }}
              key={index}
              className="nav__item"
            >
              {nav.label}
            </Link>
          ))}
        </div>
        <SocialHandles />
        <div className="flex__center">
          <Link
            to="/contact-us"
            hash="#contact-us-on"
            hashScrollIntoView={{ behavior: "smooth", block: "start" }}
            className="flex__center btn primary"
          >
            Reach Us
            <PiPhone />
          </Link>
          <button
            onClick={() => setOpenSidebar(!openSidebar)}
            className="flex__center icon menu__btn"
          >
            <FiMenu />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
