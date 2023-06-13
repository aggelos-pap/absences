import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";

const NewCategory = () => {
  const [formData, setFormData] = useState({
    name: "",
    semesters: [""],
    amountOfLessons: 0,
    lessonsPerSemester: {},
  });

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...formData.semesters];
    list[index] = value;
    setFormData({ ...formData, semesters: list });
  };

  const handleAddInput = () => {
    setFormData({ ...formData, semesters: [...formData.semesters, ""] });
  };

  const handleRemoveInput = (index) => {
    const list = [...formData.semesters];
    list.splice(index, 1);
    setFormData({ ...formData, semesters: list });
  };

  const handleLessonsChange = (e, semester) => {
    setFormData({
      ...formData,
      lessonsPerSemester: {
        ...formData.lessonsPerSemester,
        [semester]: e.target.value,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/categories", formData);
      // Redirect or perform any other necessary action after successful category creation
      // ...
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add Category</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              {formData.semesters.map((semester, i) => (
                <div key={i} className="formInput">
                  <label htmlFor={`semester${i}`}>Semester:</label>
                  <input
                    type="text"
                    id={`semester${i}`}
                    name={`semester${i}`}
                    value={semester}
                    onChange={(e) => handleInputChange(e, i)}
                    required
                  />

                  <label htmlFor={`semester${i}Lessons`}>
                    Number of Lessons:
                  </label>
                  <input
                    type="number"
                    id={`semester${i}Lessons`}
                    name={`semester${i}Lessons`}
                    value={formData.lessonsPerSemester[semester] || ""}
                    onChange={(e) => handleLessonsChange(e, semester)}
                    required
                  />

                  {formData.semesters.length !== 1 && (
                    <button type="button" onClick={() => handleRemoveInput(i)}>
                      Remove
                    </button>
                  )}

                  {formData.semesters.length - 1 === i && (
                    <button type="button" onClick={handleAddInput}>
                      Add
                    </button>
                  )}
                </div>
              ))}

              <button type="submit">Add Category</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCategory;
