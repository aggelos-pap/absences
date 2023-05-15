import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./deleteuser.scss";

const DeleteUser = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedUserDetails, setSelectedUserDetails] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8800/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleUserSelect = (event) => {
    const userId = event.target.value;
    setSelectedUser(userId);
    const userDetails = users.find((user) => user._id === userId);
    setSelectedUserDetails(userDetails);
  };

  const handleDeleteUser = async () => {
    try {
      await axios.delete(`http://localhost:8800/api/users/${selectedUser}`);
      // Handle success, e.g., show a success message or update the user list
    } catch (error) {
      console.error("Error deleting user:", error);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />

        <div className="left">
          <h1>Delete User</h1>

          <div className="right">
            <div className="form">
              <select value={selectedUser} onChange={handleUserSelect}>
                <option value="">Select a user</option>
                {users.map((user) => (
                  <option key={user._id} value={user._id}>
                    {user.name}
                  </option>
                ))}
              </select>
            </div>
            {selectedUserDetails && (
              <div className="userCard">
                <h2>{selectedUserDetails.name}</h2>
                <p>Username: {selectedUserDetails.username}</p>
                <p>Email: {selectedUserDetails.email}</p>
                {/* Add more user details as needed */}
              </div>
            )}
            <button
              className="button"
              onClick={handleDeleteUser}
              disabled={!selectedUser}
            >
              Delete User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteUser;
