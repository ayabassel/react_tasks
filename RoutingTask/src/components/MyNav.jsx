import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'

export function MyNav() {
    // let username = "Log In"
    // const location = useLocation()
    // if (location.state) {
    //     username = location.state.username
    // }
    return (

        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/home">HEIN</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink  className="nav-link" to="/home">Home</NavLink>
                    <NavLink  className="nav-link" to="/products">Products</NavLink>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                        <NavLink className="nav-link" to="/login">Log In</NavLink>
                 </Navbar.Collapse>

            </Container>
        </Navbar>
           )

}