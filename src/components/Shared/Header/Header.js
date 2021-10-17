import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo2.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <Navbar collapseOnSelect expand="md" bg="white">
                <Container>
                    <Navbar.Brand className="ms-0">
                        <NavLink to="/">
                            <img alt="" src={logo} width="170" />
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/" className="ms-0 ms-md-4"><FontAwesomeIcon icon={faShoppingCart} /></NavLink>
                            {!user.email ?
                                <span className="d-block d-md-flex ">
                                    <NavLink to="/signin" className="ms-0 ms-md-4">Signin</NavLink>
                                    <NavLink to="/signup" className="btn-red text-white ms-0 ms-md-4">SignUp</NavLink>
                                </span>
                                : <span className="d-block d-md-flex align-items-center">
                                    <button type="button" className="btn-red mx-3" onClick={logOut}>Log Out</button>
                                    <span className="fw-bold">{user.displayName}</span>
                                </span>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;