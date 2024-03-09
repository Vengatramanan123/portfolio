import React from 'react'

function project() {
  return (
    <div className='ma' >
      
      <div className='card1' style={{backgroundColor:'brown', marginTop:'60px',width:'350px',height:'250px',marginLeft:'30px',padding:'50px',borderRadius:'20px',color:'white',fontWeight:'500'}}>
        <span>Simple Portfolio</span><br /><br />
        <p> A sample webpage of my resume using HTML,CSS and JAVASCRIPT
          <br /><br /><a href="http://vengatramanan.000webhostapp.com">Click Here</a>
        </p>
      </div>
      <div className='card1' style={{backgroundColor:'brown', marginTop:'-250px',width:'350px',height:'250px',marginLeft:'480px',padding:'50px',borderRadius:'20px',color:'white',fontWeight:'500'}}>
        <span>Weather Forecaster</span><br /><br />
        <p> Using API , It will show the "Current weather" of your location
          <br /><br /><a href="">Click Here</a>
        </p>
        
        </div>
        <div className='card1' style={{backgroundColor:'brown', marginTop:'-250px',width:'350px',height:'250px',marginLeft:'930px',padding:'50px',borderRadius:'20px',color:'white',fontWeight:'500'}}>
        <span>Smart Kings Web Application</span><br /><br />
        <p> A Web application for simply the work of the staffs and students.
        <br /><br /><a href="">Click Here</a>
        </p>
        </div>
      </div>
    
  )
}

export default project