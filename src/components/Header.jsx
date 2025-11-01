import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          Employee Management
        </Link>

        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link neon-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link neon-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link neon-link" to="/employees">Employees</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
