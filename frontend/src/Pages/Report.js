import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Table.css";

const Report = (useData) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/orderData")
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full vh-100 d-flex justify-content-center align-items-center">
      <div className="w-full p-9">
        <h2 className="text-lg md:text-2xl font-bold text-slate-600 pb-5 text-center">
          Order Report
        </h2>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Pincode</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                  <td>{user.pincode}</td>
                  <td>{user.amount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Report;
