import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillMail} from 'react-icons/ai'
import {AiFillPhone} from 'react-icons/ai'

const lin = {
  marginTop:'260px',
  marginLeft:'60px'
}

function links() {
  return (
    <section style={lin}>
      <h3 style={{marginLeft:'120px'}}>PROFILES</h3> <br /><br />
      <div><AiFillLinkedin/>&nbsp;&nbsp;&nbsp; <a href="https://www.linkedin.com/">LinkedIn</a></div>
      <br />
      <div><AiFillGithub/>&nbsp;&nbsp;&nbsp; <a href="https://www.linkedin.com/">GitHub</a></div>
      <h3 style={{marginLeft:'120px', paddingTop:'30px'}}>PERSONALS</h3> <br /><br />
      <div><AiFillMail/>&nbsp;&nbsp;&nbsp; Vengatramanan81@gmail.com</div><br/>
      <div><AiFillPhone/>&nbsp;&nbsp;&nbsp; 9025394068</div>
    </section>
  )
}

export default links