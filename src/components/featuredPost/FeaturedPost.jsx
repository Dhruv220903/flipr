import React from "react";
import "../styles/styles.css"

const FeaturedPost = () => {
  return (
    <section>
      <div className="bel-main">
        <div className="left-pane">
          <h1>Featured Post</h1>
          <img
            src="./assets/Client-First - IMAGES/white-concrete-building-1838640.svg"
            alt=""
            style={{ width: "90%", marginTop: "70px" }}
          />
          <h5>By John Does | May 23, 2022</h5>
          <br />
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <h1>Aliquam alias ut eos fugit! Et, laboriosam cum</h1>
          <br />
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam alias</h5>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam alias</h5>
          <br />
          <button>Read More
            <img src="./assets/Client-First - icons/Arrow 1.svg" alt="" />
          </button>
        </div>

        <div className="right-pane">
          <br />
          <h1>All Post</h1>
          <ul style={{ listStyle: "none" }}>
            <li>
              <h5>By John Doe | Aug 23 2022</h5>
              <h2>8 Figma Design systems that you can download for free today</h2>
            </li>
            <li>
              <h5>By John Doe | Aug 23 2022</h5>
              <h2>8 Figma Design systems that you can download for free today</h2>
            </li>
            <li>
              <h5>By John Doe | Aug 23 2022</h5>
              <h2>8 Figma Design systems that you can download for free today</h2>
            </li>
            <li>
              <h5>By John Doe | Aug 23 2022</h5>
              <h2>8 Figma Design systems that you can download for free today</h2>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
