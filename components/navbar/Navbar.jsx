import "./navbar.css"
import {assets} from "../../src/assets/assets"
import { CiMenuBurger } from "react-icons/ci";
import { useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [expand, setExpand] = useState(true)
  const list=useRef(null)
  const hamburger=useRef(null)
  const hamburger1=useRef(null)
  const navbar=()=>{
      list.current.classList.add("side-navbar")
      hamburger.current.classList.add("ham-burger-2")
      hamburger1.current.classList.add("ham-burger-cross")

  }
  const hide=()=>{
    list.current.classList.remove("side-navbar")
    hamburger.current.classList.remove("ham-burger-2")
    hamburger1.current.classList.remove("ham-burger-cross")

  }
  return (
    <div className='navbar'>
      <img src={assets.avtar} alt="" />
     <div ref={list}  className="navbar-item">
     <div ref={hamburger1} onClick={hide}  className="ham-burger-2">
      <RxCross2 size="30px" />
      </div>
        <a href=""> <li>Home</li> </a>
        <a href=""> <li>Experience</li> </a>
        <a href=""> <li>Projects</li> </a>
        <a href=""> <li>Contact</li> </a>
      </div>
      <div ref={hamburger} className={`ham-burger-1 ${expand ? 'ham-burger-show':''}`}>
      < CiMenuBurger size="25px" onClick={navbar} />
      </div>
      
      
    </div>
  )
}

export default Navbar
