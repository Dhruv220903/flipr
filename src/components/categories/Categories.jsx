import React from "react";
import "../styles/styles.css"
const Categories = () => {
  return (
    <section>
      <h1 style={{ textAlign: "center", fontFamily: "Sen", fontSize: "x-large" }}>
        Choose a category
      </h1>
      <div className="category">
        <ul>
          <li>
            <img src="./assets/Client-First - icons/Icon-1.svg" alt="" />
            <h1>Business</h1>
            <h5>Lorem, ipsum dolor sit amet</h5>
            <h5>Doloremque accusamus dolore,</h5>
          </li>
          <li>
            <img src="./assets/Client-First - icons/Icon (2).svg" alt="" />
            <h1>Startup</h1>
            <h5>Lorem, ipsum dolor sit amet</h5>
            <h5>Doloremque accusamus dolore,</h5>
          </li>
          <li>
            <img src="./assets/Client-First - icons/icon.svg" alt="" />
            <h1>Economy</h1>
            <h5>Lorem, ipsum dolor sit amet</h5>
            <h5>Doloremque accusamus dolore,</h5>
          </li>
          <li>
            <img src="./assets/Client-First - icons/icon.svg" alt="" />
            <h1>Technology</h1>
            <h5>Lorem, ipsum dolor sit amet</h5>
            <h5>Doloremque accusamus dolore,</h5>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Categories;
