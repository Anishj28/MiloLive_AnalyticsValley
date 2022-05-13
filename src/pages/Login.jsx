import React from 'react'
import '../pages/login.css'
import { useContext } from "react";
import {useNavigate} from "react-router-dom"
import {userContext} from "../App"
function Login() {
    const navigate=useNavigate();
    const {state,dispatch}= useContext(userContext)
    const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch({type:"USER",payload:true});
      navigate("/dashboard");
      console.log("Hi")
      console.log(state);
    };
    return (
      <div className="wrapper">
        <form className="loginform" onSubmit={handleSubmit}>
          <h3>Agency Login</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                &nbsp; By signing in you agree to our{" "}
                <a href="#">terms and conditions</a>
              </label>
            </div>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            <a href="#">Forgot password?</a>
          </p>
        </form>
      </div>
    );
}

export default Login
