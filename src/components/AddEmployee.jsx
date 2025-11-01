import React, { useState } from "react";
import axios from "axios";
import "./AddEmployee.css"; // 👈 custom CSS

function AddEmployee({ onEmployeeAdded }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    role: "",
    salary: "",
  });

  // Handle form change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, position, role, salary } = formData;

    if (!name || !email || !position || !role || !salary) {
      alert("Please fill all fields!");
      return;
    }

    try {
      await axios.post("http://localhost:3000/employees", formData);
      alert("Employee added successfully!");

      setFormData({ name: "", email: "", position: "", role: "", salary: "" });

      if (onEmployeeAdded) onEmployeeAdded();
    } catch (error) {
      console.error("Error adding employee:", error);
      alert("Failed to add employee");
    }
  };

  return (
    <div className="add-employee-container py-5">
      <div className="form-card mx-auto p-4 rounded-4 shadow-lg">
        <h3 className="text-center mb-4 fw-bold">Add New Employee</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
            />
          </div>

          {/* 🌸 New Role Field */}
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="number"
              className="form-control"
              placeholder="Enter Salary"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn custom-btn w-100 text-dark">
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;
