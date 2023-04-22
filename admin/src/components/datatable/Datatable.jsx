import React, { useState, useEffect } from "react";
import axios from "axios";
import "./datatable.scss";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const Datatable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://172.24.0.150:8800/api/users/")
      .then((res) => setUsers(res.data));
  }, []);

  const columns = [
    { field: "name", headerName: "Full Name", width: 90 },
    {
      field: "username",
      headerName: "Username",
      width: 150,
      editable: false,
    },
    {
      field: "email",
      headerName: "Email",
      width: 300,
      editable: false,
    },
    {
      field: "Lessons",
      headerName: "Lessons",
      width: 110,
      editable: true,
    },
    {
      field: "isAdmin",
      headerName: "Admin?",
      width: 160,
    },
  ];

  const rows = users.map((user) => {
    return {
      id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      lessons: user.lessons.length,
      isAdmin: user.isAdmin,
    };
  });

  return (
    <Box className="datatable" sx={{ height: 700, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};
export default Datatable;
