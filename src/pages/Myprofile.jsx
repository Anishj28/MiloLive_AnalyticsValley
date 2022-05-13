import React from 'react'
import "../pages/myprofile.css";

function Myprofile() {
    return (
      <div className="wrapper">
        <h3>My Profile</h3>
        <form action="" className="form-group">
          <div className="contain">
            <label for="">Name</label>
            <input
              type="text"
              class="form-control"
              id=""
              placeholder="Your Name"
              required
            ></input>
          </div>
          <div className="contain">
            <label for="">Email address</label>
            <input
              type="email"
              class="form-control"
              id=""
              placeholder="name@example.com"
              required
            ></input>
          </div>
          <div className="contain">
            <label for="">Website</label>
            <input
              type="text"
              class="form-control"
              id=""
              placeholder="website.com"
              required
            ></input>
          </div>
          <div className="contain">
            <label for="">Country</label>
            <input
              type="text"
              class="form-control"
              id=""
              placeholder="India"
              required
            ></input>
          </div>
        </form>
        <form action="" className="form-group">
          <div className="contain">
            <label for="">State</label>
            <input
              type="text"
              class="form-control"
              id=""
              placeholder="Telangana"
              required
            ></input>
          </div>
          <div className="contain">
            <label for="">No.of streamers </label>
            <input
              type="text"
              class="form-control"
              id=""
              placeholder="10"
              required
            ></input>
          </div>
          <div className="contain">
            <label for="">Contact Name</label>
            <input
              type="text"
              class="form-control"
              id=""
              placeholder="Name"
              required
            ></input>
          </div>
          <div className="contain">
            <label for="">Phone</label>
            <input
              type="text"
              class="form-control"
              id=""
              placeholder="India"
              required
            ></input>
          </div>
        </form>
        <form action="" className="form1">
          <div className="contain">
            <label for="">Designation</label>
            <input
              type="text"
              class="form-control"
              id=""
              placeholder="Employee"
              required
            ></input>
          </div>
          <div className="contain">
            <label for="">Experience in years</label>
            <input
              type="text"
              class="form-control"
              id=""
              placeholder="3"
              required
            ></input>
          </div>
        </form>
        <h3>Bank Details</h3>
        <form action="" className="form2">
          <div className="contain">
            <label for="">Account Number</label>
            <input
              type="text"
              class="form-control"
              id=""
              placeholder="Account number"
              required
            ></input>
          </div>
          <div className="contain">
            <label for="">Accound holder name</label>
            <input
              type="text"
              class="form-control"
              id=""
              placeholder="name"
              required
            ></input>
          </div>
          <div className="contain">
            <label for="">IFSC code</label>
            <input
              type="text"
              class="form-control"
              id=""
              placeholder="IFSC code"
              required
            ></input>
          </div>
          <div className="contain">
            <label for="">Bank name</label>
            <input
              type="text"
              class="form-control"
              id=""
              placeholder="Bank name"
              required
            ></input>
          </div>
        </form>
      </div>
    );
}

export default Myprofile
