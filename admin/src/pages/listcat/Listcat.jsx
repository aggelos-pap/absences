import React from "react";
import "./listcat.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatablecategories from "../../components/datatablecategories/Datatable";

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
        <Datatablecategories />
      </div>
    </div>
  );
};

export default Login;
