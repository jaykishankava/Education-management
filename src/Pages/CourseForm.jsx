import React, { useState } from 'react';

const CourseForm = ({ onSubmit }) => {
  const [course, setCourse] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    teacher: '',
  });

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(course);
    setCourse({ title: '', description: '', startDate: '', endDate: '', teacher: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 ">
      <h3 className="text-lg font-bold mb-2">Create a Course</h3>
      <input
        type="text"
        name="title"
        placeholder="Course Title"
        value={course.title}
        onChange={handleChange}
        className="border p-2 mr-2 mb-2"
      />
      <input
        type="text"
        name="description"
        placeholder="Course Description"
        value={course.description}
        onChange={handleChange}
        className="border p-2 mr-2 mb-2"
      />
     
      <input
        type="date"
        name="startDate"
        value={course.startDate}
        onChange={handleChange}
        className="border p-2 mr-2 mb-2"
      />
      <input
        type="date"
        name="endDate"
        value={course.endDate}
        onChange={handleChange}
        className="border p-2 mr-2 mb-2"
      />
      <input
        type="text"
        name="teacher"
        placeholder="Assigned Teacher"
        value={course.teacher}
        onChange={handleChange}
        className="border p-2 mr-2 mb-2"
      />
      <button type="submit" className="btn btn-primary p-2">Submit</button>
    </form>
  );
};

export default CourseForm;
