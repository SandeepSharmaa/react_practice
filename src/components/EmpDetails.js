import React, { useEffect, useState } from "react";
import { useParams ,Link} from "react-router-dom";


const EmpDetails = () => {
  const { empid } = useParams();

  const [empdata, empdataChange] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/employee/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        empdataChange(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      <div className="card" style={{ textAlign: "left" }}>
        <div className="card-title">
          <h2>Employee Create</h2>
        </div>

        <div className="card-body"></div>

        {empdata && (
            <div>
          <h2>
            The Employee name is : {empdata.title} {empdata.id}
          </h2>

          <h3>Contact Details</h3>
          <h5>Email is :{empdata.email}</h5>
          <h5>Phone Number : {empdata.phone}</h5>

          <Link className="btn btn-success" to="/dashboard">Back</Link>
          </div>
          
        )}
      </div>
    </div>
  );
};

export default EmpDetails;
