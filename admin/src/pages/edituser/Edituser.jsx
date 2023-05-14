import React, { useState, useEffect } from "react";
import axios from "axios";
import "./edituser.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

const EditUser = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
    am: "",
  });

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8800/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleCheckboxChange = (e) => {
    setIsSelected(e.target.checked);
    setSelectedUser(null);
    setFormData({
      username: "",
      password: "",
      name: "",
      email: "",
      am: "",
    });
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setFormData({
      username: user.username,
      password: "",
      name: user.name,
      email: user.email,
      am: user.am,
    });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedUser = {
        ...formData,
      };

      await axios.put(
        `http://localhost:8800/api/users/${selectedUser._id}`,
        updatedUser
      );

      // Perform any necessary actions after successful user update
      // ...

      // Clear form data and reset selection
      setFormData({
        username: "",
        password: "",
        name: "",
        email: "",
        am: "",
      });
      setSelectedUser(null);
      setIsSelected(false);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Edit User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <p>Select user to edit</p>

            <ul style={{ listStyle: "none" }} className="userList">
              {users.map((user) => (
                <li
                  key={user._id}
                  className={selectedUser?._id === user._id ? "selected" : ""}
                  onClick={() => handleUserSelect(user)}
                >
                  {user.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="right">
            {selectedUser && (
              <form onSubmit={handleSubmit}>
                <div className="formInput">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="formInput">
                  <label htmlFor="isSelected">Select User:</label>
                  <input
                    type="checkbox"
                    id="isSelected"
                    name="isSelected"
                    checked={isSelected}
                    onChange={handleCheckboxChange}
                  />
                </div>
                <div className="formInput">
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    disabled={!isSelected}
                  />
                </div>
                <div className="formInput">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={!isSelected}
                  />
                </div>
                <div className="formInput">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={!isSelected}
                  />
                </div>
                <div className="formInput">
                  <label htmlFor="am">AM:</label>
                  <input
                    type="text"
                    id="am"
                    name="am"
                    value={formData.am}
                    onChange={handleInputChange}
                    disabled={!isSelected}
                  />
                </div>
                <button type="submit" disabled={!isSelected}>
                  Update User
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
