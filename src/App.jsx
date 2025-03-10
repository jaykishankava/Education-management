import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './Pages/AdminDashboard';
import TeacherDashboard from './Pages/TeacherDashboard';
import StudentDashboard from './Pages/StudentDashboard';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<AdminDashboard/>} />
        <Route path="/teacher" element={<TeacherDashboard/>} />
        <Route path="/student" element={<StudentDashboard/>} />
      </Routes>
    </Router>
  );
};

export default App;
