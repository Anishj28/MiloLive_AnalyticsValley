import React from 'react'
import "../pages/dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
    return (
      <div className="wrapper">
        <h1>Welcome Admin</h1>
        <p>Dashboard</p>
        <div className="cardslist">
          <div class="card w-25">
            <div class="card-body">
              <h5 class="card-title">
                <p>0</p> <FontAwesomeIcon icon={faUsers} />
              </h5>
              <p class="card-text">Total host count</p>
            </div>
          </div>
          <div class="card w-25">
            <div class="card-body">
              <h5 class="card-title">
                <p>0</p> <FontAwesomeIcon icon={faUsers} />
              </h5>
              <p class="card-text">Monthly Earning Count</p>
            </div>
          </div>
          <div class="card w-25">
            <div class="card-body">
              <h5 class="card-title">
                <p>0</p> <FontAwesomeIcon icon={faUsers} />
              </h5>
              <p class="card-text">Overall earning count</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Dashboard
