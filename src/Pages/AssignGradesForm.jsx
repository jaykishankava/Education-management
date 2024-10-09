import React, { useState } from 'react';

const AssignGradesForm = ({ onAssign }) => {
  const [grade, setGrade] = useState({ student: '', course: '', grade: '' });

  const handleChange = (e) => {
    setGrade({ ...grade, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAssign(grade);
    setGrade({ student: '', course: '', grade: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h3 className="text-lg font-bold mb-2">Assign Grade</h3>
      <input
        type="text"
        name="student"
        placeholder="Student Name"
        value={grade.student}
        onChange={handleChange}
        className="border p-2 mr-2 mb-2"
      />
      <input
        type="text"
        name="course"
        placeholder="Course Title"
        value={grade.course}
        onChange={handleChange}
        className="border p-2 mr-2 mb-2"
      />
      <input
        type="text"
        name="grade"
        placeholder="Grade"
        value={grade.grade}
        onChange={handleChange}
        className="border p-2 mr-2 mb-2"
      />
      <button type="submit" className="btn btn-primary p-2">Assign</button>
    </form>
  );
};

export default AssignGradesForm;
