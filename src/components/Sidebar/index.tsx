import { FaTimes } from "react-icons/fa";
import { navigations } from "../../data";
import Logo from "../Logo";
import "./Sidebar.css";
import { Link } from "@tanstack/react-router";

const Sidebar = ({
  openSidebar,
  onClose,
}: {
  openSidebar: boolean;
  onClose: () => void;
}) => {
  return (
    <>
      <div className={`sidebar ${openSidebar ? "visible" : ""}`}>
        <div className="sidebar__wrapper">
          <div className="flex__center top">
            <Logo />
            <button className="flex__center icon" onClick={onClose}>
              <FaTimes />
            </button>
          </div>
          <div className="middle navlinks">
            {" "}
            {navigations.map((nav, index) => (
              <Link
                to={nav.to}
                hash={nav.hash}
                hashScrollIntoView={{ behavior: "smooth", block: "start" }}
                key={index}
                className="navitem"
                onClick={onClose}
              >
                {nav.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
