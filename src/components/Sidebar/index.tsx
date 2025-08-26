import { FaTimes } from "react-icons/fa";
import { navigations } from "../../data";
import Logo from "../Logo";
import "./Sidebar.css";

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
              <div
                onClick={onClose}
                // activeClass="active"
                key={index}
                className="navitem"
              >
                {nav.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
