import { faArrowCircleRight, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './ChooseUs.css';

const ChooseUs = () => {
    return (
        <div className="py-5 choose-us">
            <Container>
                <div>
                    <h1>Why you choose us</h1>
                    <p className="mt-3 w-50">Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prosperous increasing surrounded.</p>
                </div>
                <Row xs={1} md={2} lg={3} className="g-4 mt-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://i.ibb.co/s9jWWWk/adult-blur-blurred-background-687824.png" />
                            <Card.Body className="d-flex mt-3">
                                <div>
                                    <img src="https://i.ibb.co/7tMdnzJ/Group-204.png" alt="" />
                                </div>
                                <div className="ms-3">
                                    <Card.Title>Fast Delevery</Card.Title>
                                    <Card.Text className="text-muted mb-2">
                                        <small>Keep your systems insync with automated web hook based notifications each time ink paid and how we dream about our future</small>
                                    </Card.Text>
                                    <button className="btn ps-0">See more <FontAwesomeIcon icon={faArrowCircleRight} /></button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://i.ibb.co/8b4dH0B/chef-cook-food-33614.png" />
                            <Card.Body className="d-flex mt-3">
                                <div>
                                    <img src="https://i.ibb.co/chXN1HL/Group-1133.png" alt="" />
                                </div>
                                <div className="ms-3">
                                    <Card.Title>A Good Auto Responder</Card.Title>
                                    <Card.Text className="text-muted mb-2">
                                        <small>Keep your systems insync with automated web hook based notifications each time ink paid and how we dream about our future</small>
                                    </Card.Text>
                                    <button className="btn ps-0">See more <FontAwesomeIcon icon={faArrowCircleRight} /></button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://i.ibb.co/qRbZ86W/architecture-building-city-2047397.png" />
                            <Card.Body className="d-flex mt-3">
                                <div>
                                    <img src="https://i.ibb.co/K0h6GRy/Group-245.png" alt="" />
                                </div>
                                <div className="ms-3">
                                    <Card.Title>Home Delivery</Card.Title>
                                    <Card.Text className="text-muted mb-2">
                                        <small>Keep your systems insync with automated web hook based notifications each time ink paid and how we dream about our future</small>
                                    </Card.Text>
                                    <button className="btn ps-0">See more <FontAwesomeIcon icon={faArrowCircleRight} /></button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ChooseUs;