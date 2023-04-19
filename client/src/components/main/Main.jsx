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
      <p className="infoparagraph">Enter your id number to view absences</p>
      <hr />

      <div className="form">
        <input
          className="textinput"
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Enter your id number"
        />

        <input
          className="mainbutton"
          type="button"
          value="Search"
          onClick={handleClick}
        />
      </div>
      {result}
    </div>
  );
};

export default Main;
