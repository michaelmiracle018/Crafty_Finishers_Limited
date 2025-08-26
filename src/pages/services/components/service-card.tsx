import { portfolio1 } from "@/assets";
import "./ServiceCard.css";
import { servicesCard } from "@/data";

interface Props {
  id: string;
  image: string;
  title: string;
}

const Card = ({ title }: Props) => {
  return (
    <div id="service-card">
      <div className="card">
        <a href="#">
          <img className="card-img" src={portfolio1} alt="Tech image" />
        </a>
        <div className="card-body">
          <a href="#">
            <h5 className="card-title">{title}</h5>
          </a>
          <p className="card-text">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </div>
  );
};

export const ServiceCard = () => {
  return (
    <div className="flex__center container">
      <div id="services-grid-container">
        {servicesCard.map((item) => {
          return (
            <div key={item.id}>
              <Card {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
