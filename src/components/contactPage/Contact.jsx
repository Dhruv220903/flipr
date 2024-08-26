import React from 'react'
import "../styles/styles.css"
const Contact = () => {
  return (
    <div style={{textAlign:"center"}}>
      <div className="text" style={{textAlign:"center",padding:"10rem", paddingTop:"5rem" ,paddingBottom:"4rem"}}>
        <h4>Contact us</h4>
        <h1>Let's start a Conversation</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit porro, provident eius magnam aliquam, dignissimos voluptates similique quae nam tenetur eveniet natus illo. Tenetur sequi, sint quos molestias eius ipsam?</p>
      </div>
      <div className="cont" style={{width:"100%",display:'flex',flexDirection:'column',alignItems:'center',justifyContent:"center"}} > 
      <div className="timings" style={{padding:"4rem",width:'70% ',backgroundColor:'#592EA9', display:'flex',justifyContent:'space-evenly'}}>
        <div className="t-left" >
          <h5 style={{color:"#F4F4F4",fontFamily:"Inter" ,fontWeight:'100'}}>Working Hours</h5>
          <br />
          <hr />
          <br />
          <h3 style={{color:"#F4F4F4",fontFamily:"Sen",fontWeight:'500'}} >Monday To Friday</h3>
          <h3 style={{color:"#F4F4F4",fontFamily:"Sen",fontWeight:'500'}}>9:00 AM to 8:00 PM</h3>
          <h5 style={{color:"#F4F4F4",fontFamily:"Inter" ,fontWeight:'100'}}>Our Support team is available 24/7</h5>
        </div>
        <div className='t-right'>
        <h5 style={{color:"#F4F4F4",fontFamily:"Inter" ,fontWeight:'100'}}>Contact Us</h5>
        <br />
        <hr />
        <br />
        <h3 style={{color:"#F4F4F4",fontFamily:"Sen",fontWeight:'500'}} >020 9999 0000</h3>
        <h5 style={{color:"#F4F4F4",fontFamily:"Inter" ,fontWeight:'100'}}>hello@notmail.com</h5>
        
        </div>

      </div>
      <div className="form" style={{display:'flex', flexDirection:'column'}}>
        <input type="text" name="" id="" placeholder='Full Name' />
        <input type="text" name="" id="" placeholder='Your Email' />
        <input type="text" name="" id="" placeholder='Query related' />
        <input type="text" name="" id="" placeholder='Message' style={{padding:"4rem 24rem",
    marginTop:" 1rem"}}/>
        <button>Send Message</button>

      </div>
      </div>
    </div>
  )
}

export default Contact
