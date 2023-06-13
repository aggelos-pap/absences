// DeleteLesson.jsx

import { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./deletelesson.scss";
import axios from "axios";

const DeleteLesson = () => {
  const [lessons, setLessons] = useState([]);
  const [selectedLesson, setSelectedLesson] = useState(null);

  useEffect(() => {
    fetchLessons();
  }, []);

  const fetchLessons = async () => {
    const res = await axios.get("http://localhost:8800/api/lessons");
    setLessons(res.data);
  };

  const handleLessonSelect = (e) => {
    setSelectedLesson(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      await axios.delete(`http://localhost:8800/api/lessons/${selectedLesson}`);
      setSelectedLesson(null);
      fetchLessons();
    } catch (error) {
      console.error("Error deleting lesson:", error);
    }
  };

  return (
    <div className="deleteLesson">
      <Sidebar />
      <div className="deleteLessonContainer">
        <Navbar />
        <div className="deleteLessonContent">
          <form onSubmit={handleDelete}>
            <div className="formSelect">
              <label htmlFor="lesson">Select Lesson:</label>
              <select id="lesson" onChange={handleLessonSelect}>
                <option>Select a lesson</option>
                {lessons.map((lesson) => (
                  <option key={lesson._id} value={lesson._id}>
                    {lesson.title}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit">Delete Lesson</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteLesson;
