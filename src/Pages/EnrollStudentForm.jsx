import React, { useState } from 'react';

const EnrollStudentForm = ({ onEnroll }) => {
  const [student, setStudent] = useState({ name: '', course: '' });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEnroll(student);
    setStudent({ name: '', course: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h3 className="text-lg font-bold mb-2">Enroll Student</h3>
      <input
        type="text"
        name="name"
        placeholder="Student Name"
        value={student.name}
        onChange={handleChange}
        className="border p-2 mr-2 mb-2"
      />
      <input
        type="text"
        name="course"
        placeholder="Course Title"
        value={student.course}
        onChange={handleChange}
        className="border p-2 mr-2 mb-2"
      />
      <button type="submit" className="btn btn-primary p-2">Enroll</button>
    </form>
  );
};

export default EnrollStudentForm;
