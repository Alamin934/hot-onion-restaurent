import React, { useEffect, useState } from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import Foods from '../Foods/Foods';
import './FilterFoos.css';

const FIlterFoods = () => {
    const [foods, setFoods] = useState([]);
    const [category, setCategory] = useState('breakfast');

    useEffect(() => {
        fetch('./foods.json')
            .then(res => res.json())
            .then(data => {
                const filterFood = data?.filter(d => d.category === category);
                setFoods(filterFood);
            })
    }, [category]);

    const handleFilter = (category) => {
        setCategory(category);
    }
    return (
        <div className="py-5 my-3 text-center filter-foods" id="filterFood">
            <Container>
                <Row>
                    {/* Filter Button */}
                    <Col className="d-flex justify-content-center">
                        <Nav defaultActiveKey="link-1">
                            <Nav.Item>
                                <Nav.Link eventKey="link-1" onClick={() => handleFilter('breakfast')}>Breakfast</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2" onClick={() => handleFilter('lunch')}>Lunch</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-3" onClick={() => handleFilter('dinner')}>Dinner</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
                <Row xs={1} md={2} lg={3} className="g-4 mt-4">
                    {
                        foods?.map(food => <Foods
                            key={food.id}
                            food={food}
                        ></Foods>)
                    }
                </Row>
                <div className="mt-5">
                    <button className="btn btn-secondary">Checkout Your Food</button>
                </div>
            </Container>
        </div>
    );
};

export default FIlterFoods;