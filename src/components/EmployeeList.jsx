import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import "./EmployeeList.css";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    axios
      .get("http://localhost:3000/employees")
      .then((res) => setEmployees(res.data))
      .catch((err) => console.log("Error fetching data:", err));
  };

  const handleEdit = (id) => navigate(`/edit/${id}`);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      axios
        .delete(`http://localhost:3000/employees/${id}`)
        .then(() => {
          alert("Employee deleted successfully");
          fetchEmployees();
        })
        .catch((err) => console.log("Error deleting employee:", err));
    }
  };

  // 🔹 Prepare chart data
  const totalEmployees = employees.length;

  const roleCounts = employees.reduce((acc, emp) => {
    acc[emp.role] = (acc[emp.role] || 0) + 1;
    return acc;
  }, {});

  const pieData = Object.keys(roleCounts).map((role) => ({
    name: role,
    value: roleCounts[role],
  }));

  const lineData = employees.map((emp) => ({
    name: emp.name,
    value: emp.id, // just demo (you can change if you have date or age)
  }));

  const COLORS = ["#FF6F61", "#6A5ACD", "#20B2AA", "#FFB347", "#7FFF00"];

  return (
    <div className="employee-list-container py-5">
      <div className="employee-list-card rounded-4 shadow-lg p-4">
        <h2 className="text-center mb-4">Employee Dashboard</h2>

        {/* === CHART SECTION === */}
        <div className="row text-center mb-5">
          {/* Total Employees */}
          <div className="col-md-4 mb-4">
            <div className="stat-card rounded-4 p-3 shadow-sm bg-light">
              <h5>Total Employees</h5>
              <h2 className="fw-bold text-primary">{totalEmployees}</h2>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Role Distribution</h5>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  dataKey="value"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Employees per Role</h5>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={pieData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#6A5ACD" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* === TABLE SECTION === */}
        <div className="table-responsive">
          <table className="table table-bordered table-hover bg-warning text-center align-middle">
            <thead className="table-header">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.length > 0 ? (
                employees.map((emp) => (
                  <tr key={emp.id}>
                    <td>{emp.id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.email}</td>
                    <td>{emp.role}</td>
                    <td>
                      <button
                        className="btn custom-btn-edit btn-sm me-2"
                        onClick={() => handleEdit(emp.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn custom-btn-delete btn-sm"
                        onClick={() => handleDelete(emp.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No employees found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
