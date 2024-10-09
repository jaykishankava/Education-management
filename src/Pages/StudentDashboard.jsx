import React, { useState } from 'react';
import Header from '../Component/Header';

const StudentDashboard = () => {
  const [courses, setCourses] = useState([
    { id: 1, title: 'Math 101', assignments: [{ title: 'Assignment 1', dueDate: '2024-10-15' }] }
  ]);
  const [submissions, setSubmissions] = useState({});

  // Handle assignment submission
  const handleSubmit = (courseId, assignmentTitle, submission) => {
    setSubmissions({ ...submissions, [`${courseId}-${assignmentTitle}`]: submission });
  };

  return (
    <div className="container-fluid mx-auto p-4">
      <Header />
      <h1 className="text-center mb-4">Student Dashboard  & Submit Assignments</h1>
      
      {/* Display Enrolled Courses */}
      <section>
        <h2 className="h3 mb-4">My Courses</h2>
        {courses.map(course => (
          <div key={course.id} style={{backgroundColor:'white'}} className=" col-lg-6 mb-4  border rounded p-3">
            <h3 className="h5">{course.title}</h3>
            <ul className="list-unstyled">
              {course.assignments.map(assignment => (
                <li key={assignment.title} className="mb-3">
                  {assignment.title} - Due: {assignment.dueDate}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit(course.id, assignment.title, e.target.submission.value);
                    }}
                    className="mt-2"
                    
                  >
                    <input
                      type="text"
                      name="submission"
                      placeholder="Submit Assignment URL"
                      className="form-control mb-2"
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
                  <p className="mt-2">
                    Submission: {submissions[`${course.id}-${assignment.title}`] || 'Not submitted yet'}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default StudentDashboard;
