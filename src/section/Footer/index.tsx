import Logo from "../../components/Logo";
import { footer } from "../../data";
import "./Footer.css";

const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <footer id="footer">
      <div className="overlay__div">
        <div className="container">
          <div className="column">
            <Logo />
            <p>
              To provide top-of-the-range finishes in homes and offices by
              delivering innovative and dependable ceiling and partitioning
              services tailored to meet the unique needs of each client.
            </p>
          </div>
          {footer.map((item, index) => (
            <div className="column" key={index}>
              <h4 className="title">{item.title}</h4>
              {item.routes.map((route, index) => {
                return (
                  <a href={route.href} className="route" key={index}>
                    {route.name}
                  </a>
                );
              })}
            </div>
          ))}
        </div>
        <div className="footer__bottom">
          <p>Copyright &copy; {year} - All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
