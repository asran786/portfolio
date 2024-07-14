import { assets } from "../../src/assets/assets";
import "./project.css";

const Project = () => {
  return (
    <div className="projects-div">
      <h1>Projects</h1>
      <div className="projects">
        <div className="projects-card-1">
          <div className="project-card">
            <a target="_blank" href="https://gemini-lovat.vercel.app/">
              <img src={assets.gemini} alt="" />
              <h2>Gemini Clone</h2>
            </a>
          </div>
          <div className="project-card">
            <a href="">
              <img src={assets.node} alt="" />
              <h2>Node.js</h2>
            </a>
          </div>
          <div className="project-card">
            <img src={assets.node} alt="" />
            <h2>Node.js</h2>
          </div>
          <div className="project-card">
         <a target="_blank" href="https://gemini-lovat.vercel.app/">
          <img src={assets.gemini} alt="" /> 
           <h2>Gemini Clone</h2>
            </a>
        </div>
        <div className="project-card">
           <a href="">
           <img src={assets.node} alt="" /> 
           <h2>Node.js</h2>
           </a>
        </div>
        <div className="project-card">
           <img src={assets.node} alt="" /> 
           <h2>Node.js</h2>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
