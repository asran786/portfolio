import { assets } from "../../src/assets/assets"
import "./main.css"

const Main = () => {
  return (
    <>
    <div className="main">
        <div className="img">
           <img src={assets.avtar} alt="" /> 
        </div>
        <div className="heading">
            <h1>Develop projects,  <span className="span">create content, share coding journey </span></h1>
            <p>Enthusiastic MERN Stack Developer with foundational experience in React, Node.js, Express.js and  MongoDB.
 Skilled in creating responsive web applications through internships and academic projects. Seeking to
contribute my expertise in a dynamic development environment</p>
        </div>
        <div className="btn">
            <button className="btn-1">Get In Touch</button>
            <button className="btn-2">Download CV</button>
        </div>
    </div>
    </>
  )
}

export default Main
