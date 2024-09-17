import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="d-flex flex-column justify-content-start align-item-start projects">
      <div className="mt-3">
        <div className="projects-topic mb-3">Projects</div>
        <div className="project-name">Oneid</div>
        <div className="time-period mb-2">Jul 2024 - Present</div>
        <div className="des-div mb-3">
        As the software engineer for Oneid, I contributed 100% to developing this mobile-responsive React application. OneRemit allows users to tokenize their credit or debit cards and send money in just a few clicks. The platform provides a smooth and intuitive user experience across devices, enabling users to view their transactions, download transaction PDFs, invite friends, and share reward points. I played a key role in implementing these features to enhance usability and ensure seamless performance.
        </div>
        <div className="skill-text mb-1">Skills: </div>
        <ul className="ol-div">
            <li className="des-div">React.js</li>
            <li className="des-div">GitHub</li>
            <li className="des-div">Google App Engine</li>
        </ul>
      </div>
    </div>
  );
}
