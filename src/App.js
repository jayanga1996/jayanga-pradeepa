import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/homepage/Homepage";
import Experiences from "./components/experience/Experiences";
import Projects from "./components/projects/Projects";
import Educations from "./components/educations/Educations";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/jayanga-pradeepa" element={<Home />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Educations />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
