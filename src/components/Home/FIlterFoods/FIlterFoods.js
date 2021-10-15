import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Foods from '../Foods/Foods';
import './FilterFoos.css';

const FIlterFoods = () => {
    const [foods, setFoods] = useState([]);
    const [displayFoods, setDisplayFoods] = useState([]);

    useEffect(() => {
        fetch('./foods.json')
            .then(res => res.json())
            .then(data => {
                setFoods(data);
                setDisplayFoods(data);
            })
    }, []);

    const handleFilter = (e) => {
        const filterValue = e.target.value;
        const filterFood = foods?.filter(food => food.category.includes(filterValue));
        setDisplayFoods(filterFood);
    }
    return (
        <div className="py-5 my-3 text-center filter-foods">
            <Container>
                <Row>
                    {/* Filter Button */}
                    <Col>
                        <button className="btn fw-bold" value="breakfast" onClick={handleFilter}>Breakfast</button>
                        <button className="btn fw-bold" value="lunch" onClick={handleFilter}>Lunch</button>
                        <button className="btn fw-bold" value="dinner" onClick={handleFilter}>Dinner</button>
                    </Col>
                </Row>
                <Row xs={1} md={3} className="g-4 mt-4">
                    {
                        displayFoods.slice(0, 6)?.map(food => <Foods
                            key={food.id}
                            food={food}
                        ></Foods>)
                    }
                </Row>
                <div className="mt-5">
                    <button className="btn btn-secondary" disabled>Checkout Your Food</button>
                </div>
            </Container>
        </div>
    );
};

export default FIlterFoods;