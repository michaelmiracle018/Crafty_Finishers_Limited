import { useEffect, useState } from "react"
import "./Achievement.css"
import ReactOdometer from "react-odometerjs"
import "odometer/themes/odometer-theme-default.css"
const Achievement = () => {
  const [projects, setProjects] = useState(0)
  const [satisfaction, setSatisfaction] = useState(0)
  const [experience, setExperience] = useState(0)

  useEffect(() => {
  const timeout =  setTimeout(() => {
      setProjects(700)
      setSatisfaction(95)
      setExperience(25)
    }, 1000)
    return () => {
      clearTimeout(timeout)
    }
  },[])

  return (
    <div className="achievements">
      {/* card start */}
      <div className="achievement__card">
        <h3 className="title">Completed over</h3>
        <div className="flex">
          <ReactOdometer
            value={projects}
            className="heading"
          />
          <h1 className="heading">+</h1> 
        </div>
        <p>Project Accros Diverse Sectors </p>
      </div>
      {/* card end */}

      {/* card start */}
      <div className="achievement__card">
        <h3 className="title">Achieved</h3>
        <div className="flex">
          <ReactOdometer
            value={satisfaction}
            className="heading"
          />
          <h1 className="heading">+</h1> 
        </div>
        <p>Client Satisfaction Rate</p>
      </div>
      {/* card end */}

      {/* card start */}
      <div className="achievement__card">
        <h3 className="title">Over</h3>
        <div className="flex">
          <ReactOdometer
            value={experience}
            className="heading"
          />
          <h1 className="heading">+</h1> 
        </div>
        <p>Years of Operations</p>
      </div>
      {/* card end */}
    </div>
  )
}

export default Achievement