import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
// import { Card, Button } from "react-bootstrap";

const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/employees/${id}`)
      .then((res) => setEmployee(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!employee) return <h4 className="text-center mt-5">Loading...</h4>;

  return (
    <div className="container mt-5">
      <Card className="shadow-lg p-4">
        <h2 className="text-center mb-4">Employee Details</h2>
        <p><strong>ID:</strong> {employee.id}</p>
        <p><strong>Name:</strong> {employee.name}</p>
        <p><strong>Email:</strong> {employee.email}</p>
        <p><strong>Position:</strong> {employee.position}</p>
        <p><strong>Salary:</strong> ₹{employee.salary}</p>

        <div className="d-flex justify-content-between mt-4">
          <Link to="/employees" className="btn btn-secondary">Back to List</Link>
          <Link to={`/employees/edit/${employee.id}`} className="btn btn-warning">Edit</Link>
        </div>
      </Card>
    </div>
  );
};

export default EmployeeDetails;
