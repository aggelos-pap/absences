import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const EditCategory = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    semesters: [""],
    amountOfLessons: 0,
    lessonsPerSemester: {},
  });

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get(`http://localhost:8800/api/categories`);
      setCategories(res.data);
      setSelectedCategoryId(res.data[0]?._id);
    };
    getCategories();
  }, []);

  useEffect(() => {
    const getCategory = async () => {
      if (selectedCategoryId) {
        const res = await axios.get(
          `http://localhost:8800/api/categories/${selectedCategoryId}`
        );
        setFormData(res.data);
      }
    };
    getCategory();
  }, [selectedCategoryId]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSemesterChange = (e, index) => {
    const newSemesters = [...formData.semesters];
    newSemesters[index] = e.target.value;
    setFormData({ ...formData, semesters: newSemesters });
  };

  const handleLessonsPerSemesterChange = (e, semester) => {
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

    if (selectedCategoryId) {
      try {
        await axios.put(
          `http://localhost:8800/api/categories/${selectedCategoryId}`,
          formData
        );

        // handle successful update, maybe with a success message or refresh the categories list
      } catch (error) {
        console.error("Error updating category:", error);
      }
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Edit Category</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label htmlFor="categorySelect">Select a Category:</label>
                <select
                  id="categorySelect"
                  value={selectedCategoryId || ""}
                  onChange={(e) => setSelectedCategoryId(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="formInput">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="formInput">
                <label htmlFor="amountOfLessons">
                  Total Number of Lessons:
                </label>
                <input
                  type="number"
                  id="amountOfLessons"
                  name="amountOfLessons"
                  value={formData.amountOfLessons}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {formData.semesters.map((semester, index) => (
                <div className="formInput" key={index}>
                  <label htmlFor={`semester${index}`}>
                    Semester {index + 1}:
                  </label>
                  <input
                    type="text"
                    id={`semester${index}`}
                    value={semester}
                    onChange={(e) => handleSemesterChange(e, index)}
                    required
                  />
                  <label htmlFor={`lessonsPerSemester${index}`}>
                    Number of Lessons:
                  </label>
                  <input
                    type="number"
                    id={`lessonsPerSemester${index}`}
                    value={formData.lessonsPerSemester[semester] || ""}
                    onChange={(e) =>
                      handleLessonsPerSemesterChange(e, semester)
                    }
                    required
                  />
                </div>
              ))}
              <button type="submit" className="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCategory;
