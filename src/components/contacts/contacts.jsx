import React from 'react'

const co={
  marginTop:'300px',
  display:'flex',
  float:'right',
  marginRight:'70px',
}
const u ={
  marginTop:'-50px',
  marginRight:'-350px',

}
function contacts() {
  return (
    
    <section  style={co}>
      <h3 style={u}>CONTACT FORM</h3><br /><br />
      <div ><input style={{width:'450px', height:'40px'}}
        type="text"
        placeholder="Your name" 
      /><br/><br />
      <input style={{width:'450px', height:'40px'}} type="email" placeholder="Your email"
      /><br/><br />
      <textarea style={{width:'450px', height:'100px'}}
        placeholder="Your message"
      /><br/><br/>
      <button style={{width:'100px', height:'30px',border:'1px solid black', borderRadius:'6px',background:'brown',color:'white',cursor:'pointer'}} type="submit">Send</button>
      </div>
    </section>
  )
}

export default contacts