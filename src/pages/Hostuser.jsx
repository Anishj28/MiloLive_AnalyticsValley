import React from 'react'
import "../pages/hostuser.css";

function Hostuser() {
    return (
      <div className="wrapper">
        <p>Users</p>
        <select name="" id="" value="Host Type">
          <option value="" selected>
            Host Type
          </option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <table>
          <tr>
            <th>Name</th>
            <th>Bio</th>
            <th>Coin</th>
            <th>Country</th>
            <th>Redeem amount</th>
          </tr>
          <tr>
            <td>Mark</td>
            <td>Mark</td>
            <td>100</td>
            <td>USA</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>Mark</td>
            <td>Mark</td>
            <td>100</td>
            <td>USA</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>Mark</td>
            <td>Mark</td>
            <td>100</td>
            <td>USA</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>Mark</td>
            <td>Mark</td>
            <td>100</td>
            <td>USA</td>
            <td>1000</td>
          </tr>
        </table>
      </div>
    );
}

export default Hostuser
