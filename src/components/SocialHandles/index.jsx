import { socialHandles } from "../../data"
import "./SocialHandles.css"

const SocialHandles = () => {
  return (
    <div className="flex social__handles">
        {socialHandles.map((handle, index) => (
            <a href={handle.link} className="flex__center" key={index} target="_blank" >
                {handle.icon}
            </a>
        ))}
    </div>
  )
}

export default SocialHandles