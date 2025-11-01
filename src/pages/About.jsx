import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

import emp1 from "../assets/imgs/eemp.png";
import emp2 from "../assets/imgs/emp2.png";
import emp3 from "../assets/imgs/eemp2.png";
import emp4 from "../assets/imgs/eemp3.png";
function About() {
  return (
    <div className="containerto my-5">
      <div className="about-container d-flex flex-column flex-lg-row align-items-center justify-content-between p-4 rounded-4 shadow-lg">
        
        {/* Left side text */}
        <div className="about-text mb-4 mb-lg-0 me-lg-4">
          <h2 className="fw-bold mb-3">About Employee Management</h2>
          <p>
            The Employee Management System helps organizations manage staff data,
            attendance, and performance efficiently. It ensures smooth workflow,
            transparency, and better communication within teams. This system
            simplifies HR tasks and empowers employees for higher productivity.
          </p>
        </div>

        {/* Right side 4-image grid */}
        <div className="about-image-grid">
          <div className="row g-3">
            <div className="col-6">
              <img
                src={emp1}
                alt="Employee 1"
                className="img-fluid rounded-top-end shadow-sm"
              />
            </div>
            <div className="col-6">
              <img
                src={emp2}
                alt="Employee 2"
                className="img-fluid rounded-top-start shadow-sm"
              />
            </div>
            <div className="col-6">
              <img
                src={emp3}
                alt="Employee 3"
                className="img-fluid rounded-bottom-start shadow-sm"
              />
            </div>
            <div className="col-6">
              <img
                src={emp4}
                alt="Employee 4"
                className="img-fluid rounded-bottom-end shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>  
    </div>
  );  
}

export default About;
