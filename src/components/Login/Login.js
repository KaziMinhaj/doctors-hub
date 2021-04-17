import React from "react";
import login from "../../images/login.png";
import Navbar from "../Shared/Navbar/Navbar";
const Login = () => {
  return (
    <div className="container">
      <Navbar></Navbar>
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <button className="btn btn-primary">Goolge Signin</button>
        </div>
        <div className="col-md-6">
          <img className="img-fluid w-75" src={login} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
