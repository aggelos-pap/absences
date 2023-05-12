import React, { useState, useEffect } from "react";
import "./main.scss";
import axios from "axios";

const Main = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [serverdata, setServerdata] = useState([]);
  const [displayuser, setDisplayuser] = useState(![]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/api/users/")
      .then((res) => setServerdata(res.data));
  }, []);

  const amArray = serverdata.map((item) => item.am);
  console.log(serverdata);
  const handleClick = async (e) => {
    e.preventDefault();

    if (amArray.includes(String(parseInt(text)))) {
      setResult(
        <>
          <h1>User exists</h1>
        </>
      );
      //Fetch mongodb user info that depends on the am

      const info = serverdata;

      const selectedAm = parseInt(text);

      const requestedAm = serverdata.filter((item) => item.am == selectedAm);
      setDisplayuser(requestedAm);
    } else {
      setResult(
        <>
          <h1>Wrong user am</h1>
        </>
      );
    }
  };

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div className="main">
      <div className="formContainer">
        <div className="left">
          <span className="logo">User search</span>
          <div className="form">
            <p className="infoparagraph">
              Enter your id number to view absences
            </p>
            <input
              className="textinput"
              type="text"
              value={text}
              onChange={handleChange}
              placeholder=""
            />

            <input
              className="mainbutton"
              type="button"
              value="Search"
              onClick={handleClick}
            />

            {result}
            {/* end of form */}
          </div>
          {/* end of left */}
        </div>
        <div className="right">
          <span className="logo">User Info</span>
          {displayuser && (
            <div className="generatedFromApi">
              <p>Username: {displayuser[0].username}</p>
              <p>Email: {displayuser[0].email}</p>
              <p>Αριθμός μητρώου: {displayuser[0].am}</p>
              <p>Ονοματεπώνυμο: {displayuser[0].name}</p>
              <p>Created At: {displayuser[0].createdAt.toLocaleString()}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
