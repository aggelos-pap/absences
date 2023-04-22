import React, { useState, useEffect } from "react";
import "./list.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import useFetch from "../../hooks/useFetch";

const userRows = [
  {
    id: 1,
    firstName: "Nick",
    lastName: "Anger",
    age: 33,
    image: "https://robohash.org/anger",
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Greed",
    age: 22,
    image: "https://robohash.org/greed",
  },
  {
    id: 3,
    firstName: "Jane",
    lastName: "Smith",
    age: 20,
    image: "https://robohash.org/smith",
  },
  {
    id: 4,
    firstName: "Nekky",
    lastName: "Jones",
    age: 18,
    image: "https://robohash.org/jones",
  },
  {
    id: 5,
    firstName: "Jenna",
    lastName: "Papa",
    age: 32,
    image: "https://robohash.org/papa",
  },
  {
    id: 6,
    firstName: "Sean",
    lastName: "Δοπουλος",
    age: 20,
    image: "https://robohash.org/dopoulos",
  },
];

const List = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/api/users/info/last24")
      .then((response) => {
        setInfo(response.data);
        // console.log(info);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // console.log(info);

  // const userRowsFun = [...info];
  // console.log(userRowsFun);

  // const userRowsObject = info.map((user) => ({
  //   name: user.name,
  //   username: user.username,
  //   email: user.email,
  // }));
  // console.log(userRowsObject);

  // const userRows = [
  //   {
  //     name: userRowsObject[0].name,
  //     username: userRowsObject[0].username,
  //     email: userRowsObject[0].email,
  //   },
  //   {
  //     name: userRowsObject[1].name,
  //     username: userRowsObject[1].username,
  //     email: userRowsObject[1].email,
  //   },
  //   {
  //     name: userRowsObject[2].name,
  //     username: userRowsObject[2].username,
  //     email: userRowsObject[2].email,
  //   },
  //   {
  //     name: userRowsObject[3].name,
  //     username: userRowsObject[3].username,
  //     email: userRowsObject[3].email,
  //   },
  //   {
  //     name: userRowsObject[4].name,
  //     username: userRowsObject[4].username,
  //     email: userRowsObject[4].email,
  //   },
  // ];

  return (
    <TableContainer component={Paper} className="list">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Latest users</TableCell>
            <TableCell className="tableCell">Avatar</TableCell>
            <TableCell className="tableCell">First Name</TableCell>
            <TableCell className="tableCell">Last Name</TableCell>
            <TableCell className="tableCell">Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userRows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.image} alt="" className="image" />
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.firstName}</TableCell>
              <TableCell className="tableCell">{row.lastName}</TableCell>
              <TableCell className="tableCell">{row.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
