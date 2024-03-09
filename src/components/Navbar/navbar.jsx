import React from 'react'
import './navbar.css'

//import {AiOutlineLaptop} from 'react-icons/ai'
//import {AiFillCloseCircle} from 'react-icons/ai'

const color={
  backgroundColor:'Brown',
}

function navbar() {
  return (
    <section style={color} classname="navbarsec">
      <div classname="header">
        <div classname="logodiv">
          <a href='' classname="logo">
             <h2>Personal Portfolio</h2>
          </a> 
        </div>
        <div className="navbar">
          <ul className="navlist">
            <li className="navli">
              <a href="#" className="navlink">Home</a>
            </li>
            <li className="navli">
              <a href="#" className="navlink">About</a>
            </li>
            <li className="navli">  
              <a href="#" className="navlink">Contact</a>
            </li>
            <li className="navli">
              <a href="#" className="navlink">Projects</a>
            </li>
            <li className="navli">
              <a href="https://drive.google.com/file/d/1THSy603OcrEqddiruL19NB9QF6BK5ACd/view?usp=sharing" className="navlink">Resume/CV</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default navbar