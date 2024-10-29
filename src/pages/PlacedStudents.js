import React from 'react';
import { useNavigate } from 'react-router-dom';
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

const Placed = () => {
  const navigate = useNavigate();

  const placedStudents = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', department: 'Computer Science', company: 'Tech Corp', position: 'Software Engineer' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', department: 'Electrical Engineering', company: 'Electro Inc.', position: 'Electrical Engineer' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', department: 'Mechanical Engineering', company: 'Mech Solutions', position: 'Mechanical Designer' },
    { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com', department: 'Civil Engineering', company: 'BuildIt Ltd.', position: 'Civil Engineer' },
  ];

  const handleRegisterClick = () => {
    navigate('/registerplaced'); 
  };

  return (
    <>
    <div>
      <h1 style={{backgroundColor :'green', textAlign:'center'}}>Placed Students</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {placedStudents.map(student => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
      <button onClick={handleRegisterClick} style={{ marginTop: '20px' }}>
        Placed Students Register Here
      </button>
    </div>
    </>
  );
};

export default Placed;
