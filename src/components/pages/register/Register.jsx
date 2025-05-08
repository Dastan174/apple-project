import React from "react";
import scss from "./register.module.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <p>
        uje registrirovalis to pereydite v <Link to="/sign-in">login</Link>
      </p>
    </div>
  );
};

export default Register;
