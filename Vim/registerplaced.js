import React, { useState } from 'react';
import axios from 'axios';

const Placedstudentsregister = () => {
    const [student, setStudent] = useState({
        name: '',
        department: '',
        placedCompany: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/registerplaced', student);
            console.log(response.data); // Log response data
            alert('Student registered successfully!');
        } catch (error) {
            console.error('Error registering student:', error);
            alert('Error registering student.');
        }
    };

    return (
        <div>
            <h1>Register Placed Students</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Student Name"
                    value={student.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="department"
                    placeholder="Department"
                    value={student.department}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="placedCompany"
                    placeholder="Placed Company"
                    value={student.placedCompany}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Placedstudentsregister;
