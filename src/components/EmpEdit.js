
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const EmpEdit = () => {

    const { empid } = useParams();

    const [id, idChange] = useState("");
    const [title, nameChange] = useState("");
    const [email, changeEmail] = useState("");
    const [phone, changePhone] = useState("");
    const [active, activeChange] = useState(true);


    let history = useHistory();

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log({ id, title, email, phone, active });
  
      const empData = { id,title, email, phone, active };
  
      fetch("http://localhost:3000/employee/"+empid, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(empData),
      })
        .then((res) => {
          alert("Save Successfully");
          history.push("/dashboard");
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

  //const [empdata, empdataChange] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/employee/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
       idChange(res.id);
       nameChange(res.title);
       changeEmail(res.email);
       changePhone(res.phone);
       activeChange(res.isactive)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-title">
              <h2>Employee Edit</h2>
            </div>

            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>ID</label>
                    <input
                      value={id}
                      disabled="disabled"
                      className="form-control"
                    ></input>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        value={title}
                        onChange={(e) => nameChange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          value={email}
                          onChange={(e) => changeEmail(e.target.value)}
                          className="form-control"
                        ></input>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Phone</label>
                        <input
                          value={phone}
                          onChange={(e) => changePhone(e.target.value)}
                          className="form-control"
                        ></input>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-check">
                        <input
                          checked="active"
                          onChange={(e) => activeChange(e.target.checked)}
                          style={{ margin: "6px" }}
                          type="checkbox"
                          className="form-check-input"
                        ></input>
                        <label className="form-check-label">Is Active</label>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <button className="btn btn-success" type="submit">
                          Save
                        </button>

                        <Link to="/dashboard" className="btn btn-danger">
                          Back
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default EmpEdit