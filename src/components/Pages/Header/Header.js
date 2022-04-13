import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.png'
const Header = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container className='d-flex justify-content-between align-items-center'>
                    <Navbar.Brand href="#home"><img width={250} src={logo} alt="" /></Navbar.Brand>
                    <Nav className="">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;