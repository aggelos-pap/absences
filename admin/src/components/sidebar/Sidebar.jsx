import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import CategoryIcon from "@mui/icons-material/Category";
import PlayLessonIcon from "@mui/icons-material/PlayLesson";
import InsightsIcon from "@mui/icons-material/Insights";
import TuneIcon from "@mui/icons-material/Tune";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

// import {
//   DashboardIcon,
//   GroupIcon,
//   CategoryIcon,
//   PlayLessonIcon,
//   InsightsIcon,
//   TuneIcon,
//   LogoutIcon,
//   PersonIcon,
// } from "@mui/icons-material";
const Sidebar = () => {
  const handleLogout = (e) => {
    e.preventDefault();
    dispatchAuth({ type: "LOGOUT" });
    window.location.reload();
  };

  const { dispatch } = useContext(DarkModeContext);
  const { dispatchAuth } = useContext(AuthContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Absences</span>
        </Link>
      </div>

      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">ADMIN FUNCTIONS </p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <GroupIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/categories" style={{ textDecoration: "none" }}>
            <li>
              <CategoryIcon className="icon" />
              <span>Categories</span>
            </li>
          </Link>
          <Link to="/lessons" style={{ textDecoration: "none" }}>
            <li>
              <PlayLessonIcon className="icon" />
              <span>Lessons</span>
            </li>
          </Link>
          <p className="title">SITE INFO</p>
          <li>
            <InsightsIcon className="icon" />
            <span>Statistics</span>
          </li>
          <li>
            <TuneIcon className="icon" />
            <span>Settings</span>
          </li>
          <li>
            <PersonIcon className="icon" />
            <span>Profile</span>
          </li>
          <li onClick={handleLogout}>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
