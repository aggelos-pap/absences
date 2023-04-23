import React from "react";
import "./listcat.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatablelessons from "../../components/datatablelessons/Datatable";

const Login = () => {
  return (
    <div className="list">
      <Sidebar />

      <div className="listContainer">
        <Navbar />
        <div className="buttonContainer">
          <button className="Add">Add user</button>
          <button className="Edit">Edit user</button>
          <button className="Delete">Delete user</button>
        </div>
        <Datatablelessons />
      </div>
    </div>
  );
};

export default Login;
