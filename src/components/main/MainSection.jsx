import React from "react";
import "../styles/styles.css"
const MainSection= () => {
  return (
    <section>
      <div className="below-nav">
        <img
          src="../../assets/Client-First - IMAGES/man-in-black-suit-wearing-eye-glasses-sitting-on-gray-sofa-using-macbook-3772622.svg"
          alt=""
          style={{ width: "100%", height: "70%" }}
        />
        <div className="onimg">
          <h2>POSTED ON STARTUP</h2>
          <h1>Step by step guide to choosing</h1>
          <h1>GREAT FONT PAIRS</h1>
          <h3>
            <span style={{ color: "#FFD050" }}>By James West</span> | May 23, 2022
          </h3>
          <br />
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum architecto
          </h3>
          <h3>ratione ea minima vel ullam nihil consequuntur sa</h3>
          <button>Read More
            <img src="../../assets/Client-First - icons/Arrow 1.svg" alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
