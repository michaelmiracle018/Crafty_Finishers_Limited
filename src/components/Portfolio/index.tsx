import { portfolio } from "../../data"
import "./Portfolio.css"

const Portfolio = () => {
  return (
    <section id="portfolio">
        <div className="container">
<div className="section__header">
    <h3 className="sub__heading">
        Crafting Spaces, Building Dreams
    </h3>
    <p className="description">Explore our portfolio to see how we turn visions into high-quality, inspiring spaces, from luxury homes to commercial buildings.</p>
</div>
<div className="portfolio__container">
    {portfolio.map((item,index) => {
        return <div className=" portfolio" key={index}>
            <div className="image__container">
                <img src={item.image} alt={item.title} />
            </div>
            <div className="details">
                <h4 className="title">{item.title}</h4>
                  <p className="line__clamp__2 description">{item.description}</p>
                  <div className="flex date__category">
                    <p className="date">{item.date}</p>
                    <p>{item.category}</p>
                  </div>
            </div>

        </div>
    })}
</div>
        </div>

    </section>
  )
}

export default Portfolio