import React from 'react'
import "../pages/navbar.css";
import { Link ,NavLink} from "react-router-dom";
import { userContext } from '../App';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';

function Navbar() {
    const { state, dispatch } = useContext(userContext);
    const navigate = useNavigate();
    const handleLogout = ()=>{
        dispatch({ type: "USER", payload: false });
        navigate("/");
    }
    return (
      <div>
        <nav class="navbar navbar-dark bg-primary">
          <div className="imgcontainer">
            <button
              class="navbar-brand bg-primary btn"
              className="logo"
              href="#"
              onClick={handleLogout}
            >
              <NavLink
                to="/"
                style={{ textDecoration: "none", color: "inherit" }}
              ></NavLink>
            </button>
          </div>
          <div>
            {state ? (
              <div id="">
                <ul class="navbar-nav mr-auto" className="navlist">
                  <li class="nav-item">
                    <NavLink
                      to="/dashboard"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <Link
                      to="/hostuser"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Host user
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      to="/myprofile"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      My Profile
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <h4>+ 1 999 999 999 &nbsp; &nbsp; &nbsp; ENG</h4>
            )}
          </div>
        </nav>
      </div>
    );
}

export default Navbar
