import React, { useState } from "react";
import "./Homepage.css";
import myimg from "../../assets/myimg.jpg";
const Homepage = () => {
  return (
    <div className="homepage-main">
    <div className="homepage">
      <div className="name-div">
        <div className="name-text">
          Hi,
          <br />
          I'm <span style={{ color: "#0c54bf" }}>Jayanga</span>
          <br />a Fullstack Developer
        </div>
        <div className="description mt-3">
          Self-motivated, active, and hardworking team player who is always
          looking to grow and improve both myself and my team while not giving
          up.
        </div>
        <div className="hire-me-div mt-3">Hire Me</div>
      </div>
      <div className="img-div">
        <img src={myimg} width={300} className="myimg" />
      </div>
    </div>
    </div>
  );
};
export default Homepage;
