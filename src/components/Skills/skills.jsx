import React from 'react'

const sec={
  marginTop:'-300px',
}
const sk={
  textAlign:'center',
  marginTop:'50px',
  float:'left'
}
const p={
  display:'flex',
  float:'left',
  fontSize:'20px',
  fontWeight:'700'
}
const c={
  display:'flex',
  float:'right',
  marginRight:'300px',
  marginTop:'50px',
  fontWeight:'500',
  fontSize:'20px'
}
const s={
  float:'right',
  marginRight:'250px'
}
const f={
  display:'flex',
  float:'right',
  marginRight:'250px',
  marginTop:'50px',
  fontWeight:'500',
  fontSize:'20px'
}

function skills() {
  return (
    <section style={sec}>
      <div className="sec">
        <h1 style={{ textAlign: "left" , paddingLeft:'200px'}}>SKILLS</h1>
        </div>
        <div  style={sk} className="skil">
        <p>
          <span style={p}>Python</span><br /><br />
          Used for creating Websites, Games and Software
        </p><br /><br />
        <p><span style={p}>React js</span><br /><br />
        Used to use and maintain, even for complex applications.
        </p><br /><br />
        <p>
          <span style={p}>Web Designing</span><br /><br />
          Creating a website using HTML5/CSS3 with Bootstrap framework
        </p><br /><br />
        <p>
          <span style={p}>UI designer</span><br /><br />
          Designing the UI of websites and mobile apps
        </p>
        </div>
        <div className="cert">
        <h1 style={{ textAlign: "right" , paddingRight:'200px',marginTop:'-30px'}}>COURSES</h1>
          <p>
            <span style={c}>Responsible Web Design</span>
            <p style={s}>Offered by "Freecodecamp"</p>
          </p>
          <br /><br />
          <p>
            <span style={f}>Microsoft Azure Fundamentals</span>
            <p style={s}>Offered by "Microsoft"</p>
          </p>
          <br /><br />
          <p>
            <span style={{display:'flex',float:'right',marginRight:'345px',marginTop:'50px',fontWeight:'500',fontSize:'20px'}}>Javascript Essentials</span>
            <p style={s}>Offered by "Simplilearn"</p>
          </p>
          <br /><br />
          <p>
            <span style={{display:'flex',float:'right',marginRight:'355px',marginTop:'50px',fontWeight:'500',fontSize:'20px'}}>Web Development</span>
            <p style={s}>Offered by "SmartKnower"</p>
          </p>
          <br /><br />


          <h5 style={{marginTop:'400px',marginLeft:'30px',fontWeight:'2000',fontSize:'30px'}}>My Projects</h5>

        </div>
    </section>
  )
}

export default skills

