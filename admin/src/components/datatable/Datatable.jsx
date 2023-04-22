// -------------------Old Datatable

// import React from "react";
// import "./datatable.scss";
// import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
// import { userColumns } from "../../datatablesource";
// import { userInputs } from "../../formSource";
// import { Link, useLocation } from "react-router-dom";
// import { useState } from "react";
// import useFetch from "../../hooks/useFetch";

// const Datatable = () => {
//   //Crud columns
//   //Not displayed atm

//   //Dummy data to be deleted
//   const rows = [
//     { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//     { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//     { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//     { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//     { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//     { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//     { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//     { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//     { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
//   ];
//   const [data, setData] = useState(rows);

//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };
//   const actionColumn = [
//     {
//       field: "action",
//       headerName: "Action",
//       width: 100,
//       renderCell: () => {
//         return (
//           <div className="cellAction">
//             <Link to="/users/test" style={{ textDecoration: "none" }}>
//               <div className="viewButton">V</div>
//             </Link>
//             <div className="deleteButton">D</div>
//             <div className="editButton">E</div>
//           </div>
//         );
//       },
//     },
//   ];

//   //Dummy data to be deleted
//   const columns: GridColDef[] = [
//     { field: "id", headerName: "ID", width: 70 },
//     { field: "firstName", headerName: "First name", width: 130 },
//     { field: "lastName", headerName: "Last name", width: 130 },
//     {
//       field: "age",
//       headerName: "Age",
//       type: "number",
//       width: 90,
//     },
//     {
//       field: "fullName",
//       headerName: "Full name",
//       description: "This column has a value getter and is not sortable.",
//       sortable: false,
//       width: 160,
//       valueGetter: (params: GridValueGetterParams) =>
//         `${params.row.firstName || ""} ${params.row.lastName || ""}`,
//     },
//     {
//       field: "action",
//       headerName: "Action",
//       width: 100,
//       renderCell: () => {
//         return (
//           <div className="cellAction">
//             <Link to="/users/test" style={{ textDecoration: "none" }}>
//               <div className="viewButton">V</div>
//             </Link>
//             <div
//               className="deleteButton"
//               //Not working
//               // onclick={() => handleDelete(params.row.id)}
//             >
//               D
//             </div>
//             <div className="editButton">E</div>
//           </div>
//         );
//       },
//     },
//   ];

//   return (
//     <div className="datatable">
//       <div className="datatableTitle">
//         Add New User
//         <Link
//           to="/users/new"
//           style={{ textDecoration: "none" }}
//           className="link"
//         >
//           Add New
//         </Link>
//       </div>
//       <DataGrid
//         className="datagrid"
//         // rows={userInputs}
//         rows={data}
//         // columns={userColumns.concat(actionColumn)}
//         columns={columns}
//         pageSize={9}
//         rowsPerPageOptions={[9]}
//         checkboxSelection
//       />
//     </div>
//   );
// };

// export default Datatable;

//Bootstrap
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Table } from "react-bootstrap";

// const Datatable = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://172.24.0.150:8800/api/users/")
//       .then((res) => setUsers(res.data));
//   }, []);

//   return (
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>Username</th>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Lessons</th>
//           <th>Is Admin</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map((user) => (
//           <tr key={user._id}>
//             <td>{user.username}</td>
//             <td>{user.name}</td>
//             <td>{user.email}</td>
//             <td>{user.lessons.length}</td>
//             <td>{user.isAdmin ? "Yes" : "No"}</td>
//           </tr>
//         ))}
//       </tbody>
//     </Table>
//   );
// };

// export default Datatable;

// const [users, setUsers] = useState([]);

// useEffect(() => {
//   const fetchUsers = async () => {
//     const response = await axios.get("/api/users");
//     setUsers(response.data);
//   };
//   fetchUsers();
// }, []);

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import "./datatable.scss";
import { Link } from "react-router-dom";

const Datatable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://172.24.0.150:8800/api/users/")
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <div className="datatable">
      <div className="menuADE">
        <Link to="/users/new">
          <button className="buttonAdd">Add user</button>
        </Link>
        <button className="buttonEdit">Edit user</button>
        <button className="buttonDelete">Delete user</button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
            <th>Lessons</th>
            <th>Is Admin</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.lessons.length}</td>
              <td>{user.isAdmin ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Datatable;
