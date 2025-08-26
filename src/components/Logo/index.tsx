import { Link } from "@tanstack/react-router";
import { company_logo } from "../../assets";
import "./logo.css";
const Logo = () => {
  return (
    <div className="flex__center logo_container">
      <Link to="/" className="logo">
        <img src={company_logo} alt="Logo" />
      </Link>
      {/* <h2>
        Can <span className="text__gradient">Fix</span> it?
      </h2> */}
    </div>
  );
};

export default Logo;
