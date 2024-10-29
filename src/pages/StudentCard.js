import React from 'react';
import './StudentCard.css'; 

const StudentCard = ({ student }) => {
  return (
    <div className="student-card">
      <h2 className="student-name">{student.name}</h2>
      <p className="student-email">Email: {student.email}</p>
      <p className="student-department">Department: {student.department}</p>
      <p className="student-company">Company: {student.company}</p>
      <p className="student-position">Position: {student.position}</p>
    </div>
  );
};

export default StudentCard;
