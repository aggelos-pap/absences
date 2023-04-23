import React from "react";
import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
//asd
const List = () => {
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
        <Datatable />
      </div>
    </div>
  );
};

export default List;
