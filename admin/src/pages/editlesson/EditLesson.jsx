// EditLesson.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./editlesson.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const EditLesson = () => {
  const [lessons, setLessons] = useState([]);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    getLessons();
  }, []);

  const getLessons = async () => {
    try {
      const response = await axios.get("http://localhost:8800/api/lessons");
      setLessons(response.data);
    } catch (error) {
      console.error("Error fetching lessons:", error);
    }
  };

  const handleLessonSelect = (lesson) => {
    setSelectedLesson(lesson);
    setFormData({
      title: lesson.title,
      content: lesson.content,
    });
    setIsSelected(true);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedLesson = {
        ...formData,
      };

      await axios.put(
        `http://localhost:8800/api/lessons/${selectedLesson._id}`,
        updatedLesson
      );

      // Clear form data and reset selection
      setFormData({
        title: "",
        content: "",
      });
      setSelectedLesson(null);
      setIsSelected(false);
    } catch (error) {
      console.error("Error updating lesson:", error);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Edit Lesson</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <p>Select lesson to edit</p>

            <select
              value={selectedLesson?.title || ""}
              onChange={(e) =>
                handleLessonSelect(
                  lessons.find((lesson) => lesson.title === e.target.value)
                )
              }
            >
              <option value="">Select Lesson</option>
              {lessons.map((lesson) => (
                <option key={lesson._id} value={lesson.title}>
                  {lesson.title}
                </option>
              ))}
            </select>
          </div>
          <div className="right">
            {isSelected && (
              <form onSubmit={handleSubmit}>
                <div className="formInput">
                  <label htmlFor="title">Title:</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="formInput">
                  <label htmlFor="content">Content:</label>
                  <textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                  />
                </div>
                <button type="submit">Update Lesson</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditLesson;
