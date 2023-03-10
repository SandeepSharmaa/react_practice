import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const EmployeeList = () => {
  const [empData, empDataChange] = useState(null);

  let history = useHistory();

  const LoadDetail=(id)=>{

    history.push("/employee/detail/"+id);
  }

  const LoadEdit=(id)=>{

  }

  const RemoveFunction=(id)=>{

  }

  useEffect(() => {
    fetch("http://localhost:3000/employee")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        empDataChange(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Employee Listing</h2>
        </div>

        <div className="card-body">
            <div className="divbtn">
                <Link to="employee/create" className="btn btn-success">Add New (+)</Link>
            </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {empData &&
                empData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <a onClick={()=>{LoadEdit(item.id)}} className="btn btn-success">Edit</a>
                      <a onClick={()=>{RemoveFunction(item.id)}} className="btn btn-danger">Remove</a>
                      <a onClick={()=>{LoadDetail(item.id)}} className="btn btn-success">Details</a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
