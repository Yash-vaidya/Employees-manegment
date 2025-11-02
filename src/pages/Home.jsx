import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import "./Home.css";

// Employee images
import emp1 from "../assets/imgs/emp1.png";
import emp2 from "../assets/imgs/emp2.png";
import emp3 from "../assets/imgs/emp3.png";
import emp4 from "../assets/imgs/emp4.png";

import About from "./About";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="home-container">
        <h1 className="home-title" data-aos="fade-up">
          Welcome to Employee Management System
        </h1>

        <p
          className="lead text-light text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Manage all your company employees efficiently using this simple and
          smart application
        </p>

        <div
          className="mt-5 text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Link to="/employees" className="btn btn-primary btn-lg mx-2">
            View Employees
          </Link>
          <Link to="/about" className="btn btn-outline-light btn-lg mx-2">
            About Employees
          </Link>
        </div>

        {/* Employee sliding section */}
        <div
          className="employee-slider mt-5"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <img src={emp1} alt="employee 1" className="employee-img" />
          <img src={emp2} alt="employee 2" className="employee-img" />
          <img src={emp3} alt="employee 3" className="employee-img" />
          <img src={emp4} alt="employee 4" className="employee-img" />
        </div>
      </div>

      <About />
    </>
  );
};

export default Home;
