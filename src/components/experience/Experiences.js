import React from "react";
import "./Experiences.css";

export default function Experiences() {
  return (
    <div className="d-flex flex-column justify-content-start align-item-start expirence">
      <div className="mt-3">
        <div className="expirence-topic mb-3">Work Experience</div>
        <div className="company-div">
          <div className="company-name">Spemai (PVT) Ltd</div>
          <div className="position">
            Software Engineer{" "}
            <span className="time-period"> 05/2023 - Present</span>
          </div>
          <div className="ul-div mt-3 mb-2">
            <ul className="">
              <li className="">
                As the software engineer for Oneid, I contributed 100% to
                developing this mobile-responsive React application. OneRemit
                allows users to tokenize their credit or debit cards and send
                money in just a few clicks.
              </li>
              <li className="">
                I was a front-end developer on a conversational AI project using
                React, where I implemented user interfaces for seamless
                interaction, and enhanced user experience through intuitive
                design. I contributed 80% to the project, which included user
                management and role management.
              </li>
              <li className="">
                I also created an npm module for a chat app with enhanced
                functionality and efficiency.
              </li>
              <li className="">
                I also contributed to a user management project, designing and
                implementing the backend using LoopBack. Additionally, I
                integrate Firebase for seamless data management and
                authentication, ensuring robust and secure user interactions.
              </li>
              <li className="">
                Oneticket is a platform for selling event tickets. I contributed
                to the maintenance and development of new features, including
                handling day-to-day change requests.
              </li>
              <li className="">
                Actively learning and gaining experience in Nextjs projects,
                expanding my skill set and deepening my understanding of backend
                development and web application frameworks
              </li>
            </ul>
          </div>
        </div>
        <div className="company-div">
        <div className="company-name">Upay Payment app powered by SDB bank</div>
        <div className="position">
          Software Engineer{" "}
          <span className="time-period"> 12/2021 - 05/2023</span>
        </div>
        <div className="ul-div mt-3 mb-2">
          <ul className="">
            <li className="">
              Experience in React Native mobile and Laravel backend development
              in a customer onboarding project.
            </li>
            <li className="">
              Experience with the Apache Cordova framework in a fintech
              application.
            </li>
            <li className="">
              Experience in an Angular frontend developer on an Admin dashboard
            </li>
          </ul>
        </div>
        </div>
        <div className="company-div">
        <div className="company-name">Global Market Technologies</div>
        <div className="position">
          Software Engineer Intern{" "}
          <span className="time-period"> 03/2021 - 09/2021</span>
        </div>
        <div className="ul-div mt-3 mb-2">
          <ul className="">
            <li className="">
              Worked as a C֡++ backend developer in a Linux Server Environment.
            </li>
            <li className="">
              Developed CSP tool for getting Exchange feed data from ICE Data
              Service.
            </li>
            <li className="">
              Developed a tool for feed data analysis and conversion into
              readable format data.
            </li>
            <li className="">
              Worked in Analyzer and Symbol Extractor Component to integrate the
              Asian Stock Exchanges.
            </li>
            <li className="">Worked in Oracle Database.</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}
