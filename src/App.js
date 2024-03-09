import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar'
import Home from './components/Home/home'
import About from './components/About/about'
import logo from './asset/comp.png'
import Contact from './components/contacts/contacts'
import Links from './components/Links/links'
import Skills from './components/Skills/skills'
import Footer from './components/Footer/footer'
import Prof from './asset/prof.jpg'
import Pro from './components/Projects/project'

const App = () =>{
  return(
    <>
    <Navbar/>
    <Home/>
    <img src={logo} alt='logo' className='log'/>
    <img src={Prof} alt='VENGATRAMANAN' className='profi'/>
    <About/>
    <Skills/>
    <Pro/>
    <Contact/>
    <Links/>
    <Footer/>
    
    </>
  )
}
  
export default App;
