import React from "react";
import "./Educations.css";
import ru_logo from "../../assets/LOGO_OF_RUHUNA.jpg";
import dev_logo from '../../assets/Devananda.png'

export default function Educations() {
  return (
    <div className="education-main">
      <div className="education">
        <div className="d-flex flex-column justify-content-start align-item-start">
          <img src={ru_logo} alt="" width={50} />
          <div className="project-name mt-3">University of Ruhuna</div>
          <div className="time-period mb-2">
            Bachaler of Computer Science, Computer Science
          </div>
          <div className="des-div mb-3">2018 - 2021</div>
        </div>
        <div className="break-line mt-3 mb-3"></div>
        <div className="d-flex flex-column justify-content-start align-item-start">
          <img src={dev_logo} alt="" width={65} />
          <div className="project-name mt-3">Sri Devananda college, Galle</div>
          <div className="time-period mb-2">Physical Science Stream</div>
          <div className="des-div mb-3">Jan 2024 - Aug 2016</div>
          <div className="skill-text mb-1">Results: </div>
          <ul className="ol-div">
            <li className="des-div">Combined Maths - A </li>
            <li className="des-div">Physics - B</li>
            <li className="des-div">Chemistry - C</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
