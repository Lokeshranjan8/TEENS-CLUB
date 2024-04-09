
import React, { useState } from "react";
import "./Loginform.css";
import { FaUser, FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Loginform = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleToggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div className="wrapper">
      <form action="">
        <h1>{isLoginForm ? "Login" : "Registration"}</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUser className="icon" />
        </div>
        {!isLoginForm && (
          <div className="input-box">
            <input type="email" placeholder="E-mail" required />
            <IoMdMail className="icon" />
          </div>
        )}
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className="icon" />
        </div>
        {!isLoginForm && (
          <div className="remember-forget">
            <label>
              <input type="checkbox" required />
              I agree to the terms & conditions
            </label>
          </div>
        )}
        <button type="submit">{isLoginForm ? "Login" : "Register"}</button>
        <div className="register-link">
          <p>
            {isLoginForm
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
            <a href="#" onClick={handleToggleForm}>
              {isLoginForm ? "Register" : "Login"}
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Loginform;
