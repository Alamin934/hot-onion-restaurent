import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import footerLogo from '../../../images/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="py-5 bg-dark text-light footer">
            {/* FOOTER WIDGET */}
            <div>
                <Container>
                    <Row className="d-flex justify-content-around">
                        <Col xs={6} md={3}>
                            <img src={footerLogo} width="160" alt="" />
                        </Col>
                        <Col xs={6} md={3}>
                            <Nav className="flex-column">
                                <Nav.Link href="#" className="text-light">About Online food</Nav.Link>
                                <Nav.Link href="#" className="text-light">Read our blog</Nav.Link>
                                <Nav.Link href="#" className="text-light">Sign up to deliver</Nav.Link>
                                <Nav.Link href="#" className="text-light">Add your resturent</Nav.Link>
                            </Nav>
                        </Col>
                        <Col xs={6} md={3} className="mt-3 mt-md-0">
                            <Nav className="flex-column">
                                <Nav.Link href="#" className="text-light">Get help</Nav.Link>
                                <Nav.Link href="#" className="text-light">Read FAQs</Nav.Link>
                                <Nav.Link href="#" className="text-light">View all cities</Nav.Link>
                                <Nav.Link href="#" className="text-light">Returents near me</Nav.Link>
                            </Nav>
                        </Col>
                        <Col xs={6} md={3} className="mt-3 mt-md-0">
                            <Nav className="flex-column">
                                <Nav.Link href="#" className="text-light">About Online food</Nav.Link>
                                <Nav.Link href="#" className="text-light">Read our blog</Nav.Link>
                                <Nav.Link href="#" className="text-light">Sign up to deliver</Nav.Link>
                                <Nav.Link href="#" className="text-light">Add your resturent</Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* COPY RIGHT FOOTER */}
            <div className="pt-5 mt-3">
                <Container>
                    <Row className="d-flex align-items-center">
                        <Col xs={12} md={6}>
                            <p className="text-muted mb-0 text-center text-md-start"><small>Copyright &copy; 2021 Online food</small></p>
                        </Col>
                        <Col xs={12} md={6} className="mt-3 mt-md-0">
                            <Nav className="d-flex justify-content-center justify-content-md-end">
                                <Nav.Link href="#" className="text-light">Privacy Policy.</Nav.Link>
                                <Nav.Link href="#" className="text-light">Terms of Use</Nav.Link>
                                <Nav.Link href="#" className="text-light">Pricing</Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    );
};

export default Footer;