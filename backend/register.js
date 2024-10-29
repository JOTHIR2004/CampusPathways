// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000; // Port set to 4000

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log('MongoDB connection error:', err));

// Define the Student schema
const placedStudentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    department: { type: String, required: true },
    placedCompany: { type: String, required: true },
});

const PlacedStudent = mongoose.model('PlacedStudent', placedStudentSchema);

// API endpoint to register placed students
app.post('/api/registerplaced', async (req, res) => {
    console.log('Request body:', req.body); // Log the request body
    const { name, department, placedCompany } = req.body;

    try {
        // Create a new student instance
        const newStudent = new PlacedStudent({ name, department, placedCompany });
        await newStudent.save();
        res.status(201).json({ msg: 'Student registered successfully' });
    } catch (err) {
        console.error('Error registering student:', err);
        res.status(500).json({ msg: 'Error registering student' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
