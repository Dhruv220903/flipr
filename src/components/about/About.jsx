import React from "react";
import "../styles/styles.css"
const About = () => {
  return (
    <section>
      <div className="About">
        <div className="about-left">
          <h4>ABOUT US</h4>
          <br />
          <h1 style={{ fontSize: "xx-large" }}>
            We are a community of
          </h1>
          <h1 style={{ fontSize: "xx-large" }}>content writers who share their</h1>
          <h1 style={{ fontSize: "xx-large" }}>Learnings</h1>
          <br />
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa atque officia at possimus incidunt nostrum,</h5>
          <h5>doloremque voluptas eos amet vitae rerum aliquam deleniti? Impedit ducimus corrupti nihil iure eveniet labore.</h5>
          <h4 style={{ color: "#592EA9" }}>Read More &gt;</h4>
        </div>
        <div className="about-right">
          <h4>OUR MISSION</h4>
          <br />
          <h1>Creating valuable content for</h1>
          <h1>creatives around the world</h1>
          <br />
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa atque officia at possimus incidunt nostrum,</h5>
          <h5>doloremque voluptas eos amet vitae rerum aliquam deleniti? Impedit ducimus corrupti nihil iure eveniet labore.</h5>
          <h5>doloremque voluptas eos amet vitae rerum aliquam deleniti? Impedit ducimus corrupti nihil iure eveniet labore.</h5>
          <h5>doloremque voluptas eos amet vitae rerum aliquam deleniti? Impedit ducimus corrupti nihil iure eveniet labore.</h5>
        </div>
      </div>
    </section>
  );
};

export default About;
