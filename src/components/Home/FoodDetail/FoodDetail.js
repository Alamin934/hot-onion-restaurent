import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import useFoods from '../../../hooks/useFoods';

const FoodDetail = () => {
    const { foodId } = useParams();
    const [foods] = useFoods([]);
    const [signleFood, setSignleFoods] = useState();

    useEffect(() => {
        // const foodDetails = foods.filter(food => parseInt(food?.id) === parseInt(foodId));
        const foodDetails = foods?.find(food => food?.id === parseInt(foodId));
        setSignleFoods(foodDetails);
    }, [foodId, foods]);
    return (
        <div className="py-5">
            <Container>
                <Row>
                    {/* Filter Button */}
                    <Col className="d-flex justify-content-center mb-5 fw-bold">
                        <Nav>
                            <Nav.Item>
                                <Nav.Link as={HashLink} to="/home#filterFood">Breakfast</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={HashLink} className="ms-2" to="/home#filterFood">Lunch</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={HashLink} className="ms-2" to="/home#filterFood">Dinner</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
                <Row className="d-flex align-items-center">
                    <Col xs={12} md={5}>
                        <h1 className="display-5 mb-4">{signleFood?.name}</h1>
                        <p className="text-muted"><small>{signleFood?.description}</small></p>
                        <div className="d-flex align-items-center">
                            <h2 className="me-4">${signleFood?.price}</h2>
                            <div className="border border-dark rounded-pill px-2">
                                <button type="button" className="btn">-</button>
                                <span>1</span>
                                <button type="button" className="btn">+</button>
                            </div>
                        </div>
                        <button className="btn-red mt-3"><FontAwesomeIcon icon={faShoppingCart} /> Add</button>
                    </Col>
                    <Col xs={12} md={7}>
                        <div className="text-center">
                            <img className="w-75" src={signleFood?.urlImage} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FoodDetail;