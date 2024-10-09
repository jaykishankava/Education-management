import React, { useState } from 'react';
import Header from '../Component/Header';

const TeacherDashboard = () => {
  const [courses, setCourses] = useState([
    { id: 1, title: 'Math 101', assignments: [{ title: 'Assignment 1', dueDate: '2024-10-15' }] }
  ]);
  const [newAssignment, setNewAssignment] = useState({ courseId: '', title: '', dueDate: '' });

  // Handle form input for assignment
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAssignment({ ...newAssignment, [name]: value });
  };

  // Add assignment to a course
  const addAssignment = () => {
    const updatedCourses = courses.map(course => {
      if (course.id === parseInt(newAssignment.courseId)) {
        course.assignments.push({ title: newAssignment.title, dueDate: newAssignment.dueDate });
      }
      return course;
    });
    setCourses(updatedCourses);
    setNewAssignment({ courseId: '', title: '', dueDate: '' });
  };

  return (
    <div className="container-fluid mx-auto p-4">
      <Header />
      <h1 className="text-center mb-4">Teacher Dashboard</h1>

      {/* Assignments Form */}
      <section className="mb-4">
        <h2 className="h4 mb-3">Add Assignment</h2>
        <form className="mb-4">
          <div className="mb-3">
            <select
              name="courseId"
              value={newAssignment.courseId}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">Select Course</option>
              {courses.map(course => (
                <option key={course.id} value={course.id}>{course.title}</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="title"
              placeholder="Assignment Title"
              value={newAssignment.title}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="date"
              name="dueDate"
              value={newAssignment.dueDate}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <button type="button" onClick={addAssignment} className="btn btn-primary">Add Assignment</button>
        </form>
      </section>

      {/* Display Courses and Assignments */}
      <section>
        <h2 className="h4 mb-3">My Courses</h2>
        {courses.map(course => (
          <div key={course.id} className="mb-4 border rounded p-3">
            <h3 className="h5">{course.title}</h3>
            <ul className="list-unstyled">
              {course.assignments.map((assignment, index) => (
                <li key={index}>
                  {assignment.title} - Due: {assignment.dueDate}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TeacherDashboard;
