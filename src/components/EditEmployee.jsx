import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./EditEmployee.css"; // 👈 new CSS file

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/employees/${id}`)
      .then((res) => setEmployee(res.data))
      .catch((err) => console.log("Error fetching employee:", err));
  }, [id]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/employees/${id}`, employee)
      .then(() => {
        alert("Employee updated successfully!");
        navigate("/employees");
      })
      .catch((err) => console.log("Error updating employee:", err));
  };

  return (
    <div className="edit-employee-container">
      <div className="edit-employee-card shadow-lg rounded-4 p-4">
        <h2 className="text-center mb-4 fw-bold text-white">
          Edit Employee Details
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-white">Name</label>
            <input
              type="text"
              name="name"
              className="form-control custom-input"
              value={employee.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-white">Email</label>
            <input
              type="email"
              name="email"
              className="form-control custom-input"
              value={employee.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-white">Role</label>
            <input
              type="text"
              name="role"
              className="form-control custom-input"
              value={employee.role}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Positon</label>
            <input
              type="text"
              name="role"
              className="form-control custom-input"
              value={employee.position}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Salary</label>
            <input
              type="text"
              name="salary"
              className="form-control custom-input"
              value={employee.salary}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn custom-btn w-100 mt-3">
            Update Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
