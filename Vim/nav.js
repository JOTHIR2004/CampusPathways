import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';

const NavBar = () => {
  return (
    <Navbar bg="warning" expand="lg" className="py-2"> 
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
            <Nav.Link as={Link} to="/" className="fs-6">Home</Nav.Link> 

            <NavDropdown title="Company Details" id="companyDetailsDropdown">
              <NavDropdown.Item as={Link} to="/companydetails/2020">2020</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/companydetails/2021">2021</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/companydetails/2022">2022</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/companydetails/2023">2023</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/companydetails/2024">2024</NavDropdown.Item>
            </NavDropdown>
        
            <NavDropdown title="Placed Students" id="placedStudentsDropdown">
              <NavDropdown.Item as={Link} to="/placedstudents/2020">2020</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/placedstudents/2021">2021</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/placedstudents/2022">2022</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/placedstudents/2023">2023</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/placedstudents/2024">2024</NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link as={Link} to="/contact" className="fs-6">Contact</Nav.Link>
            <Nav.Link as={Link} to="/login" className="fs-6">Login</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
