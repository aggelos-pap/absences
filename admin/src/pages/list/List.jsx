import React from "react";
import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import { Link, useNavigate } from "react-router-dom";

//asd

const List = () => {
  const navigate = useNavigate();

  const handleAddUser = () => {
    navigate("/users/new");
  };

  const handleeditUser = () => {
    navigate("/users/edituser");
  };

  return (
    <div className="list">
      <Sidebar />

      <div className="listContainer">
        <Navbar />
        <div className="buttonContainer">
          <button className="Add" onClick={handleAddUser}>
            Add user
          </button>
          <button className="Edit" onClick={handleeditUser}>
            Edit user
          </button>
          <button className="Delete">Delete user</button>
        </div>
        <Datatable />
      </div>
    </div>
  );
};

export default List;
