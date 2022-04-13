import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../images/logo.png'
const Header = () => {
    const navigate=useNavigate()
    return (
        <div className='sticky-top'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container >
                    <div className='d-flex justify-content-between items-center  w-100'>
                        <Navbar.Brand href="#home"><img onClick={()=>navigate('/')} height={43} src={logo} alt="" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <div>
                                <Nav>
                                    <Nav.Link href="hero#services">Services</Nav.Link>
                                    <Nav.Link href="hero#experts">
                                        Experts
                                    </Nav.Link>
                                </Nav>
                            </div>
                            <Nav>
                                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                                    <Nav.Link as={Link} to="/login">
                                        Login
                                    </Nav.Link>
                                </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;