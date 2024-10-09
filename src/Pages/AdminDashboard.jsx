import React, { useState } from 'react';
import CourseForm from './CourseForm';
import EnrollStudentForm from './EnrollStudentForm';
import AssignGradesForm from './AssignGradesForm';
import DataTable from './DataTable';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Header from '../Component/Header';

const AdminDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const [grades, setGrades] = useState([]);

  // Handlers for form submissions
  const handleCourseSubmit = (course) => {
    setCourses([...courses, course]);
  };

  const handleStudentEnroll = (student) => {
    setStudents([...students, student]);
  };

  const handleGradeAssign = (grade) => {
    setGrades([...grades, grade]);
  };

  return (
    <Container className="mt-4 ">
        <Header/>
      <h1 className="text-center mt-3 mb-4">Admin Dashboard</h1>

      <Row className="mb-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Create Course</Card.Title>
              <CourseForm onSubmit={handleCourseSubmit} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Enroll Student</Card.Title>
              <EnrollStudentForm onEnroll={handleStudentEnroll} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Assign Grades</Card.Title>
              <AssignGradesForm onAssign={handleGradeAssign} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h2 className="mb-3">Course</h2>
      <Card className="mb-4">
        <Card.Body>
          <DataTable data={courses} columns={['title', 'description', 'startDate', 'endDate', 'teacher']} filterKey="title" />
        </Card.Body>
      </Card>

      <h2 className="mb-3">Students</h2>
      <Card className="mb-4">
        <Card.Body>
          <DataTable data={students} columns={['name', 'course']} filterKey="name" />
        </Card.Body>
      </Card>

      <h2 className="mb-3">Grades</h2>
      <Card>
        <Card.Body>
          <DataTable data={grades} columns={['student', 'course', 'grade']} filterKey="student" />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AdminDashboard;
