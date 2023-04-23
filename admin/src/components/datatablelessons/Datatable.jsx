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
      .get("http://172.24.0.150:8800/api/lessons/")
      .then((res) => setUsers(res.data));
  }, []);

  const columns = [
    { field: "id", headerName: "Lesson id", width: 300 },
    {
      field: "title",
      headerName: "Lesson title",
      width: 300,
      editable: false,
    },
    {
      field: "category",
      headerName: "Lesson's category object",
      width: 300,
      editable: false,
    },
  ];

  const rows = users.map((user) => {
    return {
      id: user._id,
      title: user.title,
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
