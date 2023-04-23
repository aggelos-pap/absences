import React, { useState, useEffect } from "react";
import "./main.scss";
import axios from "axios";

const Main = () => {
  const testingId = 323;

  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [serverdata, setServerdata] = useState([]);

  useEffect(() => {
    axios
      .get("http://172.24.0.150:8800/api/users/")
      .then((res) => setServerdata(res.data));
  }, []);
  // console.log(serverdata);

  const amArray = serverdata.map((item) => item.am);
  console.log(amArray);

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(text);

    if (amArray.includes(String(parseInt(text)))) {
      setResult(
        <>
          <h1>User exists</h1>
        </>
      );
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
          <p>User mail</p>
          <p>User mail</p>
          <p>User mail</p>
          <p>User mail</p>
          <p>User mail</p>
          <p>User mail</p>
          <p>User mail</p>
          <p>User mail</p>
          <p>User mail</p>
          <p>User mail</p>
          <p>User mail</p>
          <p>User mail</p>
          <p>User mail</p>
          <p>User mail</p>
          <p>User mail</p>
          <p>User mail</p>
          <p>User mail</p>
          <p>User mail</p>
          <p>User mail</p>
          <p>User mail</p>
          <p>User mail</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
