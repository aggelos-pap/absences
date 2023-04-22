import React, { useState, useEffect } from "react";
import axios from "axios";
import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8800/api/users/info/last24")
      .then((response) => {
        console.log(response);
        setCount(response.data.length);
        // console.log(count);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [count]);

  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">New users</h1>
        <MoreVertIcon fontSize="small" />
      </div>

      <div className="bottom">
        {/* <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div> */}
        <p className="title">Today we had</p>
        <p className="amount">{count}</p>
        <p className="description">successful registrations</p>
      </div>
    </div>
  );
};

export default Featured;
