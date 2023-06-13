import React from "react";
import "./listcat.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatablecategories from "../../components/datatablecategories/Datatable";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleAddCat = () => {
    navigate("/categories/addcategory");
  };

  const handleeditcategory = () => {
    navigate("/categories/editcategory");
  };

  const handledeletecategory = () => {
    navigate("/categories/deletecategory");
  };

  return (
    <div className="list">
      <Sidebar />

      <div className="listContainer">
        <Navbar />
        <div className="buttonContainer">
          <button className="Add" onClick={handleAddCat}>
            Add category
          </button>
          <button className="Edit" onClick={handleeditcategory}>
            Edit category
          </button>
          <button className="Delete" onClick={handledeletecategory}>
            Delete category
          </button>
        </div>
        <Datatablecategories />
      </div>
    </div>
  );
};

export default Login;
