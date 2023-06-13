import React from "react";
import "./listcat.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatablelessons from "../../components/datatablelessons/Datatable";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleAddLesson = () => {
    navigate("/lessons/addlesson");
  };

  const handleeditLesson = () => {
    navigate("/lessons/editlesson");
  };

  const handledeletelesson = () => {
    navigate("/lessons/deletelesson");
  };

  return (
    <div className="list">
      <Sidebar />

      <div className="listContainer">
        <Navbar />
        <div className="buttonContainer">
          <button className="Add" onClick={handleAddLesson}>
            Add lesson
          </button>
          <button className="Edit" onClick={handleeditLesson}>
            Edit lesson
          </button>
          <button className="Delete" onClick={handledeletelesson}>
            Delete lesson
          </button>
        </div>
        <Datatablelessons />
      </div>
    </div>
  );
};

export default Login;
