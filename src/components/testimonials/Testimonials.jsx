import React from 'react'
import "../styles/styles.css"
const Testimonials = () => {
  return (
    <div>
      <div className="p" style={{ display: "flex", width: "100%", justifyContent: "center" }}>
  <div className="testimonials">
    <div className="test-leftpane">
      <h3>TESTIMONIALS</h3>
      <h1>What people say</h1>
      <h1>about our blog</h1>

      <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
      <h4>Esse quasi nostrum vero perferendis iure nulla ullam</h4>
    </div>
    <div className="test-rightpane">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        <br />
        Doloremque possimus neque incidunt porro autem, beatae ipsum
        <br />
        assumenda, soluta deleniti modi quam consequuntur
        <br />
        ipsam at suscipit corrupti eum consequatur, magni blanditiis.
      </p>

      <div className="tests">
        <div className="test-name">
          <img src="../../assets/Client-First - IMAGES/Image.svg" alt="" />
          <h3 style={{ fontWeight: 500 }}>Jonathan Valem</h3>
          <h6>New York, USA</h6>
        </div>
        <div className="testrnl">
          <i className="fa-solid fa-arrow-left"></i>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Testimonials
