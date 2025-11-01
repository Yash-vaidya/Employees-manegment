import React, { useState, useEffect } from "react";
import axios from "axios";
import AddEmployee from "../components/AddEmployee";
import EmployeeList from "../components/EmployeeList";

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  // Fetch employees
  const fetchEmployees = () => {
    axios
      .get("http://localhost:5000/employees")
      .then((res) => setEmployees(res.data))
      .catch((err) => console.log("Error fetching employees:", err));
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Employee Management System</h2>

      {/* Add Employee Form */}
      <AddEmployee onEmployeeAdded={fetchEmployees} />

      {/* Employee List */}
      <EmployeeList
        employees={employees}
        onEmployeeUpdated={fetchEmployees}
      />
    </div>
  );
};

export default Employees;
