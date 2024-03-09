import React from 'react'
import './about.css'

const styles={
  backgroundColor:'white',
  fontSize:'30px',
  marginTop:'200px',
  float:'right',
  marginRight:'200px'
}
const he={
  backgroundColor:'white',
  fontSize:'20px',
  marginTop:'50px',
  float:'right',
  marginRight:'100px'
}


function about() {
  return (
    <section classname='about'>
      <div classname='myself'>
        <h2 style={styles} classname="he">ABOUT MYSELF</h2>
        <h4 style={he} classname="hes">A person with a curiosity to learn something new for each and everyday.<br />
          To enhance my professional skills , capabillites and knowledge in an <br />organisation which recoganizes the value of my work.
        </h4><br/>
        <br/>
        
        <a href="https://drive.google.com/file/d/1THSy603OcrEqddiruL19NB9QF6BK5ACd/view?usp=sharing"><button style={{ width: "200px", height: "60px",background:'brown',color:'white', marginLeft:'100px', border:'1px solid black' ,borderRadius:'10px',margin:'475px',marginTop:'20px', cursor:'pointer'}}  type="submit">Resume</button></a>
      </div>
    </section>
  )
}

export default about