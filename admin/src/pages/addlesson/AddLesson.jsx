import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const NewLesson = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
  });

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get(`http://localhost:8800/api/categories`);
      setCategories(res.data);
      setFormData((formData) => ({ ...formData, category: res.data[0]?._id }));
    };
    getCategories();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/lessons", formData);
      setFormData({
        title: "",
        content: "",
        category: categories[0]?._id,
      });
      // handle success
    } catch (error) {
      console.error("Error creating lesson:", error);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Lesson</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="formInput">
                <label htmlFor="content">Content:</label>
                <input
                  type="text"
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="formInput">
                <label htmlFor="categorySelect">Category:</label>
                <select
                  id="categorySelect"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                >
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit">Add Lesson</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLesson;
