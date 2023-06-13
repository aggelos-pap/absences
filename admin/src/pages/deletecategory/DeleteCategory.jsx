import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const DeleteCategory = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get(`http://localhost:8800/api/categories`);
      setCategories(res.data);
      setSelectedCategoryId(res.data[0]?._id);
    };
    getCategories();
  }, []);

  const handleDelete = async () => {
    if (selectedCategoryId) {
      try {
        await axios.delete(
          `http://localhost:8800/api/categories/${selectedCategoryId}`
        );
        setCategories(
          categories.filter((category) => category._id !== selectedCategoryId)
        );
        setSelectedCategoryId(null);
        // Handle successful delete, maybe with a success message or refresh the categories list
      } catch (error) {
        console.error("Error deleting category:", error);
      }
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Delete Category</h1>
        </div>
        <div className="bottom">
          <div className="right">
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
            <button type="button" onClick={handleDelete} className="delete">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteCategory;
