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
          <button className="Add">Add lesson</button>
          <button className="Edit">Edit lesson</button>
          <button className="Delete">Delete lesson</button>
        </div>
        <Datatablelessons />
      </div>
    </div>
  );
};

export default Login;
