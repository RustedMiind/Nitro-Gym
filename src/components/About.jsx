import React, { Component } from "react";
import aboutImage from "../images/about-us2.jpg";
function About() {
  return (
    <div className="about" id="about">
      <div className="about-text">
        <h2>
          WHO ARE <span>WE</span>....
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa in
          eaque sunt fuga magni excepturi recusandae accusamus quasi totam
          nesciunt nemo ut natus omnis ipsa, exercitationem soluta laborum
          ratione obcaecati? Debitis consequatur enim sunt repudiandae sapiente
          cum est distinctio aspernatur nam repellat, fuga cupiditate deleniti
          ipsam reiciendis? Illo, quisquam natus. lorem
        </p>
      </div>
      <div className="about-image-container">
        <img src={aboutImage} alt="" />
      </div>
    </div>
  );
}

export default About;
