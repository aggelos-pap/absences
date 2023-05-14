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
          <button className="Add">Add category</button>
          <button className="Edit">Edit category</button>
          <button className="Delete">Delete category</button>
        </div>
        <Datatablecategories />
      </div>
    </div>
  );
};

export default Login;
