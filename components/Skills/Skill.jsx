import { assets } from '../../src/assets/assets'
import './skill.css'

const Skill = () => {
  return (
    <div className='skill-div'>
      <h1>Skill</h1> 
      <div className="skill">
        <div className="card-1">
        <div className="card">
           <img src={assets.react} alt="" /> 
           <h2>React</h2>
        </div>
        <div className="card">
           <img src={assets.node} alt="" /> 
           <h2>Node.js</h2>
        </div>
        </div>
        <div className="card-2">
        <div className="card">
           <img src={assets.express} alt="" /> 
           <h2>Express.js</h2>
        </div>
        <div className="card">
           <img src={assets.mongo} alt="" /> 
           <h2>Mongo DB</h2>
        </div>
        </div>
       

        <div className="language">
       <div className="card-3">
       <div className="card card-js">
           <img src={assets.js} alt="" /> 
           <h2>Javascript</h2>
        </div>
        <div className="card">
           <img src={assets.java} alt="" /> 
           <h2>Java</h2>
        </div>
       </div>
       <div className="card-4">
       <div className="card">
           <img src={assets.sql} alt="" /> 
           <h2>MySql</h2>
        </div>
        <div className="card ">
           <img src={assets.git} alt="" /> 
           <h2>Git & GitHub</h2>
        </div>
       </div>
       
        </div>


      </div>
    </div>
  )
}

export default Skill
