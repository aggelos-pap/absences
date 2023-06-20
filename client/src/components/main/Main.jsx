// import React, { useState, useEffect } from "react";
// import "./main.scss";
// import axios from "axios";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";

// const Main = () => {
//   const [text, setText] = useState("");
//   const [result, setResult] = useState(null);
//   const [serverdata, setServerdata] = useState([]);
//   const [displayuser, setDisplayuser] = useState(null);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8800/api/users/")
//       .then((res) => setServerdata(res.data));
//   }, []);

//   const amArray = serverdata.map((item) => item.am);

//   const handleClick = async (e) => {
//     e.preventDefault();

//     if (amArray.includes(String(parseInt(text)))) {
//       setResult(<h1>User exists</h1>);

//       const selectedAm = parseInt(text);
//       const requestedAm = serverdata.filter((item) => item.am == selectedAm);

//       // Formatting the date
//       const formattedDate = new Date(
//         requestedAm[0].createdAt
//       ).toLocaleDateString();
//       requestedAm[0].createdAt = formattedDate;

//       setDisplayuser(requestedAm);
//     } else {
//       setResult(<h1>Wrong user am</h1>);
//     }
//   };

//   const exportPDF = () => {
//     const input = document.getElementById("pdfContent");

//     html2canvas(input)
//       .then((canvas) => {
//         const imgData = canvas.toDataURL("image/png");
//         const pdf = new jsPDF();
//         pdf.addImage(imgData, "JPEG", 0, 0);
//         pdf.save("userDetails.pdf");
//       })
//       .catch((err) => console.log(err));
//   };

//   function handleChange(e) {
//     setText(e.target.value);
//   }

//   return (
//     <div className="main">
//       <div className="formContainer">
//         <div className="left">
//           <span className="logo">User search</span>
//           <div className="form">
//             <p className="infoparagraph">
//               Enter your id number to view absences
//             </p>
//             <input
//               className="textinput"
//               type="text"
//               value={text}
//               onChange={handleChange}
//               placeholder=""
//             />

//             <input
//               className="mainbutton"
//               type="button"
//               value="Search"
//               onClick={handleClick}
//             />

//             {result}
//           </div>
//         </div>
//         <div className="right">
//           <span className="logo">User Info</span>
//           {displayuser && (
//             <>
//               <div id="pdfContent" className="generatedFromApi">
//                 <p>Username: {displayuser[0].username}</p>
//                 <p>Email: {displayuser[0].email}</p>
//                 <p>Αριθμός μητρώου: {displayuser[0].am}</p>
//                 <p>Ονοματεπώνυμο: {displayuser[0].name}</p>
//                 <p>Created At: {displayuser[0].createdAt}</p>
//               </div>
//               <button className="downloadButton" onClick={exportPDF}>
//                 Download PDF
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;

import React, { useState, useEffect } from "react";
import "./main.scss";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Main = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [serverdata, setServerdata] = useState([]);
  const [displayuser, setDisplayuser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8800/api/users/")
      .then((res) => setServerdata(res.data));
  }, []);

  const amArray = serverdata.map((item) => item.am);

  const handleClick = async (e) => {
    e.preventDefault();

    if (amArray.includes(String(parseInt(text)))) {
      setResult(<h1>User exists</h1>);

      const selectedAm = parseInt(text);

      const requestedAm = serverdata.filter((item) => item.am == selectedAm);
      setDisplayuser(requestedAm);
    } else {
      setResult(<h1>Wrong user am</h1>);
    }
  };

  const exportPDF = () => {
    const input = document.getElementById("pdfContent");

    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(imgData, "JPEG", 0, 0);
        pdf.save("userDetails.pdf");
      })
      .catch((err) => console.log(err));
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
          </div>
        </div>
        <div className="right">
          <span className="logo">User Info</span>
          {displayuser && (
            <>
              <div id="pdfContent" className="generatedFromApi">
                <p>Username: {displayuser[0].username}</p>
                <p>Email: {displayuser[0].email}</p>
                <p>Αριθμός μητρώου: {displayuser[0].am}</p>
                <p>Ονοματεπώνυμο: {displayuser[0].name}</p>
                <p>
                  Created At:{" "}
                  {new Date(displayuser[0].createdAt).toLocaleString()}
                </p>

                <h3>Lessons:</h3>
                {Object.keys(displayuser[0].lessons).map((key) => (
                  <p key={key}>
                    Lesson {key}: {displayuser[0].lessons[key]}
                  </p>
                ))}

                <h3>Absences:</h3>
                {Object.keys(displayuser[0].absences).map((key) => (
                  <p key={key}>
                    Lesson {key}: Absences: {displayuser[0].absences[key]}
                  </p>
                ))}
              </div>
              <button className="downloadButton" onClick={exportPDF}>
                Download PDF
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
