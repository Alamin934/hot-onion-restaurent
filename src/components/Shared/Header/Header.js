import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo2.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <Navbar collapseOnSelect expand="md" bg="white">
                <Container>
                    <Navbar.Brand href="#home" className="ms-0">
                        <img alt="" src={logo} width="170" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link to="" className="ms-0 ms-md-4"><FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
                            <Nav.Link to="/signin" className="ms-0 ms-md-4">Signin</Nav.Link>
                            <Nav.Link to="/signup" className="btn-red text-white ms-0 ms-md-4">SignUp</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;