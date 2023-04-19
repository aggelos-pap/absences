import React, { useState } from "react";
import "./main.scss";

const Main = () => {
  const testingId = 323;

  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  function handleClick() {
    console.log(text);
    let result = null;
    if (parseInt(text) === testingId) {
      setResult(
        <>
          <h1>Access granted</h1>
        </>
      );
    } else {
      setResult(
        <>
          <h1>Access denied</h1>
        </>
      );
    }
    return result;
  }

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
        </div>
      </div>
    </div>
  );
};

export default Main;
