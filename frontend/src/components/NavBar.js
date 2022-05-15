import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'


export default function NavBar() {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#dashboard">Dashboard</Nav.Link>
                    <Nav.Link href="#create-bugs">Create Bugs</Nav.Link>
                    <Nav.Link href="#view-bugs">View Bugs</Nav.Link>
                </Nav>
            </Container>
        </Navbar>


    )
}

