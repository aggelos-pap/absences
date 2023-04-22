import React, { useState, useEffect } from "react";
import "./widget.scss";
import GroupIcon from "@mui/icons-material/Group";
import CategoryIcon from "@mui/icons-material/Category";
import PlayLessonIcon from "@mui/icons-material/PlayLesson";
import axios from "axios";
import useFetch from "../../hooks/useFetch";

const Widget = ({ type }) => {
  //   let totalUsers = 1;

  const { data, loading, error } = useFetch("/lessons/cc");
  // console.log(data);

  const [totalUsers, setTotalUsers] = useState("");
  const [totalLessons, setTotalLessons] = useState("");
  const [totalCategories, setTotalCategories] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:8800/api/users/cc")
      .then((res) => setTotalUsers(res.data.count))
      .catch((err) => console.error(err));

    axios
      .get("http://localhost:8800/api/lessons/cc")
      .then((res) => setTotalLessons(res.data.count))
      .catch((err) => console.error(err));

    axios
      .get("http://localhost:8800/api/categories/cc")
      .then((res) => setTotalCategories(res.data.count))
      .catch((err) => console.error(err));
  }, []);

  let dataInfo;

  switch (type) {
    case "user":
      dataInfo = {
        title: "USERS",
        amount: totalUsers,
        link: "See all users",
        description: "Registered users",
        icon: <GroupIcon className="icon" style={{ color: "#6439ff" }} />,
      };

      break;

    case "lesson":
      dataInfo = {
        title: "LESSONS",
        amount: totalLessons,
        link: "See all lessons",
        description: "Registered lessons",
        icon: <PlayLessonIcon className="icon" style={{ color: "#6439ff" }} />,
      };
      break;
    case "category":
      dataInfo = {
        title: "CATEGORIES",
        amount: totalCategories,
        link: "See all categories",
        description: "Registered categories",
        icon: <CategoryIcon className="icon" style={{ color: "#6439ff" }} />,
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{dataInfo.title}</span>
        <span className="amount">{dataInfo.amount} </span>
        <span className="link">{dataInfo.link} </span>
      </div>
      <div className="right">
        <span className="description ">
          {data.icon}
          {data.description}
        </span>
      </div>
    </div>
  );
};

export default Widget;
