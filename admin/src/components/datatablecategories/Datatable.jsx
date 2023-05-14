import React, { useState, useEffect } from "react";
import axios from "axios";
import "./datatable.scss";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const Datatable = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/api/categories/")
      .then((res) => setCategories(res.data));
  }, []);

  const columns = [
    { field: "id", headerName: "Category id", width: 300 },
    { field: "name", headerName: "Category name", width: 300 },
    {
      field: "amountOfLessons",
      headerName: "Lessons in cat",
      width: 150,
      editable: false,
    },

    {
      field: "lessonsPerSemester",
      headerName: "Lessons per semester",
      width: 160,
    },
  ];

  const categoriesMapped = categories.map((category) => {
    return {
      id: category._id,
      name: category.name,
      amountOfLessons: category.amountOfLessons,
      lessonsPerSemester: category.lessonsPerSemester,
    };
  });

  for (let i = 0; i < categoriesMapped.lessonsPerSemester; i++) {
    const obj = categoriesMapped[i];
    for (const key in obj) {
      console.log(`${key}: ${obj[key]}`);
    }
  }

  return (
    <Box className="datatable" sx={{ height: 700, width: "100%" }}>
      <DataGrid
        rows={categoriesMapped}
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
