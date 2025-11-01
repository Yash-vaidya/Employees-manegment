import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';  
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import EditEmployee from "./components/EditEmployee.jsx";

function App() {
  return (
    <Router>
       
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/employees"
            element={
              <>
                <h2 className="text-center mb-4">Employee Management System</h2>
                <AddEmployee />
                <EmployeeList />
              </>
              
            }
          />
          <Route path="/edit/:id" element={<EditEmployee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
