import React, { useState } from 'react';
import logo from './logo.jpg';  
import './card1.css';
import Card from './card1';


const departments = {
  cse: {
    name: "Computer Science Engineering",
    details: "Explore the vast field of Computer Science Engineering.",
    additionalContent: "The CSE department offers cutting-edge research in AI and Machine Learning, with state-of-the-art laboratories and collaboration opportunities with tech giants.",
    cards: [
      { title: "Advanced Algorithms", desc: "Explore advanced algorithms in CSE.", img: logo, content: "Deep dive into complex algorithms and their real-world applications." },
      { title: "Machine Learning", desc: "Introduction to machine learning.", img: logo, content: "Discover how machine learning models are developed, trained, and applied in various fields. Learn about supervised and unsupervised learning techniques." },
      { title: "Cybersecurity", desc: "Learn about cybersecurity practices.", img: logo, content: "Understand the principles of cybersecurity and its importance in protecting digital assets." }
    ]
  },
  it: {
    name: "Information Technology",
    details: "The IT department focuses on integrating technology with business solutions.",
    additionalContent: "Our IT department provides hands-on experience in network administration, cybersecurity, and database management with industry-standard tools and methodologies.",
    cards: [
      { title: "Network Administration", desc: "Basics of network administration.", img: logo, content: "Learn to manage and configure network systems and troubleshoot network issues." },
      { title: "Database Management", desc: "Manage and design databases.", img: logo, content: "Explore the principles of database design, management, and optimization." },
      { title: "Web Development", desc: "Learn to build modern web applications.", img: logo, content: "Develop skills to create and maintain dynamic websites and web applications." }
    ]
  },
  
};

const App = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const handleDepartmentSelect = (department) => {
    setSelectedDepartment(department);
    setActiveCardIndex(null); 
  };

  const handleCardClick = (index) => {
    setActiveCardIndex(index === activeCardIndex ? null : index); 
  };

  const department = departments[selectedDepartment];
  const hasDetails = department && department.details.trim() !== '';
  const hasAdditionalContent = department && department.additionalContent.trim() !== '';

  return (
    <header className="my-header">
      <div className="container">
        {!selectedDepartment ? (
          <div className="select-departments">
            <h1>Select a Department</h1>
            <ul>
              {Object.keys(departments).map((key) => (
                <li key={key}>
                  <button onClick={() => handleDepartmentSelect(key)}>
                    {departments[key].name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <>
            <div className="department-details">
              <h1>{department.name}</h1>
              {hasDetails ? (
                <p>{department.details}</p>
              ) : (
                <p>No Details Available</p>
              )}
              {hasAdditionalContent && (
                <div className="additional-content">
                  <h2>Additional Information</h2>
                  <p>{department.additionalContent}</p>
                </div>
              )}
            </div>
            <main className={`row ${activeCardIndex !== null ? 'blur-background' : ''}`}>
              {department.cards.map((card, index) => (
                <div
                  className={`col-lg-3 col-md-6 mb-4 ${activeCardIndex !== null && activeCardIndex !== index ? 'blur-card' : ''}`}
                  key={index}
                >
                  <Card
                    title={card.title}
                    desc={card.desc}
                    img={card.img}
                    button="Click Me For More Content"
                    onClick={() => handleCardClick(index)}
                    expanded={activeCardIndex === index}
                    content={card.content} 
                  />
                </div>
              ))}
            </main>
          </>
        )}
      </div>
    </header>
  );
};

export default App;
